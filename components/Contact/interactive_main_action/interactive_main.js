import { MdOutlineContentCopy, MdCheck, MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function InteractiveMain() {
    const [copied, setCopied] = useState(false);
    const email = "aryandhamale07@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
            className="w-full flex justify-center perspective-1000"
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <button
                    onClick={handleCopy}
                    className="relative flex items-center gap-4 pl-4 pr-3 py-3 md:pl-6 md:pr-4 md:py-4 backdrop-blur-3xl bg-white/10 rounded-3xl shadow-black/20 shadow-xl group-hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full md:w-auto"
                >
                    {/* Icon Container - Material You Style */}
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/10 flex items-center justify-center text-[#C1C9BE]">
                        <MdOutlineEmail className="text-2xl" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-start px-2 md:px-4">
                        <span className="text-[#C1C9BE]/70 text-xs font-[400] tracking-wide uppercase">
                            Get in touch
                        </span>
                        <span className="text-white/90 text-sm md:text-lg font-[400] tracking-wide font-sans">
                            {email}
                        </span>
                    </div>

                    {/* Action/Copy Button */}
                    <div className={`h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-all duration-300 ${copied ? 'bg-[#B1CCB3] text-[#1E281E]' : 'bg-white/10 text-[#C1C9BE] group-hover:bg-[#B5CCB1] group-hover:text-[#1E281E]'}`}>
                        <AnimatePresence mode='wait'>
                            {copied ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 45 }}
                                >
                                    <MdCheck className="text-2xl" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0, rotate: 45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: -45 }}
                                >
                                    <MdOutlineContentCopy className="text-xl md:text-2xl" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </button>

                {/* Copied Feedback Toast */}
                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-[#303030] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap border border-white/5"
                        >
                            Copied to clipboard
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default InteractiveMain;