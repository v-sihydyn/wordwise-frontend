import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';

export default function Page() {
  return (
    <BasePageTemplate header={<Header />}>
      <div className="flex flex-1 justify-center px-40 py-5">
        <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
          <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
            My words
          </h2>
          <div className="flex flex-wrap gap-3 p-3 pr-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">All</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">Favorite</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">Learned</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
              <p className="text-sm font-medium leading-normal text-white">New</p>
            </div>
          </div>
          <div className="px-4 py-3">
            <label className="flex h-12 w-full min-w-40 flex-col">
              <div className="flex h-full w-full flex-1 items-stretch rounded-xl">
                <div
                  className="flex items-center justify-center rounded-l-xl border-r-0 border-none bg-[#283139] pl-4 text-[#9cacba]"
                  data-icon="MagnifyingGlass"
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
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search for words"
                  className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl rounded-l-none border-l-0 border-none bg-[#283139] px-4 pl-2 text-base font-normal leading-normal text-white placeholder:text-[#9cacba] focus:border-none focus:outline-0 focus:ring-0"
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Assign</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                v. to give a job or task to (someone)
              </p>
            </div>
            <div className="shrink-0">
              <div
                className="flex size-7 items-center justify-center text-white"
                data-icon="DotsNine"
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
                  <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Assign</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                v. to give a job or task to (someone)
              </p>
            </div>
            <div className="shrink-0">
              <div
                className="flex size-7 items-center justify-center text-white"
                data-icon="DotsNine"
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
                  <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Assign</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                v. to give a job or task to (someone)
              </p>
            </div>
            <div className="shrink-0">
              <div
                className="flex size-7 items-center justify-center text-white"
                data-icon="DotsNine"
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
                  <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Assign</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                v. to give a job or task to (someone)
              </p>
            </div>
            <div className="shrink-0">
              <div
                className="flex size-7 items-center justify-center text-white"
                data-icon="DotsNine"
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
                  <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-white">Assign</p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                v. to give a job or task to (someone)
              </p>
            </div>
            <div className="shrink-0">
              <div
                className="flex size-7 items-center justify-center text-white"
                data-icon="DotsNine"
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
                  <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                </svg>
              </div>
            </div>
          </div>
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
          <div className="flex justify-end overflow-hidden px-5 pb-5">
            <button className="flex h-14 min-w-0 max-w-[480px] cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-xl bg-[#2094f3] px-5 pl-4 pr-6 text-base font-bold leading-normal tracking-[0.015em] text-white">
              <div className="text-white" data-icon="Plus" data-size="24px" data-weight="regular">
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
              <span className="truncate">Add word</span>
            </button>
          </div>
        </div>
      </div>
    </BasePageTemplate>
  );
}
