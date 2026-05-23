import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { songs } from "@/data/song-data";

function MusicCon() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => console.error("Playback failed:", error));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSong]);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const nextSong = () => setCurrentSong((prev) => (prev + 1) % songs.length);
    const prevSong = () => setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSongEnd = () => {
        nextSong();
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

            <audio
                ref={audioRef}
                src={songs[currentSong].url}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleSongEnd}
            />

            <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-primary/20`}>
                        {
                            songs[currentSong].img ? (
                                <Image src={songs[currentSong].img} alt={songs[currentSong].title} width={48} height={48} className="w-full h-full  rounded-xl" />
                            ) : (
                                <Music className="text-primary w-6 h-6" />
                            )
                        }
                    </div>
                    <div>
                        <h3 className="text-white max-md:truncate max-md:w-42 font-bold text-lg">{songs[currentSong].title}</h3>
                        <p className="text-white/60 text-sm">{songs[currentSong].artist}</p>
                    </div>
                </div>
                {/* Modern Sound Wave Visualizer */}
                <div className="flex items-center gap-1 h-10 w-16 justify-center">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1 rounded-full bg-[#39d353]"
                            style={{
                                boxShadow: isPlaying ? "0 0 12px #39d353" : "none"
                            }}
                            animate={{
                                height: isPlaying ? [8, 28, 12, 32, 14] : 4,
                                opacity: isPlaying ? 1 : 0.5,
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/40">{formatTime(currentTime)}</span>
                <div className="flex items-center gap-6">
                    <button onClick={prevSong} className="text-white/70 hover:text-white transition-colors">
                        <SkipBack size={24} />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
                    >
                        {isPlaying ? <Pause fill="black" size={20} /> : <Play fill="black" className="ml-1" size={20} />}
                    </button>
                    <button onClick={nextSong} className="text-white/70 hover:text-white transition-colors">
                        <SkipForward size={24} />
                    </button>
                </div>
                <span className="text-xs text-white/40">{formatTime(duration)}</span>
            </div>
        </div>
    );
}

export default MusicCon;