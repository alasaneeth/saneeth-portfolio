const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-20 bg-white">
      {/* Text Content */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-indigo-600">Me</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          I’m <strong>Saneeth</strong>, a Full Stack Developer with 3+ years of hands-on experience
          building scalable, high-performance web applications and enterprise systems. I focus on
          crafting smooth and modern user experiences using{" "}
          <span className="text-indigo-600 font-medium">React.js</span>, while developing reliable
          and secure backend services using{" "}
          <span className="text-indigo-600 font-medium">Node.js (Express.js)</span>
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-4">
          I specialize in building end-to-end solutions with strong attention to performance,
          maintainability, and clean architecture. My experience spans across RESTful API
          development, microservices, database modeling, UI/UX-focused application design, and
          modern DevOps workflows using Docker, GitHub Actions CI/CD, and Microsoft Azure services.
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-4">
          Throughout my journey at Titum Pvt (Ltd), I’ve contributed to multiple product cycles,
          optimized databases (PostgreSQL/MySQL), implemented state management patterns such as
          Redux and Context API, improved code quality through unit testing, and collaborated closely
          with cross-functional teams to turn business requirements into intuitive and functional
          user interfaces.
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          I enjoy solving problems, improving workflows, and taking ownership of the solutions I
          build. My goal is to continue delivering impactful products while deepening my expertise in
          advanced cloud technologies, system design, and scalable architectures.
        </p>


      </div>
    </section>
  );
};

export default About;
