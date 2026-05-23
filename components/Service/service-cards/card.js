"use client";
import { motion } from "framer-motion";

function ServiceCard({ card, index }) {
    const { title, icon, info } = card;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group h-full"
        >
            <div className="relative h-full flex flex-col justify-between p-8 backdrop-blur-[10px] overflow-hidden">
                {/* Soft Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-[#EBE7F7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6">

                    {/* Header: Icon & Arrow */}
                    <div className="flex justify-center items-center">
                        <div className="w-15 h-15 rounded-2xl bg-gray-500/50 flex items-center justify-center text-[#EBE7F7]">
                            {/* Render Icon with styling wrapper to enforce transition */}
                            <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full transition-colors duration-500">
                                {icon}
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[1.75rem] leading-tight font-light text-white text-center group-hover:text-[#EBE7F7] transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-[0.95rem] text-slate-400 font-light leading-relaxed tracking-wide text-center group-hover:text-slate-300 transition-colors duration-300">
                        {info}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default ServiceCard;