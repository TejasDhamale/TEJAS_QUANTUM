import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export const aboutData = {
    name: "Tejas Dhamale",
    titles: ["AI/ML Engineer", "DSA Problem Solver", "Full Stack Engineer"],
    description: "Yup! I'm passionate about turning ideas into intelligent systems. As an AI/ML Engineer, I build models that bring data to life. As a Full-Stack Developer, I craft scalable web apps with smooth UX. With a strong foundation in DSA, I blend creativity with solid technical expertise.",
    socials: [
        { icon: <FaGithub />, link: "https://github.com/AryanDhamale", color: "hover:text-gray-400" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tejasdhamale/", color: "hover:text-blue-500" },
        { icon: <SiLeetcode />, link: "https://leetcode.com/u/Aryan_4386/", color: "hover:text-yellow-500" },
        { icon: <FaTwitter />, link: "https://x.com/aryandhamale07", color: "hover:text-blue-400" },
    ],
    education: {
        degree: "BE in Computer Science & Engineering",
        university: "Sant Gadge Baba Amravati University Amravati, India",
        gpa: "7.5",
        year: "2021-2025",
    },
};