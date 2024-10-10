import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CreateFolderButton } from '@/app/(private)/_components/CreateFolderButton';
import { FoldersList } from '@/app/(private)/_components/FoldersList';
import { Suspense } from 'react';
import { FoldersListSkeleton } from '@/app/(private)/_components/FoldersListSkeleton';
import { fetchFolders } from '@/api/folderApi';

export const metadata = {
  title: 'WordWise',
};

export default function Home() {
  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <Card>
            <CardHeader className="flex-row justify-between gap-2">
              <CardTitle className="text-2xl">Folders</CardTitle>
              <CreateFolderButton />
            </CardHeader>
            <CardContent>
              <Suspense fallback={<FoldersListSkeleton />}>
                <FoldersWidget />
              </Suspense>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Terms by letter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-5">
                {alphabet.map((l) => (
                  <Link
                    key={l}
                    href={`/lexemes/${l}`}
                    className="flex shrink-0 items-center justify-center rounded-xl bg-secondary p-6 pl-4 pr-4"
                  >
                    <p className="text-lg font-medium leading-normal text-white">{l}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </BasePageTemplate>
  );
}

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

async function FoldersWidget() {
  const foldersData = await fetchFolders();
  const folders = foldersData?.data ?? [];

  return <FoldersList folders={folders} />;
}
