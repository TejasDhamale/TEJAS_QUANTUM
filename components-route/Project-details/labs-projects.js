import Image from "next/image";
import Link from "next/link";

function LabsProjects({ labsProjects, project, index }) {
    return (
        <div key={index} className="group relative">
            {/* Connecting Line */}
            {index !== labsProjects.length - 1 && (
                <div className="absolute left-6 top-full h-24 w-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent z-0 hidden md:block"></div>
            )}

            <div className="grid md:grid-cols-[auto,1fr] gap-8 relative z-10">
                {/* Number / Status Marker */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:border-indigo-400 transition-colors">
                        <span className="text-indigo-400 font-mono text-sm">0{index + 1}</span>
                    </div>
                </div>

                {/* Project Content */}
                <div className="space-y-8">
                    {/* Header */}
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 border-b border-white/5 pb-8">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono tracking-wider uppercase border border-indigo-500/20">
                                    {project.category}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase border border-emerald-500/20">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    Active Research
                                </span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300">
                                {project.name}
                            </h3>
                            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                                {project.info.heading}
                            </p>
                        </div>

                        {/* Creative Image Display */}
                        <div className="relative w-full xl:w-72 h-44 shrink-0 rounded-2xl overflow-hidden border border-white/10 group-hover:border-indigo-500/50 transition-all duration-500 group/image">
                            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10"></div>
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover transform group-hover/image:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-transparent to-transparent z-20"></div>
                            <div className="absolute bottom-3 left-3 z-30 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                                <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest">Live Preview</span>
                            </div>
                        </div>

                        {/* Open Lab Button - Amazing Style */}
                        <div className="shrink-0 pt-2">
                            <Link
                                href={"#"}
                                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 group/btn"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all duration-300 group-hover/btn:bg-slate-950/80">
                                    Open Lab
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Col: Keypoints */}
                        <div className="lg:col-span-2 grid gap-6">
                            {project.info.keypoints.map((kp, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{kp.title}</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">{kp.shortIntro}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Col: Stack & Links */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
                                <h4 className="text-sm font-mono text-neutral-500 uppercase mb-4 tracking-wider">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.info.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-neutral-300 text-xs hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LabsProjects;