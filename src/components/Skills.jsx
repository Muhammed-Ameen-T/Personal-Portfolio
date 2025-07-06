import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillCard from './SkillCard';
import ParticleBackground from './ParticleBackground';

// Import your skill images (using the same imports as the original file)
import javascriptIcon from '../assets/js.png';
import typescriptIcon from '../assets/typescript.png';
import html5Icon from '../assets/html.png';
import css3Icon from '../assets/css-3.png';
import reactIcon from '../assets/react.png';
import tailwindIcon from '../assets/tailwind.png';
import bootstrapIcon from '../assets/bootstrap.png';
import nextjsIcon from '../assets/nextjs.png';
import nodejsIcon from '../assets/node-js.png';
import expressIcon from '../assets/express.png';
import mongodbIcon from '../assets/mongoDB.png';
import postgresqlIcon from '../assets/postgres.png';
import redisIcon from '../assets/redis.png';
import postmanIcon from '../assets/postman-icon.png';
import githubIcon from '../assets/github.png';
import gitIcon from '../assets/git.png';
import firebaseIcon from '../assets/firebase.png';
import reduxIcon from '../assets/redux.png';
import socketioIcon from '../assets/Socket.io.png';
import puppeteerIcon from '../assets/puppeteer.png';
import nodemailerIcon from '../assets/nm_logo_200x136.png';
import jwtIcon from '../assets/icons8-jwt-240.png';
import joiIcon from '../assets/joi.png';
import cloudinaryIcon from '../assets/cloudinary.png';
import multerIcon from '../assets/multer.png';
import awsIcon from '../assets/aws.png';
import gcpIcon from '../assets/google-cloud.png';
import vercelIcon from '../assets/vercel.png';
import renderIcon from '../assets/render.png';
import figmaIcon from '../assets/figma.png';
import photoshopIcon from '../assets/photoshop.png';
import illustratorIcon from '../assets/illustrator.png';
import officeIcon from '../assets/office.png';
import stripeIcon from '../assets/stripe.png';
import paypalIcon from '../assets/paypal.png';
import dockerIcon from '../assets/docker.png';
import kubernetesIcon from '../assets/kubernetes.png';
import razorpayIcon from '../assets/razorpay.png';

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const skillCategories = [
    {
      name: "Programming Languages",
      description: "Core languages I use to build applications",
      skills: [
        { name: "JavaScript", icon: javascriptIcon },
        { name: "TypeScript", icon: typescriptIcon },
      ]
    },
    {
      name: "Frontend Development",
      description: "Technologies I use to create beautiful user interfaces",
      skills: [
        { name: "HTML5", icon: html5Icon },
        { name: "CSS3", icon: css3Icon },
        { name: "ReactJS", icon: reactIcon },
        { name: "TailwindCSS", icon: tailwindIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "Next.js", icon: nextjsIcon },
      ]
    },
    {
      name: "Backend & Database",
      description: "Tools that power the server-side of my applications",
      skills: [
        { name: "Node.js", icon: nodejsIcon },
        { name: "Express.js", icon: expressIcon },
        { name: "MongoDB", icon: mongodbIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "Redis", icon: redisIcon },
      ]
    },
    {
      name: "Libraries & Dev Tools",
      description: "Essential utilities that enhance my development workflow",
      skills: [
        { name: "GitHub", icon: githubIcon },
        { name: "Git", icon: gitIcon },
        { name: "Firebase", icon: firebaseIcon },
        { name: "Redux", icon: reduxIcon },
        { name: "Socket.io", icon: socketioIcon },
        { name: "Puppeteer", icon: puppeteerIcon },
        { name: "Nodemailer", icon: nodemailerIcon },
        { name: "JWT", icon: jwtIcon },
        { name: "Joi", icon: joiIcon },
        { name: "Cloudinary", icon: cloudinaryIcon },
        { name: "Multer", icon: multerIcon },
        { name: "Postman", icon: postmanIcon },
      ]
    },
    {
      name: "Cloud & DevOps",
      description: "Platforms I use to deploy and scale applications",
      skills: [
        { name: "AWS", icon: awsIcon },
        { name: "Google Cloud", icon: gcpIcon },
        { name: "Vercel", icon: vercelIcon },
        { name: "Render", icon: renderIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "Kubernetes", icon: kubernetesIcon },
      ]
    },
    {
      name: "Design & Content",
      description: "Creative tools that help me design and visualize",
      skills: [
        { name: "Figma", icon: figmaIcon },
        { name: "Adobe Photoshop", icon: photoshopIcon },
        { name: "Adobe Illustrator", icon: illustratorIcon },
        { name: "Microsoft Office", icon: officeIcon },
      ]
    },
    {
      name: "Payment Gateways",
      description: "Solutions I implement for secure online transactions",
      skills: [
        { name: "Stripe", icon: stripeIcon },
        { name: "PayPal", icon: paypalIcon },
        { name: "Razorpay", icon: razorpayIcon },
      ]
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
      <ParticleBackground id="skills-particles" />
      
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">My Skills</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
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
                <h3 className="text-2xl font-bold mb-3 inline-flex items-center justify-center text-blue-300 relative">
                  <span className="relative z-10">{category.name}</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-3 bg-blue-500/20 -z-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
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