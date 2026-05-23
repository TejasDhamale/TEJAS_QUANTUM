import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import ImageLoader from "../common-con/image-loader";
import Combutton from "../common-con/project-button";

// loading data from project-works-data 
import { allProjects } from "@/data/project-works-data";


function ProjectSlider({ sliderControl }) {

  const [currentIDX, setcurrIDX] = useState(0);

  const leftSlide = () => {
    let idx = (currentIDX - 1) >= 0 ? currentIDX - 1 : allProjects.length - 1;
    setcurrIDX(idx)
  }

  const rightSlide = () => {
    let idx = (currentIDX + 1) % allProjects.length;
    setcurrIDX(idx)
  }

  return (
    <div className="mt-6 max-[929px]:flex flex-col gap-y-5 hidden">

      {/* cards */}
      <div>
        <AnimatePresence key={currentIDX}>
          <motion.div id={currentIDX} initial={{ z: 25, opacity: 0 }} animate={{ z: 0, opacity: 1 }} exit={{ z: -25, opacity: 0 }} transition={{ duration: 1.5, type: 'spring' }} className={`bg-[#19113380] border-1 border-[#8d31f533] backdrop-blur-md drop-shadow-lg mx-auto w-[90%] rounded-xl  h-[580px] max-[630px]:py-3 min-[630px]:h-[380px] min-[630px]:items-center max-[630px]:flex-col-reverse gap-y-5 flex px-4`}>
            {/* informatio box - parent*/}
            <div className="w-full min-[630px]:w-[55%] flex items-center justify-center">
              {/* information box - child */}
              <div className="w-full flex flex-col gap-y-4 ">
                {/* information here */}
                <div className="max-[630px]:h-[230px]">
                  <h1 className="text-xl bg-gradient-to-r from-[#6423f3] to-[#fff] bg-clip-text text-transparent font-medium italic mb-2">{allProjects[currentIDX].name}</h1>
                  <ul className="text-sm font-light flex flex-col gap-y-2 tracking-wider">
                    {
                      allProjects[currentIDX].info.keypoints.map((el, idx) => <li key={idx}>{el.shortIntro}</li>)
                    }
                  </ul>
                </div>
                {/* live here */}
                <Link href={allProjects[currentIDX].link}>
                  <Combutton text="Live here" isDark={true} />
                </Link>
              </div>

            </div>
            <div className="flex-1 flex items-center justify-center rounded-md">
              <span className="w-full" onClick={() => sliderControl({ visible: true, imgNo: currentIDX })}> <ImageLoader url={allProjects[currentIDX].image} loadingStyle={'w-full h-[230px]'} style={'w-full h-[230px] object-cover rounded-md cursor-pointer'} dimension={{ width: 1895, height: 910 }} /> </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* buttons */}
      <div className="flex items-center justify-center gap-x-5 mb-8">
        <div onClick={leftSlide} className="size-8 bg-[#5c3be7] text-white rounded-xl flex items-center justify-center "> <FaAngleLeft className="text-lg" />  </div>

        <div onClick={rightSlide} className="size-8 bg-[#5c3be7] text-white rounded-xl flex items-center justify-center "> <FaAngleRight className="text-lg" />  </div>
      </div>
    </div>
  );
}

export default ProjectSlider;