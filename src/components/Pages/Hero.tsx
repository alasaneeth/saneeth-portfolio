import heroImage from "../../assets/images/Hero.jpg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import HackerRank from "../../assets/images/hackerRank.png"
// import Microsoft from "../../assets/images/microsoft.png"

const Hero = () => {
  return (
    <section id='home' className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-[#f9fafb] to-[#e5e7eb]">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Hi, I'm <span className="text-indigo-600">Saneeth</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-gray-500 pr-5">
            IBM Certified Data Scientist
          </span>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/alasaneeth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black text-2xl transform transition-transform duration-300 hover:scale-150"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aasif-saneeth-bin-abdul-latheef/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl transform transition-transform duration-300 hover:scale-150"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+9710568358651"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-green-800  text-2xl transform transition-transform duration-300 hover:scale-150"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          {/* <a
            href="https://www.hackerrank.com/profile/alasaneeth22"
            target="_blank"
            rel="noopener noreferrer"
            title="HackerRank"
          >
            <img
              className="transform transition-transform duration-300 hover:scale-150"
              height={25}
              width={25}
              src={HackerRank}
              alt="HackerRank"
            />
          </a> */}
          {/* <a
            href="https://learn.microsoft.com/en-us/users/aasifsaneeth-5418/"
            target="_blank"
            rel="noopener noreferrer"
            title="Microsoft Learn"
          >
            <img
              className="transform transition-transform duration-300 hover:scale-150"
              height={25}
              width={25}
              src={Microsoft}
              alt="Microsoft"
            />
          </a> */}
        </div>

        {/* <div>
          <ResumeButton/>
        </div> */}
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          className="rounded-2xl shadow-lg max-w-xs md:max-w-md lg:max-w-lg"
          src={heroImage}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default Hero;
