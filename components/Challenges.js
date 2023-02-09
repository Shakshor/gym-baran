import Challenge from "./Challenge";
import Challenge2 from "./Challenge2";
import Challenge3 from "./Challenge3";

const Challenges = () => {
  return (
    <div
      className=" w-[1236px] h-[274px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] 
      flex md:flex-row flex-col justify-center items-center mx-auto rounded-[30px] gap-[80px]"
    >
      <Challenge></Challenge>
      <Challenge2></Challenge2>
      <Challenge3></Challenge3>
    </div>
  );
};

export default Challenges;
