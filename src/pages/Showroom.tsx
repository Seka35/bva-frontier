import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose
} from "@/components/ui/dialog";
import { ArrowRight, Code2, Paintbrush, Smartphone, X, Maximize2, Minimize2, ChevronLeft, ChevronRight, RotateCw, Lock } from "lucide-react";

// Project Data
const categories = [
    {
        titulo: "Web Design",
        icon: <Code2 className="w-6 h-6 text-primary" />,
        description: "Immersive interfaces and tailored digital experiences.",
        projects: [
            {
                id: 1,
                title: "Luxe Estate",
                description: "Prestige real estate platform integrating seamless 3D virtual tours.",
                fullDescription: "A complete reimagining of the luxury real estate browsing experience. We utilized WebGL and Three.js to create immersive 3D walkthroughs directly in the browser, resulting in a 40% increase in inquiry rates for premium listings.",
                tags: ["React", "Three.js", "Tailwind CSS"],
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 2,
                title: "Neon Finance",
                description: "Next-gen fintech dashboard with real-time data visualization.",
                fullDescription: "Neon Finance required a dashboard that could handle thousands of data points per second without lag. We built a custom rendering engine using D3.js and WebSockets, delivering a sub-10ms latency experience for traders.",
                tags: ["Vue.js", "D3.js", "WebSockets"],
                image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 3,
                title: "Art Gallery V",
                description: "Digital art gallery with spatial navigation and interactive curations.",
                fullDescription: "An award-winning digital gallery that challenges traditional navigation. Users float through a 3D space to discover art pieces, with spatial audio and dynamic lighting that reacts to user interaction.",
                tags: ["WebGL", "GSAP", "Next.js"],
                image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop",
                link: "#"
            },
        ],
    },
    {
        titulo: "Branding",
        icon: <Paintbrush className="w-6 h-6 text-primary" />,
        description: "Striking visual identities for visionary brands.",
        projects: [
            {
                id: 4,
                title: "Aura Cosmetics",
                description: "Complete visual identity redesign for a luxury organic cosmetics brand.",
                fullDescription: "Aura needed a brand that whispered luxury while shouting sustainability. We created a comprehensive brand book, packaging design, and digital presence that uses earth tones and gold foil textures to convey their values.",
                tags: ["Identity", "Packaging", "Art Direction"],
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2070&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 5,
                title: "Nexus Tech",
                description: "Creation of a futuristic graphic charter for an AI startup.",
                fullDescription: "For Nexus Tech, we developed a visual language based on generative art. The logo itself is dynamic, changing slightly based on the context it's displayed in, representing the adaptive nature of their AI technology.",
                tags: ["Logo", "Brand Book", "Motion Design"],
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 6,
                title: "Urban Coffee",
                description: "Brand strategy and environmental design for an urban coffee chain.",
                fullDescription: "We transformed Urban Coffee from a generic shop into a lifestyle brand. The project included interior design consulting, custom signage, and a merchandise line that sold out in the first week of launch.",
                tags: ["Merchandising", "Signage", "Social Media"],
                image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
                link: "#"
            },
        ],
    },
    {
        titulo: "Applications",
        icon: <Smartphone className="w-6 h-6 text-primary" />,
        description: "High-performance and intuitive mobile solutions.",
        projects: [
            {
                id: 7,
                title: "FitTrack Pro",
                description: "Fitness tracking application with personalized AI coaching.",
                fullDescription: "FitTrack Pro learns from user behavior to suggest workouts. We built a cross-platform React Native app that integrates deeply with health APIs (Apple Health, Google Fit) to provide holistic insights.",
                tags: ["React Native", "Machine Learning", "HealthKit"],
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 8,
                title: "Foodie Express",
                description: "Ultra-fast delivery platform with live geolocation tracking.",
                fullDescription: "Speed is everything. We optimized the entire delivery flow, from order placement to driver dispatch. The result is a high-availability platform handling 50k+ daily orders with real-time map tracking.",
                tags: ["Flutter", "Google Maps API", "Ruby on Rails"],
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 9,
                title: "Travel Gate",
                description: "Your gateway to exclusive travel experiences in Bali.",
                fullDescription: "Travel Gate revolutionizes tourism in Bali. We created a platform that connects travelers with authentic local experiences, including private van tours to iconic locations like the Gates of Heaven.",
                tags: ["Swift", "ARKit", "Firebase"],
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
                link: "#"
            },
        ],
    },
];

