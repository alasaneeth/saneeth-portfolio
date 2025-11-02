
const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-20 bg-white">
      {/* Text Content */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            A highly motivated Data Scientist with a strong foundation in software engineering, 
            specializing in transforming complex data into actionable insights and robust machine 
            learning solutions. Proficient in the end-to-end data science lifecycle, from data 
            wrangling and statistical analysis to model deployment and MLOps.
        </p>
      </div>
    </section>
  );
};

export default About;
