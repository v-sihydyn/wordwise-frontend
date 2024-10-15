import { Header } from '@/components/Header/Header';
import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Folder } from 'lucide-react';
import { Button } from '@/components/ui/Button';

import Link from 'next/link';
import { fetchOneFolder } from '@/api/folderApi';
import { fetchTermsByFolder } from '@/api/termApi';
import { Suspense } from 'react';
import { TermsWidget } from '@/app/(private)/folders/[folderId]/_components/TermsWidget';

export default async function Page({
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

  const termsData = await fetchTermsByFolder({ folderId, page: currentPage, searchQuery: q });
  const terms = termsData?.data ?? [];

  const meta = termsData?.meta;
  const totalPages = meta?.pagination?.pageCount ?? 0;

  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <div>
            <Suspense fallback={'Loading...'}>
              <FolderDetailsPageHeader id={folderId} />
            </Suspense>
          </div>
          <div className="page-content flex flex-col gap-6">
            <TermsWidget terms={terms} totalPages={totalPages} />
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