const Showroom = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedProject, setSelectedProject] = useState<typeof categories[0]["projects"][0] | null>(null);
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">
            <Navbar />

            <main className="relative pt-24 pb-16">
                {/* Background Elements */}
                <div className="fixed inset-0 -z-10 pointer-events-none">
                    <motion.div style={{ y: y1 }} className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                    <motion.div style={{ y: y2 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
                </div>

                {/* Hero Section */}
                <section className="container px-4 py-20 md:py-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/50 to-white/50">
                            Showroom
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                            A curated selection of our most impactful work.
                            <br className="hidden md:block" />
                            Where aesthetics meet performance.
                        </p>
                    </motion.div>
                </section>

                {/* Project Sections */}
                <div className="space-y-32 container px-4">
                    {categories.map((category, catIndex) => (
                        <section key={category.titulo} className="relative">
                            {/* Category Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="mb-12 flex items-center gap-4 border-b border-border/40 pb-4"
                            >
                                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                                    {category.icon}
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold">{category.titulo}</h2>
                                    <p className="text-muted-foreground mt-1">{category.description}</p>
                                </div>
                            </motion.div>

                            {/* Projects Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group"
                                    >
                                        {/* Project Card */}
                                        <div
                                            className="relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors duration-500 h-full flex flex-col cursor-pointer"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            {/* Image Container */}
                                            <div className="relative aspect-video overflow-hidden">
                                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 z-10 transition-colors duration-300 pointer-events-none" />
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:text-primary transition-colors">{project.title}</h3>
                                                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                <div className="mt-auto space-y-4">
                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(tag => (
                                                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground border border-white/5">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Action */}
                                                    <div className="pt-4 border-t border-border/30 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-sm font-medium group-hover:text-primary transition-colors">Explore Project</span>
                                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Final CTA */}
                <section className="container px-4 py-32 mt-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-gradient-to-b from-card/80 to-background border border-primary/20 rounded-2xl p-12 backdrop-blur-md relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-primary/5 -z-10" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to start your project?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Let's turn your vision into an exceptional digital reality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#book-schedule">
                                <Button size="xl" variant="hero" className="w-full sm:w-auto">
                                    Book Now
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </section>

            </main>
            <Footer />

            {/* Browser Simulation Modal */}
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background border-border shadow-2xl flex flex-col rounded-xl">
                    {selectedProject && (
                        <>
                            <div className="sr-only">
                                <DialogTitle>{selectedProject.title}</DialogTitle>
                                <DialogDescription>{selectedProject.description}</DialogDescription>
                            </div>

                            {/* Browser Toolbar */}
                            <div className="h-12 bg-muted/30 border-b border-border flex items-center px-4 gap-4 flex-shrink-0">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer" onClick={() => setSelectedProject(null)} />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500" />
                                </div>

                                <div className="flex items-center gap-4 text-muted-foreground/50 ml-2">
                                    <ChevronLeft className="w-4 h-4" />
                                    <ChevronRight className="w-4 h-4" />
                                    <RotateCw className="w-4 h-4" />
                                </div>

                                <div className="flex-1 max-w-2xl mx-auto">
                                    <div className="h-8 bg-background/50 rounded-md border border-border/50 flex items-center px-3 text-xs text-muted-foreground font-mono">
                                        <Lock className="w-3 h-3 mr-2 text-green-500" />
                                        https://{selectedProject.title.toLowerCase().replace(/\s+/g, '-')}.com
                                    </div>
                                </div>

                                <div className="w-20" /> {/* Spacer for balance */}
                            </div>

                            {/* Website Simulation Viewport */}
                            <div className="flex-1 overflow-y-auto bg-white/5 scrollbar-hide relative">
                                {/* Simulated Content */}
                                <div className="w-full min-h-full bg-background">

                                    {/* Simulated Hero */}
                                    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                                            <motion.h1
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-4xl md:text-7xl font-bold mb-4"
                                            >
                                                {selectedProject.title}
                                            </motion.h1>
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="text-xl text-muted-foreground max-w-2xl"
                                            >
                                                {selectedProject.description}
                                            </motion.p>
                                        </div>
                                    </div>

                                    {/* Simulated Content Sections */}
                                    <div className="container mx-auto px-6 py-20">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                            <div className="md:col-span-2 space-y-8">
                                                <h2 className="text-3xl font-bold">About the Project</h2>
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    {selectedProject.fullDescription}
                                                </p>
                                                <div className="h-40 bg-muted/20 rounded-xl animate-pulse" />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="h-32 bg-muted/20 rounded-xl animate-pulse" />
                                                    <div className="h-32 bg-muted/20 rounded-xl animate-pulse" />
                                                </div>
                                            </div>
                                            <div className="space-y-8">
                                                <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                                                    <h3 className="font-bold mb-4">Technologies</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProject.tags.map(tag => (
                                                            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                                                    <h3 className="font-bold mb-4">Client Feedback</h3>
                                                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                                        {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                                                    </div>
                                                    <p className="text-sm italic text-muted-foreground">"An exceptional delivery that perfectly matched our vision."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Simulated Footer */}
                                    <div className="bg-muted/10 border-t border-border/50 py-12 text-center text-sm text-muted-foreground">
                                        <p>&copy; 2024 {selectedProject.title}. All rights reserved.</p>
                                        <p className="mt-2 text-xs">Designed & Developed by BVA.</p>
                                    </div>

                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Showroom;
