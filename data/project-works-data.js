
export const projectNames = ['Dribbble', 'Real time file sharing', 'Payment crowdfunding', 'Peer to Peer video calling', 'Wondurlust', 'Spotify', 'AI Image Generator'];


export const allProjects = [
    {
        name: 'Dribbble',
        category: 'Full Stack',
        info: {
            heading: 'A sponsored platform for booking tours with secure payments and admin/user dashboards.', keypoints: [
                { title: 'Solves', shortIntro: 'Users can search/book 10+ dynamic tours, make secure payments, and track bookings in real-time.' },
                { title: 'Features', shortIntro: 'Google Maps, Razorpay integration, role-based dashboard, wishlist/review system.' },
                { title: 'Learned', shortIntro: 'Building a scalable full-stack system with secure auth, payments, and UI state management' }
            ],
            techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'Razorpay', 'Google Maps', 'Shadcn UI', 'Material UI']
        },
        link: 'https://snadbox-dribbble.netlify.app/',
        code: 'https://github.com/AryanDhamale/Dribbble.git',
        color: 'bg-gradient-to-r from-pink-400 to-red-100',
        image: '/projects/dribbble.png',
        isActive: false,
        lastUpdated: "Apr 19, 2025"
    },
    {
        name: 'Real time file sharing',
        category: 'System Design',
        info: {
            heading: 'A fast and secure file sharing tool with OTP validation and real-time upload/download.', keypoints: [
                { title: 'Solves', shortIntro: 'Allows users to share files instantly across devices with validation.' },
                { title: 'Features', shortIntro: 'Real-time Firebase sync, Multer optimization, OTP-based security.' },
                { title: 'Learned', shortIntro: 'Managing file streams, Firebase integration, and improving UX performance.' },
            ],
            techStack: ['React', 'Firebase', 'Express.js', 'Multer', 'Bootstrap']
        },
        link: 'https://real-time-file-sharing-web-app.vercel.app/',
        code: 'https://github.com/AryanDhamale/Real_Time_File_sharing_webApp.git',
        color: 'bg-gradient-to-r from-[#a6d176] to-slate-100',
        image: '/projects/fileSharing.png',
        isActive: false,
        lastUpdated: "Feb 28, 2025"
    },
    {
        name: 'Payment crowdfunding',
        category: 'Full Stack',
        info: {
            heading: 'A donation-based crowdfunding app for creators with real-time payment tracking.', keypoints: [
                { title: 'Solves', shortIntro: 'Enables creators to receive secure payments and track them via dashboards.' },
                { title: 'Features', shortIntro: 'Multi-provider login (Google, GitHub, LinkedIn), live Razorpay transactions.' },
                { title: 'Learned', shortIntro: 'Implementing secure payments + multi-auth with real-time user state updates.' }
            ],
            techStack: ['Next.js', 'MongoDB', 'Razorpay', 'NextAuth']
        },
        link: 'https://sandbox-blackbird.netlify.app/',
        code: 'https://github.com/AryanDhamale/Payment_croundfuncding_app.git',
        color: 'bg-gradient-to-r from-blue-400 to-slate-100',
        image: '/projects/blackBird.png',
        isActive: false,
        lastUpdated: "Mar 26, 2025"
    },
    {
        name: 'Peer to Peer video calling',
        category: 'System Design',
        info: {
            heading: 'A prototype for real-time video calls using peer-to-peer connections.', keypoints: [
                { title: 'Solves', shortIntro: 'Enables live video chat across devices using low-latency P2P architecture.' },
                { title: 'Features', shortIntro: 'WebRTC-based call setup, Socket.io signaling, minimal UI.' },
                { title: 'Learned', shortIntro: 'Building peer-to-peer media transmission and handling signaling logic.' }
            ],
            techStack: ['React', 'WebRTC', 'Socket.io', 'Express.js'],
        },
        link: 'https://vide-call-app-prototype.vercel.app/',
        code: 'https://github.com/AryanDhamale/VideCall_App_Prototype.git',
        color: 'bg-gradient-to-r from-[#fdb030] to-red-100',
        image: '/projects/peerTopeer.png',
        isActive: false,
        lastUpdated: "Feb 12, 2025"
    },
    {
        name: 'Wondurlust',
        category: 'Full Stack',
        info: {
            heading: 'A full-featured Airbnb-style platform with location search and user authentication.', keypoints: [
                { title: 'Solves', shortIntro: 'Lets users browse, list, and book properties with location filtering.' },
                { title: 'Features', shortIntro: 'Mapbox location search, reviews/comments, user auth with Passport.js.' },
                { title: 'Learned', shortIntro: 'Building REST APIs, session auth, and interactive map-based listings.' }
            ],
            techStack: ['MongoDB', 'Express', 'EJS', 'Node.js', 'Passport.js', 'Mapbox']
        },
        link: 'https://my-wonderlust.onrender.com/listings',
        code: 'https://github.com/AryanDhamale/My_Wonderlust.git',
        color: 'bg-gradient-to-r from-[#55bfb4] to-gray-100',
        image: '/projects/wonderlust.png',
        isActive: false,
        lastUpdated: "Mar 17, 2024"
    },
    {
        name: 'Spotify',
        category: 'Full Stack',
        info: {
            heading: 'A fully functional Spotify-like music streaming platform with subscription-based access and real-time UI.', keypoints: [
                { title: 'Solves', shortIntro: ' Allows users to browse, play, and manage music with premium access via Stripe payments.' },
                { title: 'Features', shortIntro: 'Auth with Supabase, song upload via drag & drop, playlist handling, Stripe billing, and responsive player UI.' },
                { title: 'Learned', shortIntro: 'Handling audio streaming logic, real-time UI sync with Zustand, subscription flows with Stripe + Supabase RBAC.' }
            ],
            techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'PostgreSQL', 'Zustand']
        },
        link: '/',
        code: 'https://github.com/AryanDhamale/NewSpotify.git',
        color: 'bg-gradient-to-r from-[#ffd641] to-gray-100',
        image: '/projects/Spotify.png',
        isActive: false,
        lastUpdated: "Mar 1, 2024"
    },
    {
        name: 'Movie Recommendation',
        category: 'AI/ML',
        info: {
            heading: 'An Hybrid Movie Recommendation System , suggest movies base on Content and Collaborative Filtering.',
            keypoints: [
                {
                    title: 'Solves',
                    shortIntro: 'Recommends relevant movies instead of random browsing.'
                },
                {
                    title: 'Features',
                    shortIntro: 'Personalized suggestions, real-time TMDB data, and detailed movie views.'
                },
                {
                    title: 'Learned',
                    shortIntro: 'Cosine similarity, ML logic, FastAPI–Next.js integration, and data handling.'
                }
            ],
            techStack: ['Next.js', 'FastAPI', 'Cosine Similarity', 'huggingface', 'Python', 'Pandas', 'NumPy', 'TMDB API']
        },
        link: 'https://new-hybrid-movies-recommendation-sy.vercel.app/',
        code: 'https://github.com/AryanDhamale/New_hybrid_movies_recommendation_system',
        color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
        image: '/projects/movieRecom.png',
        isActive: true,
        lastUpdated: "2 weeks ago"
    },
    {
        name: 'AI Girlfriend',
        category: 'AI/ML',
        info: {
            heading: 'An AI-powered virtual girlfriend for real-time chat, voice, and personalized interactions.',
            keypoints: [
                {
                    title: 'Solves',
                    shortIntro: 'Provides emotional companionship through intelligent conversations.'
                },
                {
                    title: 'Features',
                    shortIntro: 'Real-time chat, AI voice replies, authentication, and personalization.'
                },
                {
                    title: 'Learned',
                    shortIntro: 'Full-stack Next.js, AI integration, auth systems, and voice APIs.'
                }
            ],
            techStack: ['TypeScript', 'Next.js', 'Gemini AI', 'Dubverse', 'NextAuth', 'shadcn/ui', 'MongoDB']
        },
        link: 'https://ai-girl-friend.vercel.app/',
        code: 'https://github.com/AryanDhamale/ai_girlFriend/tree/main',
        color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
        image: '/projects/ai_girlfriend.png',
        isActive: true,
        lastUpdated: "Oct 27, 2025"
    },
    {
        name: 'AI Image Generator',
        category: 'AI/ML',
        info: {
            heading: 'An AI-powered application that generates images from text descriptions using OpenAI DALL-E API.', keypoints: [
                { title: 'Solves', shortIntro: 'Allows users to create unique artwork and visuals instantly from text prompts.' },
                { title: 'Features', shortIntro: 'Text-to-image generation, gallery showcase, community sharing.' },
                { title: 'Learned', shortIntro: 'Integrating OpenAI API, handling asynchronous requests, and managing cloud storage for images.' }
            ],
            techStack: ['MERN Stack', 'OpenAI API', 'Cloudinary', 'Tailwind CSS']
        },
        link: '#',
        code: '#',
        color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
        image: '/projects/ai_gen.png',
        isActive: true,
        lastUpdated: "3 weeks ago"
    }
];
