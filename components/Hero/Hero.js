"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import RolesButton from "./roles/roles-button";
import { Link as ScrollLink } from "react-scroll";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
};

function Hero() {

    const roles = ["AI/ML Engineer", "DSA Problem Solver", "Full Stack Engineer"];

    return (
        <section id="home" className="w-full">
            <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Background Hexagon Pattern */}
                <div className="absolute left-1/2 top-0 w-[2842px] max-w-none -translate-x-1/2 inset-0 pointer-events-none select-none overflow-hidden">
                    <Image
                        width={2842}
                        height={1132}
                        src="/hero_background/hexa_gon.svg"
                        alt="Background Pattern"
                        className="object-cover"
                    />
                </div>

                {/* backgeound gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-0" />

                {/* Main Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center max-[384px]:mt-10 px-4 max-w-5xl mx-auto flex flex-col items-center gap-8"
                >
                    {/* Intro Line */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                        <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-orange-400"></span>
                        <span className="text-sm md:text-lg font-medium tracking-[0.2em] uppercase text-gray-400">
                            HELLO, I AM <span className="text-white font-bold ml-1">Tejas.</span>
                        </span>
                        <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-orange-400"></span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="fs-64 leading-[1.5] text-4xl md:text-6xl bg-[radial-gradient(89.47%_51.04%_at_44.27%_50%,_#E2E3E9_0%,_#D4D6DE_52.73%,_#3D3F4C_100%)] bg-clip-text font-title font-medium text-transparent"
                    >
                        Building Intelligent Systems
                        <br />
                        <span className="md:text-5xl">with AI, Algorithms & Code.</span>
                    </motion.h1>

                    {/* Role Badges */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-2">
                        {
                            roles.map((role, index) => (
                                <RolesButton key={index} role={role} />
                            ))
                        }
                    </motion.div>

                    {/* Call to Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 mt-6">
                        <ScrollLink to={'about'} smooth={true} duration={600}>
                            <Button className="px-6 py-5 rounded-xl cursor-pointer">Let's Connect</Button>
                        </ScrollLink>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;