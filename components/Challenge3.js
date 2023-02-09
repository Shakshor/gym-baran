import Image from "next/image";

const Challenge3 = ({ name }) => {
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
          width="48"
          height="50"
          viewBox="0 0 48 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.1713 17.3676C37.852 20.194 32.5578 23.1128 27.3855 26.2164C25.5464 24.3925 24.0219 22.9407 23.6292 21.2145C23.6507 21.1114 23.561 20.0461 23.5664 19.8954C23.587 19.3538 23.6139 18.8122 23.6713 18.2724C23.8372 16.7524 24.1116 15.2424 24.3591 13.7323C24.7608 11.2708 23.7135 8.82187 21.1229 8.12781C20.2019 7.88122 19.1537 7.97447 18.2112 8.33764C17.8669 8.14933 17.4714 8.01841 17.0204 7.9682C13.212 7.54584 9.47363 6.70741 5.88766 5.35158C2.30707 3.99843 0.775478 9.72576 4.31302 11.0637C7.81022 12.3863 11.4303 13.1575 15.1149 13.6561C15.1023 13.726 15.0907 13.796 15.0772 13.8659C10.7739 14.6918 6.55392 15.8584 2.39943 17.2896C-1.19012 18.5252 0.352228 24.2499 3.97406 23.0016C7.39055 21.8243 10.8492 20.8262 14.3625 20.0488C14.3589 21.3418 14.4899 22.6161 14.8369 23.841C15.6619 26.7445 17.4652 29.0832 19.4908 31.2335C18.2552 32.0728 17.0123 32.8969 15.7067 33.608C13.3878 34.8715 10.807 36.5528 9.91481 39.1928C8.25858 44.0942 13.3708 46.0365 15.9667 49.0288C18.4731 51.9198 22.6455 47.7116 20.1553 44.8394C18.9098 43.4037 17.2168 42.5205 15.8968 41.1781C15.2619 40.5298 15.3453 41.1153 16.0394 40.4849C17.0473 39.5676 18.2166 39.0295 19.385 38.348C23.0535 36.2103 26.496 33.6609 30.1546 31.4864C35.4174 28.3622 40.7538 25.3564 46.1592 22.4815C49.5344 20.6881 46.543 15.575 43.1713 17.3676Z"
            fill="white"
          />
          <path
            d="M27.0762 9.29536C29.643 9.29536 31.7239 7.21452 31.7239 4.64768C31.7239 2.08084 29.643 0 27.0762 0C24.5093 0 22.4285 2.08084 22.4285 4.64768C22.4285 7.21452 24.5093 9.29536 27.0762 9.29536Z"
            fill="white"
          />
        </svg>
      </div>

      {/* -------- right part -------*/}
      <div>
        <h1 className="leading-7 font-bold text-xl">
          Get flat belly <br></br> in 30 days
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
            className="w-[10px] mt-1.5 ml-3 text-[#262524]"
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

export default Challenge3;
