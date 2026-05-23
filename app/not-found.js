"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden selection:bg-primary/20">

            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-[var(--brand-color)]/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Glitchy 404 Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative"
                >
                    <h1 className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/20 select-none">
                        404
                    </h1>
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-[var(--brand-color)] opacity-50 mix-blend-overlay select-none"
                        animate={{
                            x: [-2, 2, -2],
                            y: [2, -2, 2],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    >
                        404
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-6 max-w-lg mx-auto"
                >
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Lost in the digital void?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        The page you&apos;re looking for seems to have vanished into thin air. Let&apos;s get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link href="/" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[var(--brand-color)] text-white rounded-full font-semibold shadow-lg shadow-[var(--brand-color)]/25 hover:shadow-xl hover:shadow-[var(--brand-color)]/40 transition-all"
                            >
                                <Home size={20} />
                                Return Home
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-all cursor-pointer"
                        >
                            <ArrowLeft size={20} />
                            Go Back
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}