import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className=" bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="orbitron-uniquifier text-3xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            I am a passionate Full-Stack Developer specializing in MERN Stack
            and modern web technologies. I build scalable, responsive, and
            user-friendly applications using React.js, Next.js, Node.js,
            Express.js, and MongoDB, with additional expertise in TypeScript and
            SQL databases. I combine strong frontend skills and UI/UX design
            experience (Tailwind CSS, Sass, Figma) to create engaging and
            intuitive interfaces. With solid foundations in OOP, Data
            Structures, and Design Patterns, I write clean, maintainable, and
            efficient code. Driven by curiosity and continuous learning, I aim
            to contribute to innovative projects and collaborate with talented
            teams to deliver impactful digital solutions.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://drive.google.com/file/d/1_X9rB8GctEzMg01LjHXgOWkBcBXtgx6F/view?usp=sharing"
              className="no-underline bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition"
            >
              Download CV
            </a>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-500"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-500"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="man.png" alt="About Me" className=" max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
