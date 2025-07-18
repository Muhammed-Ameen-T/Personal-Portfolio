import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillCard from './SkillCard';

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const skillCategories = [
    {
      name: "Programming Languages",
      description: "Core languages I use to build applications",
      skills: [
        { name: "JavaScript", icon: "/src/assets/js.png" },
        { name: "TypeScript", icon: "/src/assets/typescript.png" },
      ]
    },
    {
      name: "Frontend Development",
      description: "Technologies I use to create beautiful user interfaces",
      skills: [
        { name: "HTML5", icon: "/src/assets/html.png" },
        { name: "CSS3", icon: "/src/assets/css-3.png" },
        { name: "ReactJS", icon: "/src/assets/react.png" },
        { name: "TailwindCSS", icon: "/src/assets/tailwind.png" },
        { name: "Bootstrap", icon: "/src/assets/bootstrap.png" },
        { name: "Next.js", icon: "/src/assets/nextjs.png" },
      ]
    },
    {
      name: "Backend & Database",
      description: "Tools that power the server-side of my applications",
      skills: [
        { name: "Node.js", icon: "/src/assets/node-js.png" },
        { name: "Express.js", icon: "/src/assets/express.png" },
        { name: "MongoDB", icon: "/src/assets/mongoDB.png" },
        { name: "PostgreSQL", icon: "/src/assets/postgres.png" },
        { name: "Redis", icon: "/src/assets/redis.png" },
      ]
    },
    {
      name: "Libraries & Dev Tools",
      description: "Essential utilities that enhance my development workflow",
      skills: [
        { name: "GitHub", icon: "/src/assets/github.png" },
        { name: "Git", icon: "/src/assets/git.png" },
        { name: "Firebase", icon: "/src/assets/firebase.png" },
        { name: "Redux", icon: "/src/assets/redux.png" },
        { name: "Socket.io", icon: "/src/assets/Socket.io.png" },
        { name: "Puppeteer", icon: "/src/assets/puppeteer.png" },
        { name: "Nodemailer", icon: "/src/assets/nm_logo_200x136.png" },
        { name: "JWT", icon: "/src/assets/icons8-jwt-240.png" },
        { name: "Joi", icon: "/src/assets/joi.png" },
        { name: "Cloudinary", icon: "/src/assets/cloudinary.png" },
        { name: "Multer", icon: "/src/assets/multer.png" },
        { name: "Postman", icon: "/src/assets/postman-icon.png" },
      ]
    },
    {
      name: "Cloud & DevOps",
      description: "Platforms I use to deploy and scale applications",
      skills: [
        { name: "AWS", icon: "/src/assets/aws.png" },
        { name: "Google Cloud", icon: "/src/assets/google-cloud.png" },
        { name: "Vercel", icon: "/src/assets/vercel.png" },
        { name: "Render", icon: "/src/assets/render.png" },
        { name: "Docker", icon: "/src/assets/docker.png" },
        { name: "Kubernetes", icon: "/src/assets/kubernetes.png" },
      ]
    },
    {
      name: "Design & Content",
      description: "Creative tools that help me design and visualize",
      skills: [
        { name: "Figma", icon: "/src/assets/figma.png" },
        { name: "Adobe Photoshop", icon: "/src/assets/photoshop.png" },
        { name: "Adobe Illustrator", icon: "/src/assets/illustrator.png" },
        { name: "Microsoft Office", icon: "/src/assets/office.png" },
      ]
    },
    {
      name: "Payment Gateways",
      description: "Solutions I implement for secure online transactions",
      skills: [
        { name: "Stripe", icon: "/src/assets/stripe.png" },
        { name: "PayPal", icon: "/src/assets/paypal.png" },
        { name: "Razorpay", icon: "/src/assets/razorpay.png" },
      ]
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              My Skills
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A comprehensive collection of technologies and tools I've mastered throughout my journey as a developer.
            </p>
          </motion.div>

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-20 last:mb-0"
            >
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-cyan-300 relative inline-block">
                  <span className="relative z-10">{category.name}</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 -z-0 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex} 
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;