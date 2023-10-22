import bannerImage2 from "../../../assets/financial-2860753_1280.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="hero max-w-7xl w-full mx-auto h-[60vh] md:h-[70vh]"
        style={{
          backgroundImage: `url(${bannerImage2})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-base-300">
          <div className="w-full">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold w-full md:w-[90%] mx-auto">
              Elevate your brand with captivating visuals that leave a lasting
              impression
            </h1>
            <p className="mb-5 font-semibold w-full md:w-2/3 mx-auto md:text-xl">
              I am your solution to businesses and companies, creating marketing
              collateral that turns heads and drives results. From striking
              logos to eye-catching brochures, we craft designs that resonate
              with your audience and amplify your message.
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
