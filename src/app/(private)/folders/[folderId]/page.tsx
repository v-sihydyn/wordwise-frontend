import { Header } from '@/components/Header/Header';
import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Folder, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { TermsList } from '@/app/(private)/folders/[folderId]/_components/TermsList';
import Link from 'next/link';
import { fetchOneFolder } from '@/api/folderApi';
import { fetchTermsByFolder } from '@/api/termApi';
import Paginator from '@/components/ui/Pagination/Paginator';
import { TermsSearchBar } from '@/app/(private)/folders/[folderId]/_components/TermsSearchBar';

export default function Page({
  params,
  searchParams,
}: {
  params: { folderId: string };
  searchParams?: {
    page?: string;
    q?: string;
  };
}) {
  const folderId = Number(params.folderId);
  const currentPage = Number(searchParams?.page) || 1;
  const q = searchParams?.q || '';

  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <div>
            {/* @TODO: loading state */}
            <FolderDetailsPageHeader id={folderId} />
          </div>
          <div className="">
            {/* @TODO: loading state */}
            <TermsWidget folderId={folderId} currentPage={currentPage} searchQuery={q} />
          </div>
        </div>
      </div>
    </BasePageTemplate>
  );
}

async function FolderDetailsPageHeader({ id }: { id: number }) {
  const folderData = await fetchOneFolder(id);
  const folder = folderData?.data ?? {};

  return (
    <div className="page-header flex items-center">
      <Folder width={32} height={32} className="mr-2" />
      <h3 className="text-2xl font-semibold leading-none tracking-tight">{folder.attributes?.name}</h3>

      <Button variant="outline" className="ml-auto" asChild={true}>
        <Link href={`/folders/${id}/terms/new`}>New term</Link>
      </Button>
    </div>
  );
}

async function TermsWidget({
  folderId,
  currentPage,
  searchQuery,
}: {
  folderId: number;
  currentPage: number;
  searchQuery: string;
}) {
  const termsData = await fetchTermsByFolder({ folderId, page: currentPage, searchQuery });
  const terms = termsData?.data ?? [];
  const meta = termsData?.meta;
  const totalPages = meta?.pagination?.pageCount ?? 0;

  return (
    <div className="page-content flex flex-col gap-6">
      <TermsSearchBar />
      {terms.length > 0 ? (
        <>
          <TermsList terms={terms} folderId={folderId} searchQuery={searchQuery} />

          <Paginator currentPage={currentPage} totalPages={totalPages} showPreviousNext={true} />
        </>
      ) : (
        <h3>No terms</h3>
      )}
    </div>
  );
}
