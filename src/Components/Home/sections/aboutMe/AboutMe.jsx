import talhaPic from "../../../../assets/IMG_2598__1_-removebg-preview.png";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="bg-gray-100  dark:bg-gray-700  sm:p-4  pt-8 md:pt-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center text-center p-5">
        <div className="md:w-3/5 sm:p-5 text-gray-700">
          <h2 className="text-2xl lg:text-3xl font-bold mb-5 mt-5 dark:text-slate-300">
            About me
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-2 mt-5 dark:text-slate-300">
            Shahriar Arafat <span className="text-orange-400">Talha</span>
          </h2>
          <h5 className=" font-semibold mb-5 dark:text-slate-300">
            {" "}
            Expert in Web Analytics
          </h5>
          <p id="bio" className="text-lg md:text-xl dark:text-slate-300">
            With 5+ years of web analytics expertise, Im Shahriar Talha 🚀.
            Transforming data into insights and driving online success is my
            passion. Lets decode your digital journey together! 📊
          </p>
        </div>
        <div className="md:w-2/5">
          <div className="overflow-hidden">
            <img className="w-full" src={talhaPic} alt="Shahriar Talha" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
