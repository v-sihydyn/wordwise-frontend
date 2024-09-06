import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center px-40 py-5">
        <div className="layout-content-container flex flex-1 flex-col">
          <div className="grid grid-cols-5 gap-3 p-3">
            {alphabet.map((l) => (
              <Link
                key={l}
                href="/words"
                className="flex shrink-0 items-center justify-center rounded-xl bg-[#283139] p-6 pl-4 pr-4"
              >
                <p className="text-lg font-medium leading-normal text-white">{l}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BasePageTemplate>
  );
}

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
