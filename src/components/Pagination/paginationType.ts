export interface PaginationProps {
  arr: {  
    id: number;
    name: string;
    parameters: string;
    visibility: boolean;
  }[];
  itemsPerPage: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}
