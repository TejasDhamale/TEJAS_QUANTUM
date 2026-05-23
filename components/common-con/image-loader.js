"use client"

import { useState, useEffect } from "react";
import CustomeLoader from "../Image-loading-transition/custome-img-loader";
import CorruptedImage from "../Image-loading-transition/corrupted-img";
import Image from "next/image";


// loadingStyle=for loading div && style Img tag style // 
function ImageLoader({ url = null, loadingStyle, style, dimension, alt = "Failed to load image", signed = false }) {

    const [isloading, setIsloading] = useState({ loading: true, error_while_loading: false });
    const [signedUrl, setsignedUrl] = useState({ url: null, loading: true, error: false });
    const corruptedImage = "/corrupted/corrupted.webp";

    useEffect(() => {
        if (signed) {
            getSignedUrl();
        }
    }, []);

    async function getSignedUrl() {
        // url will be publicId // 
        const fetchSignURL = '/api/get-single-url';
        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify({ publicId: url, timeLimit: 60 }),
            header: {
                'content-type': 'application/json'
            }
        }
        try {
            const responce = await fetch(fetchSignURL, fetchOptions);
            const responceData = await responce.json();
            if (!responce.ok) {
                throw new Error(responceData?.error || "Failed to load image");
            }
            setsignedUrl({ url: responceData?.signedUrl || null, loading: false, error: false });
        }
        catch (err) {
            // handle error // 
            setsignedUrl({ url: null, loading: false, error: true });
            console.log(err);
        }
    }

    if (signed) {
        // total time = api call + loading time  // 
        return (
            <>
                {
                    signedUrl.loading && <CustomeLoader loadingStyle={loadingStyle} />
                }

                {
                    signedUrl.url && <Image width={dimension.width} height={dimension.height} src={signedUrl.url} alt={alt} className={`${signedUrl.loading ? 'w-0 h-0' : style}`} onError={() => setsignedUrl((oldVal) => ({ ...oldVal, error: true }))} onLoad={() => setsignedUrl((oldVal) => ({ ...oldVal, loading: false }))} />
                }

                {
                    (!signedUrl.url || signedUrl.error) && <CorruptedImage />
                }
            </>
        );
    }


    // total time = loading time // 
    return (
        <>
            {isloading.loading && <CustomeLoader loadingStyle={loadingStyle} />}

            {
                !isloading.error_while_loading && <Image width={dimension.width} height={dimension.height} src={url || corruptedImage} alt={alt} className={`${(isloading.loading) ? 'w-0 h-0' : style}`} onError={() => setIsloading({ loading: false, error_while_loading: true })} onLoad={() => setIsloading({ loading: false, error_while_loading: false })} />
            }

            {
                isloading.error_while_loading && <CorruptedImage />
            }

        </>
    );
}

export default ImageLoader;