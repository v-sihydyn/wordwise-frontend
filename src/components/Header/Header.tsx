import { LogoutButton } from '@/components/LogoutButton/LogoutButton';

export const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283139] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">WordWise</h2>
        </div>
        <label className="flex !h-10 min-w-40 max-w-64 flex-col">
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
              placeholder="Search"
              className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl rounded-l-none border-l-0 border-none bg-[#283139] px-4 pl-2 text-base font-normal leading-normal text-white placeholder:text-[#9cacba] focus:border-none focus:outline-0 focus:ring-0"
              defaultValue=""
            />
          </div>
        </label>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex gap-2">
          <button className="flex h-10 min-w-0 max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#283139] px-2.5 text-sm font-bold leading-normal tracking-[0.015em] text-white">
            <div className="text-white" data-icon="Question" data-size="20px" data-weight="regular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </div>
          </button>
          <button className="flex h-10 min-w-0 max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#283139] px-2.5 text-sm font-bold leading-normal tracking-[0.015em] text-white">
            <div className="text-white" data-icon="Moon" data-size="20px" data-weight="regular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
              </svg>
            </div>
          </button>
          <button className="flex h-10 min-w-0 max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#283139] px-2.5 text-sm font-bold leading-normal tracking-[0.015em] text-white">
            <div className="text-white" data-icon="Sun" data-size="20px" data-weight="regular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
              </svg>
            </div>
          </button>
        </div>
        <div
          className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.usegalileo.ai/stability/86480509-1893-47b2-b666-3c71bb41b48f.png")',
          }}
        ></div>
        <LogoutButton />
      </div>
    </header>
  );
};
