"use client";
import { useState } from 'react';
import { allProjects } from '@/data/project-works-data';
import TopNavbar from '@/components-route/Project-details/top-navbar';
import LabsProjects from '@/components-route/Project-details/labs-projects';
import VaultProjects from '@/components-route/Project-details/vault-projects';

export default function ProjectDetails() {
    const [activeTab, setActiveTab] = useState('labs');

    const labsProjects = allProjects.filter(p => p.isActive);
    const vaultProjects = allProjects.filter(p => !p.isActive);

    return (
        <div className="min-h-screen bg-[#050511] text-neutral-200 selection:bg-indigo-500/30 font-sans">
            {/* Top Navigation */}
            <TopNavbar setActiveTab={setActiveTab} activeTab={activeTab} />

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                {activeTab === 'labs' ? (
                    <div className="space-y-24 py-10">
                        {labsProjects.map((project, index) => (
                            <LabsProjects key={index} labsProjects={labsProjects} index={index} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                        {vaultProjects.map((project, index) => (
                            <VaultProjects key={index} index={index} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}