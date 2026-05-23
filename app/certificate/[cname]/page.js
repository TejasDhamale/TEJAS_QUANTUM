import { notFound } from "next/navigation";
import Link from "next/link";
import ImageLoader from "@/components/common-con/image-loader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2, Award, ExternalLink } from 'lucide-react';

async function ShowCertificate({ params }) {

    const { cname = '' } = await params;
    const certificate = [
        {
            name: 'data_science',
            path: '/certificates/DATA_SCIENCE.jpg',
            width: 1333,
            height: 871
        },
        {
            name: 'dsa_with_cpp',
            path: '/certificates/DSA_WITH_CPP.png',
            width: 1234,
            height: 866,
        },
        {
            name: 'mern_stack',
            path: '/certificates/MERN_STACK.jpg',
            width: 1164,
            height: 825
        },
        {
            name: 'fastapi',
            path: '/certificates/FASTAPI.png',
            width: 1992,
            height: 1598,
        }
    ];

    const currentCert = certificate.find(c => c.name === cname);

    if (!cname || !currentCert) {
        return notFound();
    }

    // Format the name for display (e.g., "data_science" -> "Data Science")
    const displayName = cname.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="min-h-screen bg-neutral-950 text-white relative overflow-x-hidden selection:bg-indigo-500/30 font-sans">

            {/* Ambient Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Navbar */}
            <nav className="relative z-20 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link href={'/'}>
                    <Button variant={'ghost'} className="group text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-300 pl-2 pr-4">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Button>
                </Link>

                <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Verified Credential</span>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-start pt-10 pb-20 px-4 min-h-[calc(100vh-100px)]">

                {/* Header Section */}
                <div className="text-center mb-12 space-y-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
                        {displayName}
                    </h1>
                    <p className="text-lg text-neutral-400 font-light">
                        Professional Certification
                    </p>
                </div>

                {/* Certificate Display */}
                <div className="w-full max-w-5xl mx-auto perspective-1000">
                    <div className="relative group animate-in zoom-in-95 duration-1000 delay-200">

                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                        {/* Card Container */}
                        <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-2 md:p-3 shadow-2xl ring-1 ring-white/10">

                            {/* Image Wrapper */}
                            <div className="relative rounded-xl overflow-hidden bg-neutral-950 w-full">
                                <ImageLoader
                                    url={currentCert.path}
                                    loadingStyle={'w-full h-[300px] sm:h-[400px] md:h-[600px]'}
                                    style={'w-full h-auto object-contain rounded-lg select-none hover:scale-[1.01] transition-transform duration-700 ease-out'}
                                    dimension={{ width: currentCert.width, height: currentCert.height }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Link href={currentCert.path} target="_blank" download>
                        <Button className="bg-white text-black hover:bg-neutral-200 transition-colors min-w-[140px] h-11 rounded-full font-medium">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                        </Button>
                    </Link>

                    <Link href={currentCert.path} target="_blank">
                        <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors min-w-[140px] h-11 rounded-full bg-transparent">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Full
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default ShowCertificate;