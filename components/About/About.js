"use client";
import ContributionGraph from "../GithubContribution/contribution-graph";
import { motion } from "framer-motion";
import ConHeading from "@/components/common-con/con-heading";
import { aboutData } from "@/data/about-data";
import MusicCon from "./music-con/music-con";
import { BsBalloonHeartFill } from "react-icons/bs";

function About() {

    return (
        <section id="about" className="py-20 w-full ">

            <div className="px-4 md:px-8 max-w-[85rem] mx-auto relative">

            <ConHeading text="About Me" desc="Behind the Code" />

            {/* Bio Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div>
                        <h1 className="text-2xl md:text-3xl font-[500] text-white mb-2">
                            <span className="text-lg">Hey <BsBalloonHeartFill className="inline text-[var(--brand-color)]" /> , I'm</span> {aboutData.name}
                        </h1>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {aboutData.titles.map((title, i) => (
                                <span key={i} className="px-3 py-1 bg-white/10 text-xs font-[400] rounded-full tracking-wider text-gray-300 ">
                                    {title}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-md text-muted-foreground leading-relaxed">
                        {aboutData.description}
                    </p>

                    <div className="flex gap-6">
                        {aboutData.socials.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`text-lg transition-colors duration-300 ${social.color}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Education Card */}
                    <div className="p-6 rounded-2xl bg-card shadow-lg mt-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10" />
                        <h3 className="text-lg font-semibold mb-1">{aboutData.education.degree}</h3>
                        <p className="text-md text-muted-foreground">{aboutData.education.university}</p>
                        <div className="flex justify-between items-center mt-4 text-sm font-medium">
                            <span className="text-primary">GPA: {aboutData.education.gpa}</span>
                            <span className="opacity-70">{aboutData.education.year}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Music & Github */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* Music Card */}
                    <MusicCon />

                    {/* Github Contribution */}
                    <div className="p-4 rounded-xl shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Github Contributions</h3>
                        <div className="flex justify-center sm:justify-start overflow-x-auto">
                            <ContributionGraph />
                        </div>
                    </div>
                </motion.div>
            </div>

            </div>

        </section>
    );
}

export default About;