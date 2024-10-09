import { Header } from '@/components/Header/Header';
import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Folder, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { TermsList } from '@/app/(private)/folders/[folderId]/_components/TermsList';
import Link from 'next/link';
import { fetchOneFolder } from '@/api/folderApi';
import { fetchTermsByFolder } from '@/api/termApi';

export default function Page({ params }: { params: { folderId: string } }) {
  const folderId = Number(params.folderId);

  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <div>
            {/* @TODO: loading state */}
            <FolderDetailsPageHeader id={folderId} />
          </div>
          <div className="page-content flex flex-col gap-6">
            <div className="flex w-full items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search terms"
                />
              </div>
              <Button type="submit">Search</Button>
            </div>

            {/* @TODO: loading state */}
            <TermsWidget folderId={folderId} />

            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-white" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full bg-[#283139] text-sm font-bold leading-normal tracking-[0.015em] text-white"
                href="#"
              >
                1
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full text-sm font-normal leading-normal text-white"
                href="#"
              >
                2
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full text-sm font-normal leading-normal text-white"
                href="#"
              >
                3
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full text-sm font-normal leading-normal text-white"
                href="#"
              >
                4
              </a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-white" data-icon="CaretRight" data-size="18px" data-weight="regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>
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

async function TermsWidget({ folderId }: { folderId: number }) {
  const termsData = await fetchTermsByFolder({ folderId });
  const terms = termsData?.data ?? [];

  if (terms.length === 0) return <h3>No terms</h3>;

  return <TermsList terms={terms} folderId={folderId} />;
}
