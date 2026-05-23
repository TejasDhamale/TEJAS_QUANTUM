import Image from "next/image";

function MyIcon() {
    return (
        <div className="relative border-2 border-white/10 shadow-glass backdrop-blur-md bg-white/10 overflow-hidden rounded-[0.5rem] w-8 h-8 flex items-center justify-center">
            {/* background image */}
            <Image width={32} height={32} className="absolute inset-0 w-full h-full overflow-clip" src={'/my-icon-assets/_logomark-bg.svg'} alt="this is an background image " />

            {/* blur effect */}
            <div className="z-2 backdrop-blur-[3px] bg-[#fff3] bg-[linear-gradient(#0a0d1200,#0a0d1200_80%,#0a0d1233)] w-full h-[60%] absolute top-[50%] left-0 right-0 bottom-0 overflow-hidden translate-y-[1%]" />

            {/* circle  */}
            <Image width={32} height={32} className="absolute z-1 w-1/2 h-1/2 rounded-full shadow-[0_0_1px_#0a0d120f,0_1px_3px_#0a0d121a] bg-[linear-gradient(26.5deg,#6941c6,#53389e)] overflow-clip" src={'/my-icon-assets/_untitled-ui-palantir.svg'} alt="this is an circle image " />

        </div>
    );
};

export default MyIcon;