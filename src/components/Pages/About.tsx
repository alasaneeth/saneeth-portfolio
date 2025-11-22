const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-20 bg-white">
      {/* Text Content */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-indigo-600">Me</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          I’m <strong>Saneeth</strong>, a passionate <strong>Full Stack Developer</strong> with hands-on
          experience building dynamic, responsive, and user-friendly web applications. I specialize
          in crafting modern frontends using{" "}
          <span className="text-indigo-600 font-medium">React.js</span> and developing structured,
          scalable backend APIs with{" "}
          <span className="text-indigo-600 font-medium">Node.js (Express.js)</span>.
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-4">
          As a fresher, I focus on writing clean and maintainable code while following best
          practices in MVC architecture, RESTful API development, database design, and reusable UI
          components. I have strong knowledge of SQL (PostgreSQL/MySQL), state management (Redux,
          Context API), and modern tooling like Git, Docker, and Postman.
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-4">
          I have built several academic and personal projects, including full stack web apps,
          authentication systems, dashboards, and CRUD-based applications. These projects helped me
          develop a solid understanding of React hooks, API integration, backend routing, and secure
          authentication using JWT.
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          I enjoy problem-solving, learning new technologies, and transforming ideas into functional
          and intuitive user experiences. I’m currently expanding my skills in cloud services,
          system design, and scalable application architecture with the goal of becoming a
          well-rounded full stack engineer.
        </p>
      </div>
    </section>
  );
};

export default About;
