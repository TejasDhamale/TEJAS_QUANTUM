"use client";
import { FaGithub, FaRocket } from "react-icons/fa";
import ImageLoader from "@/components/common-con/image-loader";
import { motion } from "framer-motion";
import Link from "next/link";

// lucide icons // 
import { Code } from 'lucide-react';

function ProjectCard({ project, idx }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            viewport={{ once: true, margin: "-50px" }}
            className="group w-[94%] mx-auto md:w-full flex flex-col gap-6"
        >
            {/* 1. Image Section */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-900 border border-white/5">
                <ImageLoader
                    url={project.image}
                    loadingStyle="w-full h-full"
                    style="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    dimension={{ width: 800, height: 600 }}
                />
                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    {project.link !== '#' && (
                        <Link href={project.link} target="_blank">
                            <div className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg" title="Live Demo">
                                <FaRocket size={20} />
                            </div>
                        </Link>
                    )}
                    {project.code !== '#' && (
                        <Link href={project.code} target="_blank">
                            <div className="p-3 bg-black/80 text-white border border-white/20 rounded-full hover:scale-110 transition-transform shadow-lg" title="View Code">
                                <FaGithub size={20} />
                            </div>
                        </Link>
                    )}
                </div>
            </div>

            {/* 2. Content Section */}
            <div className="flex flex-col gap-3 px-1">
                {/* Category */}
                <div className="flex items-center justify-between">
                    <span className="text-[#00df6d] font-[400] text-xs tracking-wide uppercase">
                        {project.category || 'Development'}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-[500] text-white leading-[1.2] group-hover:text-gray-200 transition-colors">
                    <Link href={project.link} target={project.link === '#' ? '_self' : '_blank'}>
                        {project.name}
                    </Link>
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm tracking-wider font-[400] leading-relaxed line-clamp-2">
                    {project.info.heading}
                </p>

                {/* Author / Meta Data */}
                <div className="flex items-center gap-3 mt-3 pt-2">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                        <span className="text-white/80 font-bold text-xs">
                            <Code />
                        </span>
                    </div>

                    <div className="flex flex-col justify-center gap-0.5">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            {
                                project.info.techStack.slice(0, 4).map((tech, idx) => (
                                    <span key={idx} className="text-gray-500 text-xs font-medium">
                                        {tech}
                                    </span>
                                ))
                            }

                            {project.info.techStack.length > 4 && (
                                <span className="text-gray-500 text-xs font-medium">
                                    ...
                                </span>
                            )}

                        </div>
                        <span className="text-gray-500 text-xs font-medium">
                            {project.lastUpdated}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;