import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';

export default function Page() {
  return (
    <BasePageTemplate header={<Header />}>
      <div className="flex flex-1 justify-center px-40 py-5">
        <div className="layout-content-container flex w-[512px] max-w-[512px] flex-1 flex-col py-5">
          <h1 className="px-4 pb-3 pt-5 text-center text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
            Add a new word
          </h1>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex min-w-40 flex-1 flex-col">
              <input
                placeholder="Enter word"
                className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-none bg-[#283139] p-4 text-base font-normal leading-normal text-white placeholder:text-[#9cacba] focus:border-none focus:outline-0 focus:ring-0"
                value=""
              />
            </label>
          </div>
          <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Meanings</h3>
          <div className="flex gap-4 bg-[#111518] px-4 py-3">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
              data-icon="Plus"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium leading-normal text-white">Facilitation</p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">
                The act of making something easier or simpler or more pleasant.
              </p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">Noun</p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#111518] px-4 py-3">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
              data-icon="Plus"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium leading-normal text-white">Stewardess</p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">
                A person who is employed to look after the passengers on a ship, aircraft, or train.
              </p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">Noun</p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#111518] px-4 py-3">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
              data-icon="Plus"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium leading-normal text-white">Invest</p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">
                To give money to a company in exchange for a share of its ownership.
              </p>
              <p className="text-sm font-normal leading-normal text-[#9cacba]">Verb</p>
            </div>
          </div>
          <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Tags</h3>
          <div className="flex flex-wrap gap-3 p-3 pr-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">formal</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">business</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">aviation</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">finance</p>
            </div>
          </div>
          <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Examples</h3>
          <div className="flex min-h-[72px] items-center gap-4 bg-[#111518] px-4 py-2">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
              data-icon="Plus"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Facilitation</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                The facilitation of international trade
              </p>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center gap-4 bg-[#111518] px-4 py-2">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
              data-icon="Plus"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Stewardess</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                She worked as a stewardess on an ocean liner
              </p>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center gap-4 bg-[#111518] px-4 py-2">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
              data-icon="Plus"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Invest</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                The company is seeking investors for its new restaurant
              </p>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <button className="flex h-10 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#2094f3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
              <span className="truncate">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </BasePageTemplate>
  );
}
