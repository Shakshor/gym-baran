import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[85px] max-h-[581.94px] max-w-[1281px] mx-auto">
      <div className="flex justify-between items-center">
        {/* ------ 1st part -------*/}
        <div
          className="w-1/2 border-2 border-red-500
                    flex flex-col"
        >
          <h2 className="font-bold text-[73px] text-[#262524] leading-[73px]">
            Healthy in side <br></br>
            <span className="text-[#8382EB]">fresh</span> out side
          </h2>
          <p className="text-justify mt-[23px] text-[#262524] w-[26.25rem]">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>

          <div className="mt-[22px] flex">
            <div
              className="w-[246px] h-[56px] bg-[#264373] text-white flex justify-around items-center
                        drop-shadow-2xl rounded-[10px]"
            >
              <button>Get Started</button>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.996 9.55341 24.6251 6.24912 22.188 3.81201C19.7509 1.3749 16.4466 0.00398351 13 0V0ZM17.169 13.7432L12.169 18.2432C12.0714 18.3311 11.9574 18.3989 11.8336 18.4428C11.7098 18.4867 11.5786 18.5057 11.4474 18.4989C11.3162 18.492 11.1877 18.4594 11.0692 18.4028C10.9506 18.3463 10.8444 18.2669 10.7565 18.1693C10.6686 18.0716 10.6008 17.9577 10.557 17.8338C10.5132 17.71 10.4942 17.5788 10.5011 17.4476C10.5081 17.3164 10.5408 17.1879 10.5974 17.0694C10.654 16.9509 10.7334 16.8447 10.8311 16.7568L15.0049 13L10.8311 9.24316C10.6341 9.06571 10.5157 8.8173 10.5018 8.55256C10.488 8.28782 10.5798 8.02842 10.7572 7.83138C10.9346 7.63435 11.1829 7.51581 11.4476 7.50183C11.7124 7.48785 11.9718 7.57957 12.169 7.75684L17.169 12.2568C17.2731 12.3506 17.3565 12.4652 17.4135 12.5932C17.4705 12.7212 17.5 12.8598 17.5 13C17.5 13.1402 17.4705 13.2788 17.4135 13.4068C17.3565 13.5348 17.2731 13.6494 17.169 13.7432Z"
                  fill="white"
                />
              </svg>
            </div>

            <div
              className="w-[174px] h-[56px] bg-white text-[#264373] flex justify-around items-center
                        drop-shadow-2xl rounded-[10px] ml-[35px]"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.996 9.55341 24.6251 6.24912 22.188 3.81201C19.7509 1.3749 16.4466 0.00398351 13 0ZM17.5547 13.832L11.5547 17.832C11.4041 17.9326 11.2291 17.9904 11.0482 17.9992C10.8674 18.008 10.6875 17.9676 10.5279 17.8821C10.3683 17.7967 10.2348 17.6695 10.1418 17.5141C10.0489 17.3588 9.99985 17.1811 10 17V9C9.99985 8.81894 10.0489 8.64123 10.1418 8.48587C10.2348 8.3305 10.3683 8.20331 10.5279 8.11787C10.6875 8.03244 10.8674 7.99197 11.0482 8.00079C11.2291 8.00962 11.4041 8.0674 11.5547 8.16797L17.5547 12.168C17.6917 12.2593 17.804 12.383 17.8817 12.5281C17.9594 12.6733 18 12.8354 18 13C18 13.1646 17.9594 13.3267 17.8817 13.4719C17.804 13.617 17.6917 13.7407 17.5547 13.832Z"
                  fill="#264373"
                />
              </svg>

              <button>Learn more</button>
            </div>
          </div>

          {/*------ brands ------*/}
          <p className="mt-[51px]">Brands:</p>
          <div></div>
        </div>

        {/* ------ 2nd part --------*/}
        <div className="w-1/2 border-2 border-blue-500">
          <h3>Trainer part</h3>
          <Image
            src="/images/strong-man-training-gym2.png"
            width={380}
            height={580}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
