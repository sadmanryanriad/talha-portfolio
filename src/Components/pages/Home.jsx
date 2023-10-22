import Banner from "../Home/sections/Banner";
import AboutMe from "../Home/sections/aboutMe/AboutMe";
import useScrollToTop from "../../Hooks/useScrollToTop";

const Home = () => {
    const { isScrollVisible, scrollToTop } = useScrollToTop(200);

  return (
    <div className="space-y-8">
      <Banner></Banner>
      <AboutMe></AboutMe>
      {/* Render the scroll-to-top button when showScrollButton is true */}
      {isScrollVisible && (
        <button
          className="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default Home;
