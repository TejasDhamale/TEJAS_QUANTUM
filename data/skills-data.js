import {
    Database,
    Terminal,
    Cpu,
    Globe,
    Server,
    Layout,
    Zap,
    Bot
} from "lucide-react";

export const skills = [
    {
        id: 0,
        heading: "AI / ML Engineer",
        subtext: "Architecting Intelligence",
        description: "Building intelligent systems that learn, adapt, and drive decision-making through advanced data models.",
        icon_: "/skills/Glossy_black_quadcop.png",
        stats: ["Generalized Models", "50+ Models", "Deep Tech"],
        sections: [
            {
                title: "Core & ML Skills",
                icon: <Cpu className="w-5 h-5 text-purple-400" />,
                list: ["Python", "Statistics", "Probability", "Linear Algebra", "Data Cleaning", "Feature Engineering"],
            },
            {
                title: "Neural Networks",
                icon: <Bot className="w-5 h-5 text-pink-400" />,
                list: ["Supervised Learning", "Unsupervised Learning", "Deep Learning (ANN, CNN, RNN)", "NLP", "Computer Vision"],
            },
            {
                title: "MLOps & Tools",
                icon: <Terminal className="w-5 h-5 text-indigo-400" />,
                list: ["Pandas", "NumPy", "PyTorch", "Scikit-learn", "SQL", "FastAPI", "Docker", "Git Actions"],
            },
        ],
    },
    {
        id: 1,
        heading: "DSA with C++",
        subtext: "Algorithmic Mastery",
        description: "Solving complex problems with optimized algorithms and robust data structures for maximum efficiency.",
        icon_: "/skills/Glossy_black_gear.png",
        stats: ["150+ Problems", "O(1) Thinking", "System Design"],
        sections: [
            {
                title: "Core Programming",
                icon: <Terminal className="w-5 h-5 text-blue-400" />,
                list: ["C++ (STL, Pointers)", "Memory Management", "OOP", "Templates", "Error Handling"],
            },
            {
                title: "Data Structures",
                icon: <Database className="w-5 h-5 text-cyan-400" />,
                list: ["Arrays & Strings", "Trees (BST, Trie)", "Linked Lists", "Stacks & Queues", "Hashing", "Heaps"],
            },
            {
                title: "Algorithms",
                icon: <Zap className="w-5 h-5 text-yellow-400" />,
                list: ["Sorting & Searching", "Recursion", "Dynamic Programming", "Graph Theory", "Greedy Algo", "Backtracking"],
            },
        ],
    },
    {
        id: 2,
        heading: "Full Stack Developer",
        subtext: "End-to-End Solutions",
        description: "Crafting seamless, high-performance web applications with modern frontend and scalable backend architectures.",
        icon_: "/skills/Glossy_black_fold.png",
        stats: ["Pixel Perfect", "Scalable APIS", "SEO Optimized"],
        sections: [
            {
                title: "Frontend Magic",
                icon: <Layout className="w-5 h-5 text-orange-400" />,
                list: ["React.js", "Next.js", "Redux", "TailwindCSS", "Framer Motion", "Shadcn/ui", "TypeScript"],
            },
            {
                title: "Backend Core",
                icon: <Server className="w-5 h-5 text-emerald-400" />,
                list: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "WebSockets"],
            },
            {
                title: "DevOps & Cloud",
                icon: <Globe className="w-5 h-5 text-teal-400" />,
                list: ["Vercel", "AWS", "Docker", "CI/CD Pipelines", "Nginx", "Linux", "Authentication"],
            },
        ],
    },
];