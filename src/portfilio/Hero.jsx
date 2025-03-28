import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { FaFigma } from "react-icons/fa6";
const Hero = ({ data }) => {
  return (
    <section id="hero" className="bg-gray-100  pb-5 md:pt-16">
      <div className="container flex-col-reverse mx-auto flex md:flex-row md:justify-between items-center px-5 md:px-0">
        <div className="md:w-1/2 md:pt-14 pt-12">
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
          <div className="flex space-x-4 mb-4">
            <a
              href="#contact"
              className="no-underline bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-500 transition"
            >
              Contact Us
            </a>
            <a
              href="#learn-more"
              className="no-underline bg-white border text-green-600 px-6 py-2 rounded-lg shadow hover:bg-green-600 hover:text-green-500 transition"
            >
              Learn More
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="h-8 w-8 rounded-3xl text-gray-700 hover:text-green-600 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" >
            <DiGithubBadge className="h-8 w-8 text-gray-700 hover:text-green-600 transition" />
            </a>
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
            <FaFigma className="h-8 w-8 text-gray-700 hover:text-green-600 transition"/>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 h-1/3 mt-10 md:mt-0 flex justify-end ">
          <img
            src={data.imageUrl}
            alt={data.name}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;