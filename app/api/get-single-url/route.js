import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { Authantication, generateToken } from "@/authatication/auth-token";

// should be protected // 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

function getSignUrl(publicId, timeLimit) {
    const signedUrl = cloudinary.url(publicId, {
        type: 'authenticated',
        secure: true,
        sign_url: true,
        expires_at: Math.floor(Date.now() / 1000) + timeLimit,
    })

    return signedUrl;
}

async function GET() {
    return NextResponse.json({ message: "This is SANDBOX under the hood of SHAO INDUSTRIAL made by TEJAS DHAMALE" }, { status: 200 });
}

async function POST(request, _) {
    try {
        const { publicId, timeLimit} = await request.json();

        // Enforcing publicID and TimeLimit must required !    
        if (!publicId || !timeLimit) {
            return NextResponse.json({ error: "publicId && timeLimit are required!" }, { status: 400 });
        }

        // authantication passed // 
        const signedUrl= getSignUrl(publicId,timeLimit);
        return NextResponse.json({signedUrl},{status:200});
        
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 503 });
    }
}

export { POST, GET };