import talhaPic from "../../../../assets/IMG_2598__1_-removebg-preview.png";
const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center p-10">
            <div className="space-y-10 md:w-1/2">
                <h2 className="text-3xl md:text-5xl lg:text-6xl">Shahriar Talha</h2>
                <p className="md:text-xl">I blend creativity with strategy to create designs that dont just look good, but also deliver results. With a passion for visual storytelling and a keen eye for design,I transform ideas into captivating visuals which has honed the art of crafting designs that not only catch the eye but also convey messages effectively.</p>
            </div>
            <div className="md:w-1/2">
                <img className="w-full" src={talhaPic} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;