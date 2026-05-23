import Image from 'next/image';
import MaskeDiv from "@/components/ui/masked-div";
import ConHeading from "@/components/common-con/con-heading"

const BeautifulMemories = () => {
    return (
        <section id='memories' className="w-full py-20 text-white">

            <div className="max-w-[85rem] px-4 md:px-8 mx-auto flex flex-col gap-x-5 gap-y-16">

                {/* Header Section */}
                <div className="text-center space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-xl border-[1.5px] border-white/10 bg-white/5 backdrop-blur-sm mb-4">
                        <span className="text-sm font-light tracking-widest uppercase text-gray-300">Gallery</span>
                    </div>
                    <ConHeading text="Captured Moments" desc="Fragments of time, shaped into everlasting memories. A collection of visual stories that define our journey." />
                </div>

                {/* Memories Grid - Organic Shapes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 max-md:gap-y-16">

                    {/* Memory 1: The Leaf Shape (Top-Left rounded, Bottom-Right rounded) */}
                    <MaskeDiv maskType="type-1" size={0.8} className="group relative">
                        <div className="group relative w-full overflow-hidden">
                            <Image
                                src="/memories/img-1.png"
                                alt="Beautiful Memory 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white text-lg font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    01 &mdash; The Beginning
                                </p>
                            </div>
                        </div>
                    </MaskeDiv>

                    {/* Memory 2: The Arch (Top rounded) Exploration*/}
                    <MaskeDiv maskType="type-1" size={0.8} className="group relative rotate-180">
                        <div className="group relative w-full overflow-hidden rotate-180">
                            <Image
                                src="/memories/img-4.jpg"
                                alt="Beautiful Memory 4"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white text-lg font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    02 &mdash; Exploration
                                </p>
                            </div>
                        </div>
                    </MaskeDiv>

                </div>

                {/* Memory 3: The Inverted Arch (Bottom rounded) Perspective*/}
                <MaskeDiv maskType="type-4" size={0.9} className="group relative">
                    <div className="group relative w-full overflow-hidden">
                        <Image
                            src="/memories/img-3.jpg"
                            alt="Beautiful Memory 3"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 left-5 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <p className="text-white text-lg font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                03 &mdash; Perspective
                            </p>
                        </div>
                    </div>
                </MaskeDiv>

                {/* Memory 4: The Reverse Leaf (Top-Right rounded, Bottom-Left rounded) Reflection*/}
                <MaskeDiv maskType="type-2" size={0.9} className="group relative">
                    <div className="group relative w-full overflow-hidden">
                        <Image
                            src="/memories/img-2.jpg"
                            alt="Beautiful Memory 2"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute right-5 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <p className="text-white text-lg font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                04 &mdash; Reflection
                            </p>
                        </div>
                    </div>
                </MaskeDiv>

            </div>
        </section>
    );
};

export default BeautifulMemories;