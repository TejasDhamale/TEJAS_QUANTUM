import {
    BrainCircuit,
    Sparkles,
    CloudLightning,
    Rocket,
    MessageSquareText,
    Layers
} from "lucide-react";


export const cards = [
    {
        title: "AI & Machine Learning",
        icon: <BrainCircuit className="w-7 h-7" />,
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-cyan-500/20",
        info: "Designing and deploying production-ready ML models for real-world problems — from predictive analytics to intelligent automation systems.",
    },
    {
        title: "Generative AI & LLMs",
        icon: <Sparkles className="w-7 h-7" />,
        color: "text-fuchsia-400",
        gradient: "from-fuchsia-500/20 to-purple-500/20",
        info: "Building next-gen products using Large Language Models, including custom chatbots, content generation pipelines, and AI assistants.",
    },
    {
        title: "AI APIs & Serving",
        icon: <CloudLightning className="w-7 h-7" />,
        color: "text-emerald-400",
        gradient: "from-emerald-500/20 to-teal-500/20",
        info: "Deploying scalable, secure AI endpoints using FastAPI and cloud infrastructure to seamlessly serve models to web and mobile apps.",
    },
    {
        title: "MLOps & Deployment",
        icon: <Rocket className="w-7 h-7" />,
        color: "text-orange-400",
        gradient: "from-orange-500/20 to-red-500/20",
        info: "End-to-end lifecycle management: from model versioning and experiment tracking to automated CI/CD pipelines for reliable production AI.",
    },
    {
        title: "NLP & Text Systems",
        icon: <MessageSquareText className="w-7 h-7" />,
        color: "text-sky-400",
        gradient: "from-sky-500/20 to-indigo-500/20",
        info: "Advanced text analysis solutions including semantic search, sentiment analysis, and automated document processing using Deep Learning.",
    },
    {
        title: "AI-Powered Apps",
        icon: <Layers className="w-7 h-7" />,
        color: "text-violet-400",
        gradient: "from-violet-500/20 to-purple-500/20",
        info: "Seamlessly integrating complex AI capabilities into modern full-stack web applications for performant, intelligent user experiences.",
    },
];