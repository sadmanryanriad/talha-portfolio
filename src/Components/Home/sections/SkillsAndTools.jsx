import GoogleAnalyticsLogo from "../../../assets/GAnalytics.svg.png";
import GoogleTagManagerLogo from "../../../assets/tagmanager_email.webp";
import DataAnalysisLogo from "../../../assets/3.webp"
import ConversionRateOptimizationLogo from "../../../assets/14.jpg";
import SEOLogo from "../../../assets/11.png";
import detailAnalytics from "../../../assets/6.png";
import BigDataAnalytics from "../../../assets/4.jpg";
import CalculationAnalytics from "../../../assets/13.jpg";

const SkillsAndTools = () => {
  const skillsAndTools = [
    { name: "Google Analytics", logo: GoogleAnalyticsLogo },
    { name: "Google Tag Manager", logo: GoogleTagManagerLogo },
    { name: "Data Analysis", logo: DataAnalysisLogo },
    { name: "Conversion Rate Optimization", logo: ConversionRateOptimizationLogo },
    { name: "SEO", logo: SEOLogo },
    { name: "Detail Analytics", logo: detailAnalytics },
    { name: "Big Data Analytics", logo: BigDataAnalytics },
    { name: "Calculation Analytics", logo: CalculationAnalytics },
    // Add more skills and tools as needed
  ];

  return (
    <section id="skills-and-tools" className="bg-gray-100 dark:bg-gray-700 px-8  pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center dark:text-slate-300">
          Skills and Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsAndTools.map((item, index) => (
            <div
              key={index}
              className="group p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center 
              transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <div className="text-lg dark:text-white group-hover:text-orange-400">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
