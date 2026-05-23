
"use client";
import Link from "next/link";
import { FiArrowUpRight, FiMusic } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
    const url = 'https://dreamscape.bio.to/links';

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20"
        >
            {/* Left: Copyright */}
            <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
                <h1 className="text-sm font-medium text-white/40">
                    © {new Date().getFullYear()} Tejas Dhamale.
                </h1>
                <p className="text-xs text-white/30">
                    Designing the future, one pixel at a time.
                </p>
            </div>

            {/* Center: Interactive Song Pill */}
            <div className="flex items-center gap-2 text-sm font-light text-white/50">
                <span className="opacity-50">Fueled by</span>
                <Link
                    href={url}
                    target="_blank"
                    className="group relative flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="relative flex items-center justify-center w-4 h-4">
                        <span className="absolute w-full h-full bg-green-500/20 rounded-full animate-ping opacity-75" />
                        <FiMusic className="text-[10px] text-green-400 relative z-10" />
                    </div>
                    <span className="text-xs font-medium bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent group-hover:to-white transition-all">
                        Song
                    </span>
                    <FiArrowUpRight className="text-[10px] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>

            {/* Right: System Status */}
            <div className="hidden min-[734px]:flex flex-col items-end gap-0.5">
                <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/5 border border-white/5">
                    <div className="flex gap-0.5">
                        <span className="w-0.5 h-1.5 bg-white/20 rounded-full" />
                        <span className="w-0.5 h-2.5 bg-white/20 rounded-full" />
                        <span className="w-0.5 h-1.5 bg-white/20 rounded-full" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-white/70 uppercase tracking-wider">
                        System v2.5
                    </span>
                </div>
                <span className="text-[10px] text-white/50 font-mono">
                    Last sync: Feb 14, 2026 at 17:30
                </span>
            </div>
        </motion.footer>
    );
}

export default Footer;