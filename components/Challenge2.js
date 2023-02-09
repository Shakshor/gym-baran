import Image from "next/image";

const Challenge2 = ({ name }) => {
  return (
    <div className="flex justify-center items-center text-white">
      {/* ---------- left part --------- */}
      <div className="relative rounded-[20px] mr-[30px] ">
        <svg
          className=""
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_b_2_1282)">
            <rect width="100" height="100" rx="20" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_b_2_1282"
              x="-64"
              y="-64"
              width="228"
              height="228"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_2_1282"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_2_1282"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className="absolute top-8 left-7"
          width="44"
          height="50"
          viewBox="0 0 44 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.9689 20.2834C41.8666 15.6199 39.94 10.3006 36.3763 6.94512C36.2717 6.84577 36.1638 6.75765 36.054 6.67557C38.067 4.68853 34.8739 1.57925 32.6882 3.51359C28.4454 7.27169 23.5054 10.0319 18.3365 12.3032C18.1413 12.3637 17.9512 12.438 17.7663 12.5235C13.3499 12.3386 7.94086 11.3961 4.86095 8.22979C2.7806 6.09069 -0.484193 9.36154 1.59442 11.4972C4.88773 14.8846 9.99702 16.3818 14.8489 16.9235C14.8437 17.3684 14.9024 17.8168 15.0441 18.2583C16.9387 24.1633 21.0113 29.9386 27.0562 32.0242C27.4527 32.1624 27.8562 32.2246 28.2562 32.235C28.2562 37.1335 28.2562 42.0302 28.2562 46.927C28.2562 51.0237 34.6104 51.0237 34.6104 46.927C34.6104 40.7456 34.6104 34.5624 34.6104 28.3827C38.7089 26.8 43.8648 24.0639 42.9689 20.2834ZM30.7046 23.0402C30.3746 22.8466 30.0247 22.6799 29.6523 22.552C30.01 22.7481 29.9219 22.7041 29.3836 22.4199C29.1037 22.2747 28.9888 22.2281 28.9447 22.2186C28.9145 22.1788 28.8195 22.0838 28.5655 21.8687C27.9901 21.384 27.2998 20.6678 26.9249 20.1693C25.7871 18.6574 24.9534 17.0307 24.5309 15.7166C24.4126 15.3529 24.2579 15.0099 24.0774 14.6868C26.5413 13.4471 28.9188 12.0613 31.1832 10.4985C31.3422 10.8224 31.5694 11.1386 31.8856 11.4358C34.1966 13.6129 35.4977 16.9434 36.3633 20.0855C34.6933 21.4488 32.7651 22.3317 30.7046 23.0402Z"
            fill="white"
          />
          <path
            d="M16.3737 10.8717C19.3758 10.8717 21.8095 8.43799 21.8095 5.43585C21.8095 2.43371 19.3758 0 16.3737 0C13.3715 0 10.9378 2.43371 10.9378 5.43585C10.9378 8.43799 13.3715 10.8717 16.3737 10.8717Z"
            fill="white"
          />
        </svg>
      </div>

      {/* -------- right part ----------*/}
      <div>
        <h1 className="leading-7 font-bold text-xl">
          14 Days <br></br> sherd challenge
        </h1>
        <button
          className="flex items-center justify-center font-normal leading-7
        mt-[16px]"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[10px] mt-1.5 ml-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Challenge2;
