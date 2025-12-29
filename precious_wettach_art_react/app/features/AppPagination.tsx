
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationContent,
} from '../../src/components/ui/pagination';
import type { Pagination as PaginationType } from 'Types/pagination';

type Props = {
  metadata: PaginationType;
  onPageChange: (page: number) => void;
};

const AppPagination = ({ metadata, onPageChange }: Props) => {
  const { currentPage, totalPages, pageSize, totalCount } = metadata;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  // Helper to generate page numbers for ShadCN pagination
  const generatePages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="mt-[50px] mb-[150px] flex items-center gap-4 p-4">
      <h3 className='w-full'>
        Displaying {startItem}-{endItem} of {totalCount}
      </h3>

      <Pagination>
        <PaginationPrevious
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          
        >
          Previous
        </PaginationPrevious>

        <PaginationContent>
          {generatePages().map((page) => {
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <PaginationItem key={page} >
                  <PaginationLink onClick={() => onPageChange(page)}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if (
              page === currentPage - 2 ||
              page === currentPage + 2
            ) {
              return <PaginationEllipsis key={`ellipsis-${page}`} />;
            }
            return null;
          })}
        </PaginationContent>

        <PaginationNext
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          
        >
          Next
        </PaginationNext>
      </Pagination>
    </div>
  );
};

export default AppPagination;
