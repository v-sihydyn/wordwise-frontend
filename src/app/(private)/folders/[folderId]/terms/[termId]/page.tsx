import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';
import { Suspense } from 'react';
import { fetchOneTerm } from '@/api/termApi';

export default function TermDetailsPage({ params }: { params: { termId: string } }) {
  const termId = Number(params.termId);

  return (
    <BasePageTemplate header={<Header />}>
      <Suspense>
        <TermDetailsView termId={termId} />
      </Suspense>
    </BasePageTemplate>
  );
}

async function TermDetailsView({ termId }: { termId: number }) {
  const termData = await fetchOneTerm(termId);
  const term = termData?.data;

  // @TODO: empty state
  if (!term) return null;

  const { value, meanings, examples } = term?.attributes ?? {};

  return (
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex w-full flex-1 flex-col">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">{value}</p>
          </div>
        </div>
        {meanings && meanings.length > 0 ? (
          <>
            <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Meanings</h3>
            {meanings.map((m) => (
              <div key={m.id} className="mb-4 flex min-h-[72px] items-center gap-4 bg-[#111518] px-4 py-2">
                <div className="flex flex-col justify-center">
                  <p className="line-clamp-1 text-base font-medium leading-normal text-[#9cacba]">{m.text}</p>
                </div>
              </div>
            ))}
          </>
        ) : null}

        {examples && examples.length > 0 ? (
          <>
            <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Examples</h3>
            {examples.map((e) => (
              <div key={e.id} className="mb-4 flex gap-4 bg-[#111518] px-4 py-3">
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-base font-medium leading-normal text-[#9cacba]">{e.text}</p>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
