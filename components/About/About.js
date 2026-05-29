"use client";
import ConHeading from "../common-con/con-heading";
import { aboutData } from "@/data/about-data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

function About() {
    return (
        <section id="about" className="py-20 w-full relative overflow-hidden">
            {/* main parent div */}
            <div className="max-w-[85rem] mx-auto px-4 md:px-8">
                <ConHeading text={"About Me"} desc={"Here's a glimpse into my professional journey"} />
            </div>

            {/* sub div */}
            <div className="max-w-[85rem] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image & Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-5 flex flex-col items-center"
                    >
                        <div className="relative group w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                            {/* Ambient glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#6d4aff]/20 via-[#6d4aff]/5 to-transparent rounded-[2.5rem] blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Image wrapper with soft shadow and rounded borders */}
                            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                                <Image
                                    src={aboutData.img}
                                    alt={aboutData.name}
                                    fill
                                    className="object-cover transition-all duration-700 ease-out"
                                    sizes="(max-w-768px) 100vw, 380px"
                                    priority
                                />
                                {/* Soft overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 mt-8">
                            {aboutData.socials.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xl p-2 text-gray-400 transition-colors duration-300 ${social.color}`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        {/* Title Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {aboutData.titles.map((title, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-semibold uppercase tracking-wider text-[#6d4aff]/90 bg-[#6d4aff]/5 border border-[#6d4aff]/15 px-3 py-1.5 rounded-full"
                                >
                                    {title}
                                </span>
                            ))}
                        </div>

                        {/* Name / Greeting */}
                        <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 leading-tight">
                            I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EBE7F7] to-white/60">{aboutData.name}</span>
                        </h3>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-300/90 font-light leading-relaxed tracking-wide mb-10 max-w-2xl">
                            {aboutData.description}
                        </p>

                        {/* Experience & Education - minimalist side-by-side layout (NO BOXES) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">

                            {/* Experience Section */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2.5 mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                    <FaBriefcase className="text-[#6d4aff] text-sm" />
                                    <span>Experience</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    {aboutData.experience.logo && (
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                                            <Image
                                                src={aboutData.experience.logo}
                                                alt={aboutData.experience.company}
                                                width={100}
                                                height={100}
                                                className="object-contain bg-white filter"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col">
                                        <h4 className="text-base font-semibold text-white leading-snug">
                                            {aboutData.experience.role}
                                        </h4>
                                        <p className="text-sm text-gray-400 font-light mt-0.5">
                                            {aboutData.experience.company}
                                        </p>
                                        <span className="text-xs text-gray-500 font-medium tracking-wide mt-1.5 uppercase">
                                            {aboutData.experience.start} — {aboutData.experience.end}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Education Section */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2.5 mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                    <FaGraduationCap className="text-[#6d4aff] text-base" />
                                    <span>Education</span>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-base font-semibold text-white leading-snug">
                                        {aboutData.education.degree}
                                    </h4>
                                    <p className="text-sm text-gray-400 font-light mt-0.5">
                                        {aboutData.education.university}
                                    </p>
                                    <div className="flex items-center gap-3 mt-1.5">
                                        <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                                            {aboutData.education.year}
                                        </span>
                                        <span className="h-1 w-1 rounded-full bg-white/15" />
                                        <span className="text-xs text-[#6d4aff] font-semibold bg-[#6d4aff]/5 px-2 py-0.5 rounded border border-[#6d4aff]/10">
                                            CGPA: {aboutData.education.gpa}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default About;