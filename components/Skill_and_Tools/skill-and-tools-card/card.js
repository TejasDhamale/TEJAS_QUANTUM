"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function SkillCard({ skill, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-full overflow-hidden rounded-[40px] p-8 md:p-12"
        >

            {/* Right Side Glossy Image Object */}
            {/* mix-blend-screen blur-[80px] filter */}
            <div className="absolute z-10 top-10 right-10 h-60 w-60 pointer-events-none">
                <div>
                    <Image
                        src={skill.icon_}
                        alt="Background Effect"
                        fill
                        className="object-contain object-center bg-transparent"
                    />
                </div>
            </div>


            <div className="relative z-10 flex flex-col gap-12">

                {/* Header Section (Matching the Reference) */}
                <div className="max-w-3xl relative">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-[500] bg-clip-text text-transparent bg-gradient-to-r from-[#EBE7F7] to-gray-400 mb-6 tracking-tight"
                    >
                        {skill.heading}
                        <span className="block text-lg font-light text-zinc-500 mt-2 tracking-normal">{skill.subtext}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="text-lg text-zinc-400 leading-relaxed font-[400] max-w-xl"
                    >
                        {skill.description}
                    </motion.p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {skill.stats.map((stat, i) => (
                            <span key={i} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-sm font-medium text-zinc-300 backdrop-blur-md">
                                {stat}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Detailed Skills Grid (Glassmorphism Panels) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {skill.sections.map((section, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                            viewport={{ once: true }}
                            key={idx}
                            className="flex flex-col gap-5 rounded-3xl bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-xl group/panel"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-black/40 border border-white/5 shadow-inner text-white group-hover/panel:text-white transition-colors">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-medium text-zinc-200">{section.title}</h3>
                            </div>

                            <ul className="space-y-3">
                                {section.list.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-center gap-3 text-sm text-zinc-400 group-hover/panel:text-zinc-300 transition-colors">
                                        <div className="h-1.5 w-1.5 rounded-full bg-zinc-600 group-hover/panel:bg-zinc-400 transition-colors" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.div>
    );
}

export default SkillCard;