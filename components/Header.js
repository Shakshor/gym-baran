const Header = () => {
  return (
    <>
      <header className="bg-black">
        <nav
          className="flex justify-between items-center md:mx-[100px] 
                    pt-4 mx-[29px] h-48"
        >
          <div>
            <a className="text-[#6765F0] text-xl">
              <span
                className="bg-[#6765F0] text-white 
                          px-2 py-1 rounded-[8px]"
              >
                Gym
              </span>
              baran
            </a>
          </div>

          <div
            className="md:static absolute bg-red-500
                  left-0 top-[-100%] h-36 flex items-center md:w-auto w-full"
          >
            <ul className="flex md:flex-row flex-col pl-7 md:pl-0">
              <li className="md:mx-[25px] md:py-1">
                <a>Home</a>
              </li>
              <li className="md:mx-[25px] md:py-1">
                <a>Program</a>
              </li>
              <li className="md:mx-[25px] md:py-1">
                <a>Blog</a>
              </li>
              <li className="md:ml-[25px] md:py-1">
                <a>About us</a>
              </li>

              <div className="md:ml-[48px]">
                <button
                  className="bg-[#264373] text-white 
                            px-5 py-1 rounded-[0.625rem]"
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
