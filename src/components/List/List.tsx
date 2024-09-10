"use client"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Product } from './listType'
import TableRow from "@/components/Card/Card";
import IntupSearch from "@/components/IntupSearch/IntupSearch";
import Header from "@/components/SectionMenu/SectionMenu"
import Pagination from "@/components/Pagination/Pagination";

const Container = styled.div`
  display: flex; 
  gap: 12px;
  flex-direction: column; 
  margin: 40px; 
`
const NoResultsMessage = styled.p`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
`

export default function List({ listProcut }: { listProcut: Product[] }) {
  const [products, setProducts] = useState<Product[]>(listProcut);
  const [initialFilteredProducts, setInitialFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setInitialFilteredProducts(products.filter(product =>
      searchTerm.toLowerCase() === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    ));
    setCurrentPage(1)
  }, [searchTerm, products]);

  const handleDelete = (id: number) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  }

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setProducts(items);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentProducts = initialFilteredProducts.slice(firstItemIndex, lastItemIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
