import { Header } from '@/components/Header/Header';
import { BasePageTemplate } from '@/templates/BasePageTemplate';

export default function Loading() {
  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <div>Loading...</div>
        </div>
      </div>
    </BasePageTemplate>
  );
}
