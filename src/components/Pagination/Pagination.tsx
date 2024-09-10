import { PaginationProps } from './paginationType'
import { Button, SectionPagination } from './styled';

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