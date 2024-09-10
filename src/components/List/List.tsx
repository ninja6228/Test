"use client"
import { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Product } from './listType'
import TableRow from "@/components/Card/Card";
import IntupSearch from "@/components/IntupSearch/IntupSearch";
import Header from "@/components/SectionMenu/SectionMenu"
import Pagination from "@/components/Pagination/Pagination";
import { Container, NoResultsMessage } from "./styled";

export default function List({ listProcut }: { listProcut: Product[] }) {
  const [products, setProducts] = useState<Product[]>(listProcut);
  const [initialFilteredProducts, setInitialFilteredProducts] = useState<Product[]>([]);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const filtered = products.filter(product =>
      searchTerm.toLowerCase() === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setInitialFilteredProducts(filtered);
    setCurrentProducts(filtered.slice(0, itemsPerPage));
    setCurrentPage(1);
  }, [searchTerm]);

  const handleDelete = (id: number) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    const filteredProducts = initialFilteredProducts.filter(product => product.id !== id);
    setInitialFilteredProducts(filteredProducts)
    setCurrentProducts(filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
  }

  const handleOnDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;
    const updatedCurrentProducts = [...currentProducts];
    const [reorderedItem] = updatedCurrentProducts.splice(result.source.index, 1);
    updatedCurrentProducts.splice(result.destination.index, 0, reorderedItem);
    setCurrentProducts(updatedCurrentProducts);
  }, [currentProducts]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const lastItemIndex = pageNumber * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    setCurrentProducts(initialFilteredProducts.slice(firstItemIndex, lastItemIndex));
  };

  return (
    <Container>
      <IntupSearch setSearchTerm={setSearchTerm} />
      <Header />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="products">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {!currentProducts.length
                ? <NoResultsMessage>Ничего не нашли</NoResultsMessage>
                : currentProducts.map((product, index) => (
                  <Draggable
                    key={product.id}
                    draggableId={product.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <TableRow
                          product={product}
                          handleDelete={handleDelete} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Pagination
        arr={initialFilteredProducts}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage} />
    </Container>
  );
}
