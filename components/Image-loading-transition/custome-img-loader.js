/// react icon // 
import { FaMountainSun } from "react-icons/fa6";

function CustomeLoader({loadingStyle}) {
    return (
        <div className={`${loadingStyle} rounded-3xl bg-[#37258080] backdrop-blur-md flex items-center justify-center`}>
            <div className="relative flex items-center justify-center w-15 h-15">
                <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-[#6d4aff] animate-spin" />
                <span className="text-xl  text-[#6d4aff] z-10"> <FaMountainSun /> </span>
            </div>
        </div>
    );
}

export default CustomeLoader;