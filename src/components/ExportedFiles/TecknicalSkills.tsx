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
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiStyledcomponents,
  SiRedux,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase,FaDocker, FaAngular } from "react-icons/fa"; // Java, AWS fallback
import { MdDesignServices } from "react-icons/md"; // Material Design icons
import { TbBrandCSharp } from "react-icons/tb";




export const TECHNICAL_SKILLS = [
  { icon: <SiHtml5 className="text-orange-600" />, label: "HTML" },
  { icon: <SiCss3 className="text-blue-600" />, label: "CSS" },
  { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind CSS" },
  { icon: <MdDesignServices className="text-blue-400" />, label: "Material UI" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
  { icon: <FaJava className="text-red-600" />, label: "Java" },
  { icon: <TbBrandCSharp className="text-purple-700" />, label: "C#.NET" },
  { icon: <SiDotnet className="text-purple-500" />, label: "ASP.NET" },
  { icon: <SiReact className="text-cyan-400" />, label: "React.js" },
   //{ icon: <FaVuejs className="text-green-800" />, label: "Vue.js" },
  { icon: <FaAngular className="text-red-800" />, label: "Angular" },
  { icon: <SiNodedotjs className="text-green-600" />, label: "Node.js" },
  { icon: <SiExpress className="text-black" />, label: "Express.js" },
  { icon: <SiPhp className="text-indigo-500" />, label: "PHP" },
  { icon: <SiLaravel className="text-red-600" />, label: "Laravel" },
  { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
  { icon: <FaDatabase className="text-red-700" />, label: "MS SQL" },
  { icon: <SiMongodb className="text-green-700" />, label: "MongoDB" },
  { icon: <SiStyledcomponents className="text-pink-500" />, label: "Styled Components" },
  { icon: <SiRedux className="text-purple-600" />, label: "Redux" },
  { icon: <SiPostman className="text-orange-500" />, label: "Postman" },
  { icon: <SiGit className="text-orange-600" />, label: "Git" },
  { icon: <SiGithub className="text-black" />, label: "GitHub" },
  { icon: <FaDocker className="text-blue-900" />, label: "Docker" },
  { icon: <FaAws className="text-yellow-600" />, label: "AWS" },
];
