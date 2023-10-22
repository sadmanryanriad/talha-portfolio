import Banner from "../Home/sections/Banner";
import AboutMe from "../Home/sections/aboutMe/AboutMe";

const Home = () => {
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;