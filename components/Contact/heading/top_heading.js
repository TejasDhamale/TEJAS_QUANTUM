import { Doto } from "next/font/google";

const doto = Doto({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
})

function TopHeading() {
    return (
        <div className="flex justify-between items-center">
            <div className={`text-xs md:text-sm text-white font-mono tracking-widest uppercase ${doto.className}`}>
                System Online
            </div>

            <div className={`hidden md:block`}>
                <div className="text-xs text-white/40 font-mono tracking-wider">
                    T-800 PROTOCOL INITIATED //
                </div>
            </div>
        </div>
    );
};

export default TopHeading;