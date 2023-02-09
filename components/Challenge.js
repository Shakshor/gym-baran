import Image from "next/image";

const Challenge = ({ name }) => {
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
          width="38.31"
          height="50"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2836 8.41699C22.6079 8.41699 24.4921 6.53278 24.4921 4.20849C24.4921 1.88421 22.6079 0 20.2836 0C17.9593 0 16.0751 1.88421 16.0751 4.20849C16.0751 6.53278 17.9593 8.41699 20.2836 8.41699Z"
            fill="white"
          />
          <path
            d="M37.1176 10.0379C32.5041 10.0379 27.887 10.0379 23.2744 10.0379C21.4995 8.88177 18.9862 8.87815 17.2294 10.0379C12.4474 10.0379 7.6636 10.0379 2.88159 10.0379C0.168946 10.0379 0.168946 14.2436 2.88159 14.2436C6.97864 14.2436 11.0757 14.2436 15.1728 14.2436C15.1728 18.2619 15.1728 22.2801 15.1728 26.2992C15.1728 26.4007 15.1827 26.4976 15.1872 26.5982C15.1854 26.6462 15.1737 26.687 15.1737 26.7359C15.1737 33.7178 15.161 40.6996 14.8729 47.6769C14.7451 50.781 19.5552 50.7683 19.683 47.6769C19.9095 42.2082 19.9647 36.7367 19.9783 31.2643C20.2066 31.2788 20.435 31.2806 20.6624 31.2661C20.6769 36.7376 20.7321 42.2091 20.9577 47.6769C21.0855 50.7683 25.8947 50.781 25.7678 47.6769C25.4797 40.6996 25.467 33.7178 25.467 26.7359C25.467 26.5221 25.4408 26.3237 25.3964 26.1389C25.3964 22.1741 25.3964 18.2093 25.3964 14.2436C29.3041 14.2436 33.2145 14.2436 37.1194 14.2436C39.8303 14.2436 39.8303 10.0379 37.1176 10.0379Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ---------- right part --------- */}
      <div>
        <h1 className="leading-7 font-bold text-xl">
          Get that 11 line <br></br> in 30 days
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
            className="w-[10px] mt-1.5 ml-3"
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

export default Challenge;
