import Navbar from "@/components/Head-and-Foot/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import ProjectWork from "@/components/ProjectWorks/project-works";
import Skill from "@/components/Skill_and_Tools/my-skills";
import Certification from "@/components/Certification/certification";
import Services from "@/components/Service/service";
import BeautifulMemories from "@/components/Memories/beautiful-memories";
import ContactUs from "@/components/Contact/contact-us";
import Loader from "@/components/Loader/loader";
import { Suspense } from "react";

function Home() {
  return (
    // current-bg- #080411 #1b1340 youtbe-#0f0f0f
    <div className="bg-[#050505]">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main className="flex flex-col gap-y-50">
          <Hero />
          <About />
          <ProjectWork />
          <Skill />
          <Certification />
          <Services />
          <BeautifulMemories />
        </main>
        <ContactUs />
      </Suspense>
    </div>
  );
}

export default Home;