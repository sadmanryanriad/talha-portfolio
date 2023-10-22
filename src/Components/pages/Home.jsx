import Banner from "../Home/sections/Banner";
import AboutMe from "../Home/sections/aboutMe/AboutMe";
import useScrollToTop from "../../Hooks/useScrollToTop";
import { BsArrowUpCircle } from "react-icons/bs";
import SkillsAndTools from "../Home/sections/SkillsAndTools";

const Home = () => {
    const { isScrollVisible, scrollToTop } = useScrollToTop(200);

  return (
    <div className="space-y-8">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <SkillsAndTools></SkillsAndTools>
      {/* Render the scroll-to-top button when showScrollButton is true */}
      {isScrollVisible && (
        <button
          className="fixed bottom-10 right-10 border bg-black dark:text-black text-white dark:bg-white text-3xl md:text-4xl rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <BsArrowUpCircle></BsArrowUpCircle>
        </button>
      )}
    </div>
  );
};

export default Home;
