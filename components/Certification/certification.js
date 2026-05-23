import ConHeading from "../common-con/con-heading";
import { certificates } from "@/data/certification-data";
import CertificationCard from "./certification-cards/card";


function Certification() {

    return (
        <section id="certifications" className="w-full py-20">

            <div className="max-w-[85rem] mx-auto px-4 md:px-8 relative">
                <ConHeading
                    text="Credentials & Awards"
                    desc="Recognized proficiency in advanced technologies and methodologies."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        certificates.map((cart, idx) => <CertificationCard key={idx} idx={idx} cart={cart} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default Certification;
