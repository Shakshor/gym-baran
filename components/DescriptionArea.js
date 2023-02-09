import Image from "next/image";

const DescriptionArea = () => {
  return (
    <div
      className="w-[1241px] h-[497px] border-2 border-red-500
  mx-auto flex justify-between items-center"
    >
      <div className="flex justify-around items-center">
        {/* ---------- 1st part ------ */}
        <div
          className="w-1/2 border-2 border-black
            flex items-center justify-center"
        >
          <Image
            src="/images/strong-man-training-gym2.png"
            width={416}
            height={496}
          ></Image>
        </div>

        {/* ------ 2nd part-------- */}
        <div className=" w-1/2 border-2 border-sky-700">
          <h1>
            Best full body <br></br> workout to lose fat
          </h1>
          <p>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button
            className="flex items-center justify-center
          border-2 border-blue-500"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[22px] mt-1 ml-3"
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
    </div>
  );
};

export default DescriptionArea;
