import Challenges from "./Challenges";
import Hero from "./Hero";
import IntroArea from "./IntroArea";
import DescriptionArea from "./DescriptionArea";

const Main = () => {
  return (
    <main>
      <Hero></Hero>
      <IntroArea></IntroArea>
      <Challenges></Challenges>
      <DescriptionArea></DescriptionArea>
    </main>
  );
};

export default Main;
