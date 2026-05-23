// import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import ImageLoader from "../common-con/image-loader";

// react icon // 
import { IoIosCloseCircle } from "react-icons/io";

function ImageSlider({ imgNo, control }) {
    const imageArray = ['dribbble.png', 'fileSharing.png', 'blackBird.png', 'peerTopeer.png', 'wonderlust.png', 'Spotify.png'];
    const [currentImage, setcurrImage] = useState(imgNo);

    const nextSlide = () => {
        let index = (currentImage + 1) % imageArray.length;
        setcurrImage(index);
    }

    const prevSlide = () => {
        let index = currentImage - 1 >= 0 ? currentImage - 1 : imageArray.length - 1;
        setcurrImage(index);
    }
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-30 w-full min-h-screen z-100 fixed top-0 left-0 bottom-0 bg-[#2b323e82]">

            <div onClick={() => control((oldVal) => ({ ...oldVal, visible: false }))} className="absolute left-9 top-10 size-8 bg-[#5c3be7] rounded-lg cursor-pointer flex items-center justify-center"> <IoIosCloseCircle className=" text-3xl" /> </div>

            {/* left */}
            <div onClick={prevSlide} className="size-8 bg-[#5c3be7] rounded-full hidden md:flex  justify-center items-center cursor-pointer"> <FaAngleLeft className="text-lg text-white" /> </div>

            <AnimatePresence key={currentImage}>
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 20, opacity: 0 }} transition={{ type: 'spring', duration: 0.5 }} className='w-9/10 md:w-7/10'>

                    {/* image loader will here */}
                    <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center ">
                        <ImageLoader url={'/projects/' + imageArray[currentImage]} loadingStyle={'w-full h-full'} style={'w-full rounded-md'} dimension={{ width: 1912, height: 908 }} />
                    </div>


                </motion.div>
            </AnimatePresence>

            {/* right */}
            <div onClick={nextSlide} className="size-8 bg-[#5c3be7] rounded-full hidden md:flex justify-center items-center cursor-pointer"> <FaAngleRight className="text-lg text-white" /> </div>

            {/* for less than < md */}
            <div className="flex items-center gap-x-4 md:hidden mt-6">
                <div onClick={prevSlide} className="size-8 rounded-full flex  justify-center items-center  bg-[#5c3be7] cursor-pointer"> <FaAngleLeft className="text-lg text-white" /> </div>
                <div onClick={nextSlide} className="size-8 rounded-full flex  justify-center items-center  bg-[#5c3be7] cursor-pointer"> <FaAngleRight className="text-lg text-white" /> </div>
            </div>
        </div>
    );

}

export default ImageSlider;