
function TopNavbar({ setActiveTab, activeTab }) {
    return (
        <div className="sticky top-0 z-50 bg-[#050511]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <button
                        onClick={() => setActiveTab('labs')}
                        className={`relative group p-6 md:p-8 text-left transition-all duration-300 ${activeTab === 'labs'
                            ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/5'
                            : 'hover:bg-white/5'
                            }`}
                    >
                        <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${activeTab === 'labs' ? 'bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]' : 'bg-transparent'
                            }`} />
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`p-2 rounded-lg ${activeTab === 'labs' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-neutral-400'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </span>
                            <h2 className={`text-xl font-bold tracking-tight ${activeTab === 'labs' ? 'text-white' : 'text-neutral-400'}`}>
                                AI Labs
                            </h2>
                        </div>
                        <p className="text-sm text-neutral-500 font-medium pl-14">
                            Active AI/ML projects with research, notebooks & insights
                        </p>
                    </button>

                    <button
                        onClick={() => setActiveTab('vault')}
                        className={`relative group p-6 md:p-8 text-left transition-all duration-300 ${activeTab === 'vault'
                            ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/5'
                            : 'hover:bg-white/5'
                            }`}
                    >
                        <div className={`absolute left-0 md:left-auto md:right-0 top-0 bottom-0 w-1 md:-ml-1 transition-all duration-300 ${activeTab === 'vault' ? 'bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]' : 'bg-transparent'
                            }`} />
                        <div className="flex items-center gap-3 mb-2 md:justify-end">
                            <h2 className={`text-xl font-bold tracking-tight ${activeTab === 'vault' ? 'text-white' : 'text-neutral-400'}`}>
                                Engineering Vault
                            </h2>
                            <span className={`p-2 rounded-lg ${activeTab === 'vault' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-neutral-400'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </span>
                        </div>
                        <p className="text-sm text-neutral-500 font-medium md:text-right md:pr-14">
                            Production-ready builds from earlier phases
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;