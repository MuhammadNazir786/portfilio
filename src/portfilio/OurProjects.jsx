import { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Ealearna",
    category: "Development",
    imageUrl: "image1/images.jfif",
    description: "A brief description of project 1",
    technologies: ["React", "Node.js", "MongoDB"],
    url: "http://play-tailwind.tailgrids.com/", // Add the URL here
  },
  {
    title: "Pricing Plan",
    category: "UI / UX",
    imageUrl: "image1/uiux.webp",
    description: "A brief description of project 2",
    technologies: ["Figma", "Adobe XD"],
    url: "https://pricingplan.com", // Add the URL here
  },
  {
    title: "Play",
    category: "Development",
    imageUrl: "image1/play.jfif",
    description: "A brief description of project 3",
    technologies: ["React", "Firebase"],
    url: "https://play.com", // Add the URL here
  },
  {
    title: "Upskill",
    category: "UI / UX",
    imageUrl: "image1/upskill.png",
    description: "A brief description of project 4",
    technologies: ["React", "Firebase"],
    url: "https://upskill.com", // Add the URL here
  },
  {
    title: "StartUp",
    category: "Development",
    imageUrl: "image1/download.jfif",
    description: "A brief description of project 5",
    technologies: ["React", "Firebase"],
    url: "https://startup.com", // Add the URL here
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
    setVisibleProjects(3);
  }, [selectedCategory]);

  return (
    <div id="projects" className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <h2 className="text-gray-700 orbitron-uniquifier text-4xl font-bold text-center mb-4">Our Projects</h2>
        <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of innovative solutions and creative works
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          <AnimatePresence>
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                exit="exit"
                whileHover="hover"
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-500"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <div className="relative group">
                    <img className="w-full h-64 object-cover" src={project.imageUrl} alt={project.title} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                        View Project
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-gray-700 font-semibold mb-2 no-underline">{project.title}</h3>
                    <p className="text-gray-600 mb-4 no-underline">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleProjects(visibleProjects + 3)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default OurProjects;
