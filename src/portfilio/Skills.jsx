const Skills = ({ skills }) => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="orbitron-uniquifier text-3xl font-bold text-gray-700 text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center">
                  {/* Icon container */}
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  {/* Skill name */}
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {skill.name}
                  </h3>
                  {/* Progress bar */}
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  