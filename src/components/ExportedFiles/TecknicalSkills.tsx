import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiStyledcomponents,
  SiRedux,
  SiPostman,
  SiGit,
  SiGithub,
 
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import {FaDatabase,FaDocker } from "react-icons/fa"; // Java, AWS fallback
import { MdDesignServices } from "react-icons/md"; // Material Design icons
import { TbBrandCSharp } from "react-icons/tb";




export const TECHNICAL_SKILLS = [
  // Frontend
  { icon: <SiHtml5 className="text-orange-600" />, label: "HTML" },
  { icon: <SiCss3 className="text-blue-600" />, label: "CSS" },
  { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind CSS" },
  { icon: <MdDesignServices className="text-blue-400" />, label: "Material UI" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
  { icon: <SiReact className="text-cyan-400" />, label: "React.js" },
  { icon: <SiRedux className="text-purple-600" />, label: "Redux" },
  { icon: <SiStyledcomponents className="text-pink-500" />, label: "Styled Components" },

  // Backend
  { icon: <SiNodedotjs className="text-green-600" />, label: "Node.js" },
  { icon: <SiExpress className="text-black" />, label: "Express.js" },
  { icon: <TbBrandCSharp className="text-purple-700" />, label: "C#.NET" },
  { icon: <SiDotnet className="text-purple-500" />, label: "ASP.NET" },

  // Databases
  { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
  { icon: <FaDatabase className="text-red-700" />, label: "MS SQL" },
  { icon: <SiMongodb className="text-green-700" />, label: "MongoDB" },

  // Tools & Platforms
  { icon: <SiGit className="text-orange-600" />, label: "Git" },
  { icon: <SiGithub className="text-black" />, label: "GitHub" },
  { icon: <SiPostman className="text-orange-500" />, label: "Postman" },
  { icon: <FaDocker className="text-blue-900" />, label: "Docker" },
  { icon: <VscAzure className="text-blue-800" />, label: "Azure" },
];
