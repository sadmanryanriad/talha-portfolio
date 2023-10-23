import ServiceCard from "./ServiceCard";


const services = [
    {
      id: 1,
      title: "Web Analytics",
      image: "gig1.webp"
    },
    {
      id: 2,
      title: "Google Tag Manager",
      image: "gig2.webp"
    },
    {
      id: 3,
      title: "Data Visualization",
      image: "gig3.webp"
    },
    {
      id: 4,
      title: "Conversion Optimization",
      image: "gig4.webp"
    },
    {
      id: 5,
      title: "E-commerce Analytics",
      image: "gig5.webp"
    },
    {
      id: 6,
      title: "SEO Performance",
      image: "gig6.jpeg"
    }
  ];
  
  const Services = () => {
    return (
      <div id="services" className="max-w-7xl mx-auto pt-16 md:pt-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center dark:text-slate-300">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Services;
