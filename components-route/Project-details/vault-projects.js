import Image from "next/image";

function VaultProjects({ index, project }) {
    return (
        <div key={index} className="group relative bg-[#0a0a16] rounded-3xl border border-white/5 overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] hover:-translate-y-2 flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
                <div className={`absolute inset-0 opacity-20 ${project.color} mix-blend-overlay z-10`}></div>
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-[#0a0a16]/40 to-transparent z-20"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 z-30">
                    <div className="flex items-center gap-2 p-2 pr-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-wider">Archived</span>
                    </div>
                </div>

                <div className="absolute top-4 right-4 z-30">
                    <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-400 group-hover:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-amber-500/20 blur-xl group-hover:bg-amber-500/40 transition-all duration-500"></div>

                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
                        {project.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors">
                        {project.info.heading}
                    </p>
                </div>

                <div className="mt-auto space-y-6">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.info.techStack.map((tech, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md text-[10px] uppercase font-medium tracking-wide bg-white/5 border border-white/5 text-neutral-500 group-hover:border-amber-500/20 group-hover:text-amber-500/70 transition-colors">
                                {tech}
                            </span>
                        ))}
                        {/* {project.info.techStack.length > 4 && (
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide bg-white/5 border border-white/5 text-neutral-500">
                                +{project.info.techStack.length - 4}
                            </span>
                        )} */}
                    </div>

                    {/* Footer */}
                    <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {project.lastUpdated}
                        </div>
                        <span className="text-neutral-600 text-xs group-hover:text-amber-500 transition-colors flex items-center gap-1 font-medium select-none">
                            Locked
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VaultProjects;