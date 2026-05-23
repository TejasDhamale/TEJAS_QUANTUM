"use client";
import Footer from "@/components/Head-and-Foot/Footer";
import SocialLinks from "./social_links_row/social_links";
import TopHeading from "./heading/top_heading";
import InteractiveMain from "./interactive_main_action/interactive_main";
import Image from "next/image";
import { motion } from "framer-motion";

// lucide icons // 
import { Infinity } from 'lucide-react';

function ContactUs() {
    return (
        <section id="contact" className="w-full py-8 px-4 md:px-8 relative overflow-hidden">

            {/* Background Image Layer - Positioned to create the blur effect behind content */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Image
                    src="/contact_bg/cryptomatic/footer-bg-shape-cryptomatic-webflow-ecommerce-template.png"
                    alt="Background Shape"
                    className="object-cover"
                    width={1686}
                    height={1080}
                    priority
                />
            </div>

            {/* Main Glass Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full max-w-[1200px] mx-auto min-h-[80vh] rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 backdrop-blur-[10px] bg-[#0505050d]"
            >

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[85vh] p-6 md:p-12 lg:p-16">

                    {/* Header Section */}
                    <div className="w-full">
                        <TopHeading />
                    </div>

                    {/* Central Hero Section */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center my-12 md:my-0 space-y-10">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="py-3 px-2.5 rounded-xl border-[1.5px] border-[#464646] bg-gradient-to-b from-[#1f1f23] to-[#2e2d35]">
                                <div className="flex items-center gap-2">
                                    <Infinity size={16} className="text-white" />
                                    <span className="text-xs font-mono text-white/80 tracking-[0.2em] uppercase">Deployment Ready</span>
                                </div>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white leading-[0.9]">
                                FORGE THE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white/50 animate-gradient-x">
                                    FUTURE.
                                </span>
                            </h2>

                            <p className="max-w-xl text-brand-gray/80 text-base md:text-lg leading-relaxed font-light text-white/50">
                                Heavy armor for your digital infrastructure. Let's create something unshakeable together.
                            </p>
                        </motion.div>

                        <div className="w-full max-w-xl mx-auto">
                            <InteractiveMain />
                        </div>

                        <div className="pt-4">
                            <SocialLinks />
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="w-full mt-10 border-t border-white/10">

                        {/* background image */}
                        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
                            <Image src="/contact_bg/cryptomatic/footer-bottom-gradient-cryptomatic-webflow-ecommerce-template.png" alt="Background blur image" className="object-cover" width={1686} height={1080} priority />
                        </div>

                        <div className="pt-8 mt-8">
                            <Footer />
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

export default ContactUs;