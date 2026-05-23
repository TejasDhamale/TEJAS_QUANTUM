import ConHeading from "../common-con/con-heading";
import { skills } from "@/data/skills-data";
import SkillCard from "./skill-and-tools-card/card";

function Skill() {

    return (
        <section id="skills" className="w-full py-20">

            <div className="px-4 md:px-8 max-w-[85rem] mx-auto relative">

                <ConHeading text="Technical Expertise" desc="Architecting digital solutions with modern technologies. Explore my stack." />

                <div className="mt-16 flex flex-col gap-15">
                    {skills.map((skill, index) => {
                        return (
                            <SkillCard key={index} skill={skill} index={index} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skill;
