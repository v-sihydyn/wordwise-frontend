import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';

export default function Page() {
  return (
    <BasePageTemplate header={<Header />}>
      <div className="flex flex-1 justify-center px-40 py-5">
        <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">Mandarin</p>
              <p className="text-base font-normal leading-normal text-[#9cacba]">noun</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 p-3 pr-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">Chinese</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">language</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">China</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">Asia</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">culture</p>
            </div>
          </div>
          <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Meanings</h3>
          <div className="flex min-h-[72px] items-center gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">
                a group of dialects spoken in northern and southwestern China
              </p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                a group of related Chinese dialects spoken across most of northern and southwestern China. They are
                quite similar to each other and share a large common vocabulary.
              </p>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">standard Chinese</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                the standard literary and official form of Chinese based on the Beijing dialect, spoken by over 70
                percent of the population.
              </p>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">
                the official language of China
              </p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                the official language of China, based on the Beijing dialect.
              </p>
            </div>
          </div>
          <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Examples</h3>
          <div className="flex gap-4 bg-[#111518] px-4 py-3">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium leading-normal text-white">
                She speaks Mandarin, but her native language is Cantonese.
              </p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">
                She speaks Mandarin, but her native language is Cantonese.
              </p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">
                She speaks Mandarin, but her native language is Cantonese. Mandarin is a tonal language with four main
                tones: flat, rising, falling-rising, and falling. Mandarin is written in simplified Chinese characters,
                but traditional characters are still used in Taiwan and Hong Kong.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#111518] px-4 py-3">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium leading-normal text-white">
                The majority of Chinese immigrants in the US speak Mandarin.
              </p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">
                The majority of Chinese immigrants in the US speak Mandarin.
              </p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">
                The majority of Chinese immigrants in the US speak Mandarin. Mandarin is the most widely spoken language
                in the world, with over a billion native speakers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BasePageTemplate>
  );
}
