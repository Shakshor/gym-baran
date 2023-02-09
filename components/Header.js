const Header = () => {
  return (
    <>
      <header className="w-[1246px] h-[50px] mx-auto">
        <nav
          className="flex justify-between items-center 
                    pt-4 h-20 w-full mx-auto"
        >
          <div className="w-[67px] h-[38px]">
            <a className="text-[#6765F0] text-xl">
              <span
                className="bg-[#6765F0] text-white 
                        px-[6px] py-[3px] rounded-[8px] drop-shadow-2xl mr-[11px]"
              >
                Gym
              </span>
              baran
            </a>
          </div>

          <div
            className="md:static absolute text-white
                  left-0 top-[-100%] h-16 flex items-center md:w-auto w-full"
          >
            <ul className="flex md:flex-row flex-col pl-7 md:pl-0 text-black">
              <li className="md:mx-[25px] md:py-3">
                <a>Home</a>
              </li>
              <li className="md:mx-[25px] md:py-3">
                <a>Program</a>
              </li>
              <li className="md:mx-[25px] md:py-3">
                <a>Blog</a>
              </li>
              <li className="md:ml-[25px] md:py-3">
                <a>About us</a>
              </li>

              <div className="md:ml-[48px]  drop-shadow-2xl">
                <button
                  className="bg-[#264373] text-white 
                            pr-[32px]  pl-[35px] py-[13px] rounded-[0.625rem]"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </ul>
          </div>

          <div className="md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
