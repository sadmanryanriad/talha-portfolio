import talhaPic from "../../../../assets/IMG_2598__1_-removebg-preview.png";

const AboutMe = () => {
    return (
        <div id="about-me" className="bg-gray-100  dark:bg-gray-700  p-4 ">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center text-center p-5">
                <div className="md:w-1/2 text-gray-700">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-5 mt-5 dark:text-slate-300">About me</h2>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-2 mt-5 dark:text-slate-300">Shahriar <span className="text-orange-400">Talha</span></h2>
                    <h5 className=" font-semibold mb-5 dark:text-slate-300"> Expert in Web Analytics</h5>
                    <p className="text-lg md:text-xl dark:text-slate-300">I blend creativity with strategy to create designs that not just look good, but also deliver results. With a passion for visual storytelling and a keen eye for design, I transform ideas into captivating visuals. My designs not only catch the eye but also convey messages effectively.</p>
                </div>
                <div className="md:w-1/2">
                    <div className="border rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full" src={talhaPic} alt="Shahriar Talha" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
