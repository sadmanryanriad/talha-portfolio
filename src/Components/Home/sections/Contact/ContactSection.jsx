import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div id="contact-me" className="bg-gray-100 dark:bg-gray-700 p-10 text-center pt-16 md:pt-24">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center dark:text-gray-300">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center p-5">
        <div className="mx-5">
          <a
            href="tel:+8801303927449"
            className="text-2xl dark:text-gray-300 hover:text-orange-400  dark:hover:text-orange-400 flex items-center mb-3"
          >
            <FaPhone className="mr-3" /> +8801303927449
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://wa.me/8801303927449"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl dark:text-gray-300 hover:text-orange-400  dark:hover:text-orange-400  flex items-center mb-3"
          >
            <FaWhatsapp className="mr-3" /> WhatsApp: +8801303927449
          </a>
        </div>
        <div className="mx-5">
          <a
            href="mailto:shahriartalha@gmail.com"
            className="text-2xl dark:text-gray-300 hover:text-orange-400  dark:hover:text-orange-400  flex items-center mb-3"
          >
            <FaEnvelope className="mr-3" /> shahriartalha@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
