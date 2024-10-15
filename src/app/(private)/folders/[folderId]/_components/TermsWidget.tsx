'use client';
import { TermsList } from '@/app/(private)/folders/[folderId]/_components/TermsList';
import Paginator from '@/components/ui/Pagination/Paginator';
import { components } from '@/types/generated/schema';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function TermsWidget({
  terms,
  totalPages,
}: {
  terms: components['schemas']['TermListResponseDataItem'][];
  totalPages: number;
}) {
  const params = useParams();
  const searchParams = useSearchParams();
  const folderId = Number(params.folderId);
  const currentPage = Number(searchParams.get('page')) || 1;
  const router = useRouter();
  const pathname = usePathname();
  const q = searchParams.get('q') || '';

  const [isPending, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') ?? '');

  const handleSearch = () => {
    startTransition(() => {
      const q = searchQuery.trim();

      if (q) {
        router.push(`${pathname}?q=${q}`);
      } else {
        router.push(pathname);
      }
    });
  };

  const handlePageChange = (page: number) => {
    startTransition(() => {
      const params = new URLSearchParams(window.location.search);

      if (page > 1) {
        params.set('page', page.toString());
      } else {
        params.delete('page');
      }

      router.push(`${pathname}?${params.toString()}`);
    });
  };

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q') || '';

      setSearchQuery(q);
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const list =
    terms.length > 0 ? (
      <>
        <TermsList terms={terms} folderId={folderId} searchQuery={q} />

        <Paginator
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          showPreviousNext={true}
        />
      </>
    ) : (
      <h3>No terms</h3>
    );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex w-full items-center space-x-2"
      >
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search terms"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            name="q"
            disabled={isPending}
          />
        </div>
        <Button type="submit" disabled={isPending}>
          Search
        </Button>
      </form>
      {isPending ? <TermsList.Skeleton /> : list}
    </>
  );
}
