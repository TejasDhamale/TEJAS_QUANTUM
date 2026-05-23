import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";


function SocialLinks() {

    const socialLinks = [
        {
            icon: <FaLinkedin className="text-xl" />,
            link: 'https://www.linkedin.com/in/tejasdhamale/',
            label: 'LinkedIn'
        },
        {
            icon: <FaGithub className="text-xl" />,
            link: 'https://github.com/AryanDhamale',
            label: 'GitHub'
        },
        {
            icon: <SiLeetcode className="text-xl" />,
            link: 'https://leetcode.com/u/Aryan_4386/',
            label: 'LeetCode'
        },
        {
            icon: <FaXTwitter className="text-xl" />,
            link: 'https://x.com/aryandhamale07',
            label: 'X'
        },
    ];

    return (
        <div className="flex items-center gap-6 mt-8">
            {socialLinks.map((item, idx) => (
                <Link key={idx} href={item.link} target="_blank" className="relative group/icon">
                    <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover/icon:opacity-50 transition-opacity" />
                    <div className="relative size-12 md:size-14 bg-black/40 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                        {item.icon}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/0 group-hover/icon:text-white/60 text-[10px] tracking-widest uppercase transition-all duration-300 pointer-events-none">
                        {item.label}
                    </span>
                </Link>
            ))}
        </div>
    );
}


export default SocialLinks;