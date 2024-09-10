import styled from 'styled-components';
import { PaginationProps } from './paginationType'

const SectionPagination = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px;
  gap: 15px; 
`
const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 17px;
  background-color: #9dc0f3;
  transition: box-shadow .5s ease;
  
  &:hover {
    box-shadow: 0px 0px 20px 0px #7298c1;
  }

  &.active {
    background-color: #548ee4;
  }
`

export default function Pagination({
  arr,
  itemsPerPage,
  handlePageChange,
  currentPage }: PaginationProps) {

  if (arr.length <= itemsPerPage) {
    return null
  }

  const totalPages = Math.ceil(arr.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <SectionPagination>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={currentPage === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </Button>
      ))}
    </SectionPagination>
  )
}