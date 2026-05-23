"use client";
import { motion } from "framer-motion";


function ConHeading({ text, desc = '' }) {
    return (
        <div className="pb-20 flex flex-col items-center justify-center text-center overflow-hidden w-full">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center"
            >
                {/* Main Heading with Masked Gradient */}
                <div className="relative">
                    <h2 className="text-4xl md:text-5xl font-[400] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#EBE7F7] to-white/40 drop-shadow-2xl pb-4">
                        {text}
                    </h2>
                </div>

                {/* Description */}
                {desc && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-2xl px-6"
                    >
                        <p className="text-md md:text-lg text-gray-400 font-light leading-relaxed tracking-wide">
                            {desc}
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default ConHeading;