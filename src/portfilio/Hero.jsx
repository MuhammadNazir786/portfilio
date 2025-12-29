import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { FaFigma } from "react-icons/fa6";

const Hero = ({ data }) => {
  return (
    <section id="hero" className="bg-gray-100 pb-5 md:pt-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center px-5 pt-12 md:pt-10 md:px-0">
        {/* Left content */}
        <motion.div
          className="md:w-1/2 md:pt-14 pt-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="orbitron-uniquifier text-lg text-gray-700 font-bold mb-2">
            HI I AM
          </h1>
          <h2 className="orbitron-uniquifier text-2xl text-gray-700 font-bold mb-4">
            {data.name}
          </h2>
          <p className="orbitron-uniquifier text-4xl text-green-700 font-semibold mb-4">
            {data.title}
          </p>
          <p className="mb-6 text-gray-600">{data.description}</p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-4">
            <a
              href="#contact"
              className="no-underline bg-green-600 text-white px-8 py-2 rounded-lg shadow hover:bg-green-500 transition"
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1_X9rB8GctEzMg01LjHXgOWkBcBXtgx6F/view?usp=sharing"
              className="no-underline bg-white border text-green-600 px-6 py-2 rounded-lg shadow hover:bg-green-600 hover:text-green-500 transition"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className=" flex space-x-4">
            <a
              href="https://www.linkedin.com/in/mohammad-nazir-zarifi-126693294/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="h-8 w-8 rounded-3xl text-gray-700 hover:text-green-600 transition" />
            </a>
            <a href="https://github.com/MuhammadNazir786" target="_blank" rel="noopener noreferrer">
              <DiGithubBadge className="h-8 w-8 text-gray-700 hover:text-green-600 transition" />
            </a>
            <a
              href="https://www.figma.com/files/team/1351850953810847024/user/1351850949818041643?fuid=1351850949818041643"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFigma className="h-8 w-8 text-gray-700 hover:text-green-600 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="md:w-1/3 h-1/3 mt-10 md:mt-0 flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={data.imageUrl}
            alt={data.name}
            className="rounded-lg max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
