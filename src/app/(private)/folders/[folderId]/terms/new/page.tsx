import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';
import { TermForm } from '@/app/(private)/_components/TermForm';

export default function Page({ params }: { params: { folderId: string } }) {
  const folderId = Number(params.folderId);

  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Create Term</h3>
            <TermForm folderId={folderId} />
          </div>
        </div>
      </div>
    </BasePageTemplate>
  );
}
