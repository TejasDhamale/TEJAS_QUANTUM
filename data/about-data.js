import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export const aboutData = {
    name: "Tejas Dhamale",
    img: "https://images.squarespace-cdn.com/content/v1/5a48aed6f43b5576b2917010/be2e5e05-42dc-4e49-bdbe-b2edbd712157/IMG_7759.JPG?format=1000w",
    titles: ["AI/ML Engineer", "DSA Problem Solver", "Full Stack Engineer"],
    description: "Yup! I'm passionate about turning ideas into intelligent systems. As an AI/ML Engineer, I build models that bring data to life. As a Full-Stack Developer, I craft scalable web apps with smooth UX. With a strong foundation in DSA, I blend creativity with solid technical expertise.",
    socials: [
        { icon: <FaGithub />, link: "https://github.com/TejasDhamale", color: "hover:text-gray-400" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tejasdhamale/", color: "hover:text-blue-500" },
        { icon: <SiLeetcode />, link: "https://leetcode.com/u/Aryan_4386/", color: "hover:text-yellow-500" },
        { icon: <FaTwitter />, link: "https://x.com/aryandhamale07", color: "hover:text-blue-400" },
    ],
    education: {
        degree: "BE in Computer Science & Engineering",
        university: "Sant Gadge Baba Amravati University Amravati, India",
        gpa: "6.69",
        year: "2021-2025",
    },
    experience: {
        company: "TCS",
        role: "Assistant System Engineer",
        start: "JULY 2025",
        end: "currently present",
        logo: "/companies/tcs.png"
    }
};