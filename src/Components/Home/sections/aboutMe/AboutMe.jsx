import talhaPic from "../../../../assets/IMG_2598__1_-removebg-preview.png";
const AboutMe = () => {
    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="flex flex-col-reverse md:flex-row text-center items-center">
            <div className="space-y-10 md:w-1/2">
                <h2 className="text-3xl md:text-5xl lg:text-6xl mt-5">Shahriar Talha</h2>
                <p className="md:text-xl">I blend creativity with strategy to create designs that dont just look good, but also deliver results. With a passion for visual storytelling and a keen eye for design,I transform ideas into captivating visuals which has honed the art of crafting designs that not only catch the eye but also convey messages effectively.</p>
            </div>
            <div className="md:w-1/2">
                <img className="w-full" src={talhaPic} alt="" />
            </div>
        </div>
        </div>
    );
};

export default AboutMe;