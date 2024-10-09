import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';
import { TermForm } from '@/app/(private)/_components/TermForm';
import { fetchOneTerm } from '@/api/termApi';
import { Suspense } from 'react';

export default function Page({ params }: { params: { folderId: string; termId: string } }) {
  const folderId = Number(params.folderId);
  const termId = Number(params.termId);

  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <Suspense>
            <TermView folderId={folderId} termId={termId} />
          </Suspense>
        </div>
      </div>
    </BasePageTemplate>
  );
}

async function TermView({ folderId, termId }: { folderId: number; termId: number }) {
  const termData = await fetchOneTerm(termId);
  const term = termData?.data;

  // @TODO: empty state
  if (!term) return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">Edit Term</h3>
      <TermForm folderId={folderId} term={term} />
    </div>
  );
}
