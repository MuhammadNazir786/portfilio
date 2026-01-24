import Skills from "./Skills";
// Import icons from react-icons
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const skillsData = [
  {
    name: "Typescript",
    icon: <SiTypescript className="w-12 h-12 text-blue-500" />,
  },
  {
    name: "React",
    icon: <FaReact className="w-12 h-12 text-blue-500" />,
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs className="w-12 h-12" />,
  },

  {
    name: "git",
    icon: <FaGitAlt className="w-12 h-12 text-orange-700" />,
  },

  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="w-12 h-12 text-blue-700" />,
  },
  {
    name: "Sass",
    icon: <FaSass className="w-12 h-12 text-white bg-pink-500 rounded-md" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="w-12 h-12 text-gray-800" />,
  },
  {
    name: "Node js",
    icon: <DiNodejsSmall className="w-12 h-12 text-green-700" />,
  },
  {
    name: "Mongo DB",
    icon: <DiMongodb className="w-12 h-12 text-green-700" />,
  },
  {
    name: "My sql",
    icon: <GrMysql className="w-12 h-12 text-gray-50 bg-blue-700 rounded-md" />,
  },
];

//ابسلیابل
function SkillParent() {
  return (
    <div id="skills" className="w-full">
      <Skills skills={skillsData} />
    </div>
  );
}

export default SkillParent;
