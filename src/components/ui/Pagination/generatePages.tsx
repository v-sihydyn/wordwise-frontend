import { PaginationEllipsis, PaginationLink } from '@/components/ui/Pagination/Pagination';
import React from 'react';

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number,
  generateUrl: (page: number | string) => string
) => {
  const pages: React.ReactElement[] = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationLink key={i} isActive={i === currentPage} href={generateUrl(i)}>
          {i}
        </PaginationLink>
      );
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationLink key={i} isActive={i === currentPage} href={generateUrl(i)}>
          {i}
        </PaginationLink>
      );
    }
    if (2 < currentPage && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis />);
      pages.push(
        <PaginationLink key={currentPage} isActive={true} href={generateUrl(currentPage)}>
          {currentPage}
        </PaginationLink>
      );
    }
    pages.push(<PaginationEllipsis />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationLink key={i} isActive={i === currentPage} href={generateUrl(i)}>
          {i}
        </PaginationLink>
      );
    }
  }
  return pages;
};
