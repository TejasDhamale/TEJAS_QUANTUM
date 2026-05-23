"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function ProjectConHeading({ text, desc = '' }) {
    return (
        <div className="text-center mb-16 space-y-4">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative inline-block"
            >
                <h2 className="text-4xl md:text-5xl font-[400] pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#EBE7F7] to-gray-400 tracking-tight z-10 relative">
                    {text}
                </h2>

                {/* Decorative Elements */}
                <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-[#504C6D] animate-pulse opacity-60" />
                <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-transparent via-[#504C6D] to-transparent rounded-full mt-4 opacity-50" />
            </motion.div>

            {desc && <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="px-4 text-center text-[#EBE7F7]/70 text-lg max-w-2xl mx-auto font-light leading-relaxed"
            >
                {desc}
            </motion.p>}
        </div>
    );
}

export default ProjectConHeading;