import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className=" bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="orbitron-uniquifier text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            Designing intuitive and visually stunning user interfaces, I specialize in crafting seamless web experiences. Combining creativity with code, I bring ideas to life with responsive and user-centered designs! Let's build digital solutions that captivate and inspire!
          </p>
          <div className="flex space-x-4">
            <a href="/path-to-your-cv.pdf" className="no-underline bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition">
              Download CV
            </a>
            <div className="flex space-x-2">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-500">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-500">
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