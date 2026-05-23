import { allProjects } from "@/data/project-works-data";
import Link from "next/link";
import ProjectCard from "./project-works-cards/card";
import ProjectConHeading from "./heading/project-con-heading";
import { Button } from "@/components/ui/button"

function ProjectWork() {

  const parseDate = (dateStr) => {
    const now = new Date();
    if (dateStr.includes("ago")) {
      const num = parseInt(dateStr);
      if (dateStr.includes("week")) now.setDate(now.getDate() - num * 7);
      else if (dateStr.includes("day")) now.setDate(now.getDate() - num);
      else if (dateStr.includes("month")) now.setMonth(now.getMonth() - num);
      else if (dateStr.includes("year")) now.setFullYear(now.getFullYear() - num);
      return now.getTime();
    }
    return new Date(dateStr).getTime();
  };

  const sortedProjects = [...allProjects].sort((a, b) =>
    parseDate(b.lastUpdated) - parseDate(a.lastUpdated)
  );

  return (
    <section id="projects" className="py-20 w-full">

      <div className="max-w-[85rem] mx-auto relative">
        {/* Header Section */}
        <ProjectConHeading text={'Creative Works'} desc={'Explore a curated collection of innovative projects, ranging from AI/ML breakthroughs to complex full-stack architectures'} />

        {/* Projects Grid */}
        <div className="grid h-full md:px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-15 md:gap-10">
          {sortedProjects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} idx={idx} />
          ))}
        </div>

        {/* Details Button */}
        <div className="mt-24 text-center w-full flex items-center justify-center">
          <Link href="/project-details">
            <Button className="rounded-full">Explore All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectWork;
