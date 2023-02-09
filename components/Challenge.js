import Image from "next/image";

const Challenge = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-[100px] h-[100px] border-2 border-red-400
        flex justify-center items-center rounded-[20px]"
      >
        <Image src="/images/exercise1.png" width={39} height={39}></Image>
      </div>

      <div>
        <h1>Get that 11 line in 30 days</h1>
        <button className="flex items-center justify-center">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[10px] h-[10px] mt-1 ml-3"
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
