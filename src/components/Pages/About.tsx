
const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-20 bg-white">
      {/* Text Content */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          I'm <strong>Saneeth</strong>, a highly motivated Full Stack Software Engineer with over 2 years
          of experience delivering dynamic and scalable web applications. I'm proficient in modern frontend
          and backend technologies including <span className="text-indigo-600 font-medium">React.js</span>,
          <span className="text-indigo-600 font-medium"> Node.js</span>, 
          <span className="text-indigo-600 font-medium"> Laravel</span>,
          <span className="text-indigo-600 font-medium"> ASP.Net </span>
           and 
          <span className="text-indigo-600 font-medium"> MySQL/MSSQL</span>.
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          I’m adept at building RESTful APIs and Web APIs implementing responsive UIs with Tailwind CSS and Material UI, 
          and deploying containerized applications using Docker. I also have hands-on experience with AWS 
          services like EC2, S3, RDS, and CloudWatch, as well as automating CI/CD pipelines using GitHub Actions.
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          With a strong understanding of MVC architecture, agile methodologies, and cross-functional 
          collaboration, I take pride in analyzing requirements, debugging complex issues, and delivering 
          high-quality solutions aligned with business goals.
        </p>

        {/* <a
          href="#contact"
          className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300"
        >
          Let's Connect
        </a> */}
      </div>
    </section>
  );
};

export default About;
