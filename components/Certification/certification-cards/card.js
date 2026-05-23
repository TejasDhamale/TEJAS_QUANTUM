"use client";
import { motion } from "framer-motion";
import Link from "next/link";

function CertificationCard({ idx:index, cart }) {
    return (
        <Link href={cart.link}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden hover:cursor-pointer backdrop-blur-[10px] bg-[#1b1b1b] rounded-[32px] px-8 py-15 flex flex-col gap-y-5 items-center text-center h-full">
                {/* Icon Container */}
                <div className="mb-6 relative">
                    <div className="w-17 h-17 rounded-full bg-[#363636] flex items-center justify-center">
                        <div className="text-white">
                            {cart.logo}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    <h3 className="text-xl font-[400] tracking-wider text-white leading-tight">
                        {cart.name}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed font-light tracking-wider">
                        {cart.info}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};

export default CertificationCard;