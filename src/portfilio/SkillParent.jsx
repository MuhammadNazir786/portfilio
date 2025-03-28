import Skills from "./Skills";
// Import icons from react-icons
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { FaSass } from "react-icons/fa";

const skillsData = [
    {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="w-12 h-12 text-blue-700"/>,
      },
      {
        name: "Sass",
        icon: <FaSass  className="w-12 h-12 text-white bg-pink-500"/>
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="w-12 h-12 text-blue-500"/>
      },
  {
    name: "React",
    icon: <FaReact className="w-12 h-12 text-blue-500" />,
  },
  
  {
    name: "Next JS",
    icon:<SiNextdotjs className="w-12 h-12"/>
  },
  
  
];

function SkillParent() {
  return (
    <div id="skills" className="w-full">
      <Skills skills={skillsData} />
    </div>
  );
}

export default SkillParent;
