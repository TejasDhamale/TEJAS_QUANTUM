import Image from "next/image";

function CorruptedImage() {
    return (
        <Image width={512} height={512} className={`w-50 bg-transparent mx-auto`} src={'/corrupted/corrupted.webp'} alt="Failed to image"/>
    );
}

export default CorruptedImage;