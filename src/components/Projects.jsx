import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const ref = useRef(null);
    const [active, setActive] = useState('all');
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };
    
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A responsive admin dashboard with dark theme, real-time data visualization, and user management features built with modern web technologies.",
            image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "frontend",
            technologies: ["React", "Tailwind CSS", "Chart.js", "Framer Motion"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A full-stack task management application with drag-and-drop functionality, user authentication, and real-time updates using Socket.io.",
            image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "fullstack",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 3,
            title: "Cyber Portfolio",
            description: "A futuristic portfolio website with space-themed design, interactive animations, and cutting-edge visual effects.",
            image: "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "ui",
            technologies: ["React", "Framer Motion", "Three.js", "Tailwind CSS"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 4,
            title: "Crypto Tracker",
            description: "A cryptocurrency tracking application with real-time price updates, historical data charts, and advanced portfolio management features.",
            image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "frontend",
            technologies: ["React", "Redux", "Chart.js", "CoinGecko API"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 5,
            title: "AI Recipe Finder",
            description: "An intelligent recipe discovery platform using AI to suggest meals based on available ingredients, dietary preferences, and nutritional goals.",
            image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "fullstack",
            technologies: ["React", "Node.js", "OpenAI API", "Express"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 6,
            title: "Holographic UI Kit",
            description: "A comprehensive UI component library featuring holographic effects, cyber-punk aesthetics, and modern design patterns for futuristic applications.",
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "ui",
            technologies: ["React", "Storybook", "CSS3", "TypeScript"],
            demoLink: "#",
            codeLink: "#",
        },
    ];
    
    const filteredProjects = active === 'all' 
        ? projects 
        : projects.filter(project => project.category === active);
    
    const categories = [
        { id: 'all', name: 'All Projects', icon: '🚀' },
        { id: 'frontend', name: 'Frontend', icon: '🎨' },
        { id: 'fullstack', name: 'Full Stack', icon: '⚡' },
        { id: 'ui', name: 'UI/UX Design', icon: '✨' },
    ];
    
    return (
        <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ 
                        duration: 25, 
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            
            <motion.div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{ y, opacity }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-purple-950/5 to-transparent opacity-70"></div>
            </motion.div>
          
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            My Projects
                        </h2>
                        <motion.div 
                            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "6rem" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            Here's a showcase of my recent work, ranging from frontend designs to full-stack applications with cutting-edge technologies.
                        </p>
                    </motion.div>
                  
                    <motion.div 
                        variants={itemVariants}
                        className="flex justify-center flex-wrap gap-4 mb-12"
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActive(category.id)}
                                className={`interactive px-6 py-3 rounded-full transition-all duration-500 font-medium flex items-center gap-2 ${
                                    active === category.id 
                                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/50' 
                                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-300 border border-slate-600/50'
                                }`}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: active === category.id 
                                        ? "0 10px 30px -5px rgba(0, 255, 255, 0.4)"
                                        : "0 5px 15px -5px rgba(100, 116, 139, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                            >
                                <span className="text-lg">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </motion.div>
                  
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </motion.div>
                  
                    {filteredProjects.length === 0 && (
                        <motion.div 
                            variants={itemVariants}
                            className="text-center mt-16 py-16 px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-cyan-400/20"
                        >
                            <motion.div
                                animate={{ 
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-16 h-16 mx-auto text-cyan-500 mb-4"
                            >
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                                </svg>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-cyan-300 mb-2">No Projects Found</h3>
                            <p className="text-gray-400 text-lg">
                                No projects found in this category. More amazing projects coming soon!
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
    
export default Projects;