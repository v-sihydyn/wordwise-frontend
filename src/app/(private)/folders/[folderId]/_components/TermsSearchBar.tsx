'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FormEvent, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const TermsSearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') ?? '');

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

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    const q = searchQuery.trim();

    if (q) {
      router.push(`${pathname}?q=${q}`);
    } else {
      router.push(pathname);
    }
  };

  return (
    <form onSubmit={handleSearch} action={pathname} className="flex w-full items-center space-x-2">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Search terms"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          name="q"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};
