import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobile, FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";

const services = [
  {
    title: "Front-end Development",
    description: "fast, and responsive web applications using React, Next.js, and modern frameworks.",
    icon: <FaCode className="w-10 h-10 text-blue-600" />, 
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with Figma, Adobe XD, and best UI/UX practices.",
    icon: <FaPaintBrush className="w-10 h-10 text-purple-600" />, 
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
  },
  {
    title: "Responsive Design",
    description: "Ensuring seamless user experiences across all screen sizes with modern CSS techniques.",
    icon: <FaMobile className="w-10 h-10 text-green-600" />, 
    skills: ["CSS Flexbox", "CSS Grid", "Media Queries", "Mobile-First"],
  },
  {
    title: "Full-Stack Development",
    description: "Creating scalable web apps with MERN stack (MongoDB, Express.js, React, Node.js).",
    icon: <FaLaptopCode className="w-10 h-10 text-red-600" />, 
    skills: ["MERN Stack", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Backend Development",
    description: "Building robust APIs and backend systems with Express, Node.js, and authentication.",
    icon: <FaServer className="w-10 h-10 text-yellow-600" />, 
    skills: ["Node.js", "Express", "Datasractchar", "REST APIs"],
  },
  {
    title: "Database Management",
    description: "Optimizing databases with SQL & NoSQL solutions for scalable web applications.",
    icon: <FaDatabase className="w-10 h-10 text-teal-600" />, 
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-700 orbitron-uniquifier text-4xl font-bold mb-4">My Services</h2>
          <p className="font-medium text-gray-600 max-w-xl mx-auto">
            I specialize in full-stack development and UI/UX design, crafting stunning, high-performance experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="inline-block p-4 rounded-lg bg-gray-200 text-white mb-6">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-gray-700 orbitron-uniquifier text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;