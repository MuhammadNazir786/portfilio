import html from "../icons/Html.png";
import css from "../icons/css.png";
import js from "../icons/JS-removebg-preview.png";
import bootstrap from "../icons/Bootstrap-removebg-preview.png";
import tailwind from "../icons/Tailwind_css.png";
import sass from "../icons/sass.png";
import figma from "../icons/figma-removebg-preview.png";
import git from "../icons/git.png";
import typeScript from "../icons/typescript.png";
import react from "../icons/react.png";
import next_js from "../icons/next_js.png";

const SkillsSection = () => {
  const skills = [
    { src: html, alt: 'HTML5' },
    { src: css, alt: 'CSS3' },
    { src: js, alt: 'JavaScript' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: tailwind, alt: 'Tailwind CSS' },
    { src: sass, alt: 'Sass' },
    { src: figma, alt: 'Figma' },
    { src: git, alt: 'Git' },
    { src: typeScript, alt: 'TypeScript' },
    { src: react, alt: 'React' },
    { src: next_js, alt: 'Next.js' },
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">SKILLS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-11 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img
              src={skill.src}
              alt={skill.alt}
              className=" transition-transform duration-200 transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;