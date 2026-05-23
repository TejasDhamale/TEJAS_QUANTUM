"use client";
// local dependencies // 
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactButton from "./buttons/contact-button";
import MyIcon from "@/my-icon/my_icon";

// shadcn dependencies // 
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";



function Navbar() {
    const sections = ['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Services', 'Memories'];
    const [activetab, setActivetab] = useState('Home');
    const [hoveredTab, setHoveredTab] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
            <nav className={`bg-transparent backdrop-blur-[12px] transition-all duration-300 px-3 md:px-10 py-5 lg:py-3 flex items-center justify-between`}>

                {/* Logo Section */}
                <div className="flex items-center gap-x-4 pl-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <MyIcon />
                    <div>
                        <h1 className="text-md mb-[0.2px] font-semibold text-white font-sans">
                            <span className="tracking-wider">TEJAS</span>
                            <span className="pl-1.5 text-white/50">Quantum</span>
                        </h1>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-center flex-1 px-8">
                    <ul className="flex items-center gap-x-1 bg-white/5 rounded-full p-1 border border-white/5">
                        {sections.map((el) => (
                            <li
                                key={el}
                                className="relative px-5 py-2 cursor-pointer"
                                onMouseEnter={() => setHoveredTab(el)}
                                onMouseLeave={() => setHoveredTab(null)}
                            >
                                <ScrollLink
                                    to={el[0].toLowerCase() + el.slice(1)}
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    offset={-15}
                                    onSetActive={() => setActivetab(el)}
                                    className={`relative z-10 text-sm font-medium transition-colors duration-300 ${activetab === el ? "text-white" : "text-white/60 hover:text-white"}`}
                                >
                                    {el}
                                </ScrollLink>

                                {/* Hover Effect */}
                                {hoveredTab === el && (
                                    <motion.div
                                        layoutId="nav-hover"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                {/* Active Indicator */}
                                {activetab === el && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-x-0 -bottom-1 mx-auto w-6 h-0.5 bg-[#f2f2f2] rounded-full shadow-[0_2px_25px_2px_#fff]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA / Right Section */}
                <div className="hidden lg:block">
                    <ScrollLink to="contact" smooth={true} duration={600} offset={-100}>
                        <ContactButton text="Contact me" />
                    </ScrollLink>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="lg:hidden pr-2">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <div className='flex flex-col justify-center gap-y-2 w-[25px] h-[34px] mr-5'>
                                <div className='border-1 border-white rounded w-1/2 self-end' />
                                <div className='border-1 border-orange-300 rounded' />
                                <div className='border-1 border-white rounded w-1/2' />
                            </div>
                        </DrawerTrigger>

                        <DrawerContent className="bg-[#0a0a0a]/10 backdrop-blur-xl border-t border-white/10 h-[80vh]">
                            <DrawerHeader className="">
                                <DrawerTitle className=""></DrawerTitle>
                            </DrawerHeader>

                            <div className="flex flex-col items-center justify-center h-full gap-y-6">
                                {sections.map((ele, idx) => (
                                    <ScrollLink
                                        key={`${idx}-${ele}`}
                                        to={ele[0].toLowerCase() + ele.slice(1)}
                                        smooth={true}
                                        duration={600}
                                        offset={-100}
                                        className="w-full"
                                    >
                                        <div className={`w-full text-center py-3 text-xl font-light tracking-wide transition-all ${activetab === ele ? "text-white scale-110 font-medium" : "text-white/50"}`}>
                                            {ele}
                                        </div>
                                    </ScrollLink>
                                ))}
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;
