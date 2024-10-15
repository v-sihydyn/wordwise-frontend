import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/Pagination/Pagination';
import { generatePaginationLinks } from './generatePages';
import { usePathname, useSearchParams } from 'next/navigation';

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  showPreviousNext: boolean;
  onPageChange: (page: number) => void;
};

export default function Paginator({ currentPage, totalPages, showPreviousNext, onPageChange }: PaginatorProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPathUrl = (page: string | number) => {
    if (page === 1) {
      return pathname;
    }

    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${pathname}?${params}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {showPreviousNext && totalPages ? (
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            href={createPathUrl(currentPage - 1)}
            disabled={currentPage - 1 < 1}
          />
        ) : null}
        {generatePaginationLinks(currentPage, totalPages, onPageChange, createPathUrl)}
        {showPreviousNext && totalPages ? (
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            href={createPathUrl(currentPage + 1)}
            disabled={currentPage > totalPages - 1}
          />
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
