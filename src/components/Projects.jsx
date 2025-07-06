import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ParticleBackground from './ParticleBackground';

const Projects = () => {
    const ref = useRef(null);
    const [active, setActive] = useState('all');
    
    // Parallax scroll effect
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
            description: "A responsive admin dashboard with dark theme, real-time data visualization, and user management features.",
            image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "frontend",
            technologies: ["React", "Tailwind CSS", "Chart.js"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A full-stack task management application with drag-and-drop functionality, user authentication, and real-time updates.",
            image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "fullstack",
            technologies: ["React", "Node.js", "MongoDB"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 3,
            title: "Travel Blog",
            description: "A visually rich travel blog with dynamic content, photo galleries, and responsive design for all devices.",
            image: "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "ui",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 4,
            title: "Crypto Tracker",
            description: "A cryptocurrency tracking application with real-time price updates, historical data charts, and portfolio management.",
            image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "frontend",
            technologies: ["React", "Redux", "API Integration"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 5,
            title: "Recipe Finder",
            description: "A mobile-first web application for discovering recipes based on available ingredients, dietary restrictions, and preferences.",
            image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "fullstack",
            technologies: ["React", "Node.js", "Express"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            id: 6,
            title: "Portfolio Template",
            description: "A customizable portfolio template for designers and developers with smooth animations and modern UI.",
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "ui",
            technologies: ["React", "Framer Motion", "Tailwind CSS"],
            demoLink: "#",
            codeLink: "#",
        },
    ];
    
    const filteredProjects = active === 'all' 
        ? projects 
        : projects.filter(project => project.category === active);
    
    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'ui', name: 'UI/UX Design' },
    ];
    
    return (
        <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-950 z-0"></div>
            <ParticleBackground id="projects-particles" />
            
            <motion.div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{ y, opacity }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-blue-950/10 to-transparent opacity-70"></div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">My Projects</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            Here's a showcase of my recent work, ranging from frontend designs to full-stack applications.
                        </p>
                    </motion.div>
                  
                    <motion.div 
                        variants={itemVariants}
                        className="flex justify-center flex-wrap gap-3 mb-12"
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActive(category.id)}
                                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                                    active === category.id 
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                                        : 'bg-blue-900/40 text-gray-300 hover:bg-blue-800/60'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                            >
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
                            className="text-center mt-16 py-12 px-6 bg-blue-900/20 rounded-xl border border-blue-800"
                        >
                            <svg className="w-16 h-16 mx-auto text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                            <h3 className="text-xl font-bold text-blue-300 mb-2">No Projects Found</h3>
                            <p className="text-gray-400">
                                No projects found in this category. More coming soon!
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
    
export default Projects;