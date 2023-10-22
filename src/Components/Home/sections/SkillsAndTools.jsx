import GoogleAnalyticsLogo from "../../../assets/GAnalytics.svg.png";
import GoogleTagManagerLogo from "../../../assets/download.png";
import DataAnalysisLogo from "../../../assets/123748918-flat-design-of-data-analysis-magnifier-with-pie-chart-and-arrow-premium-quality-symbol-modern-style.jpg";
import ConversionRateOptimizationLogo from "../../../assets/download (1).png";
import SEOLogo from "../../../assets/download (2).png";

const SkillsAndTools = () => {
  const skillsAndTools = [
    { name: "Google Analytics", logo: GoogleAnalyticsLogo },
    { name: "Google Tag Manager", logo: GoogleTagManagerLogo },
    { name: "Data Analysis", logo: DataAnalysisLogo },
    { name: "Conversion Rate Optimization", logo: ConversionRateOptimizationLogo },
    { name: "SEO", logo: SEOLogo },
    // Add more skills and tools as needed
  ];

  return (
    <section id="skills-and-tools" className="bg-gray-100 dark:bg-gray-700 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-slate-300">
          Skills and Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsAndTools.map((item, index) => (
            <div
              key={index}
              className="group p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <div className="text-lg dark:text-white group-hover:font-semibold">
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
