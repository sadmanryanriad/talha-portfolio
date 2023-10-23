import bannerImage2 from "../../../assets/financial-2860753_1280.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="hero max-w-7xl w-full mx-auto h-[60vh] md:h-[80vh]"
        style={{
          backgroundImage: `url(${bannerImage2})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-base-300">
          <div className="w-full">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold w-full md:w-[90%] mx-auto">
              Elevating Digital Success:{" "}
              <span className="text-gray-700">Your Web Analytics Expert</span>
            </h1>
            <p className="mb-5 font-semibold w-full md:w-2/3 mx-auto md:text-xl">
              Over 5 years of mastering the web analytics realm. Transforming
              data into insights, illuminating your digital journey. Lets
              conquer the online world together! 📈{" "}
            </p>
            <button className="btn btn-btn btn-sm sm:btn-md bg-gray-700 text-white border-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
