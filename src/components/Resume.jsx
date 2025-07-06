import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const experience = [
    {
      title: "Senior Front-End Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead the development of responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with UX designers to implement pixel-perfect designs and improve user experience.",
    },
    {
      title: "Front-End Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client websites using JavaScript, HTML, and CSS. Implemented responsive designs and optimized performance for better user experience.",
    },
    {
      title: "Web Developer Intern",
      company: "Creative Labs",
      period: "2019 - 2020",
      description: "Assisted in the development of web applications. Gained experience with HTML, CSS, JavaScript, and basic backend technologies.",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      period: "2018 - 2020",
      description: "Specialized in Web Development and User Interface Design. Graduated with honors.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2014 - 2018",
      description: "Focused on Software Engineering and Database Management. Participated in various hackathons and coding competitions.",
    },
  ];

  const certifications = [
    {
      name: "React Developer Certification",
      issuer: "React Training",
      date: "2021",
      description: "Advanced course covering React hooks, context API, and state management.",
    },
    {
      name: "UI/UX Design Fundamentals",
      issuer: "Design Academy",
      date: "2020",
      description: "Comprehensive training in user interface design principles and user experience best practices.",
    },
    {
      name: "Front-End Web Development",
      issuer: "Web Dev Institute",
      date: "2019",
      description: "Intensive course on HTML5, CSS3, JavaScript, and responsive design techniques.",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 75 },
    { name: "Git", level: 80 },
  ];

  return (
    <section id="resume" ref={ref} className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Resume</h2>
            <div className="w-24 h-1 mx-auto bg-blue-500 mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My professional journey, education, and skills that have shaped my career in web development and design.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 mx-2 rounded-full transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 mx-2 rounded-full transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 mx-2 rounded-full transition-all duration-300 ${
                  activeTab === 'certifications'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                Certifications
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-3 mx-2 rounded-full transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                Skills
              </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              {activeTab === 'experience' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-blue-500"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-blue-500 shadow-md shadow-blue-500/50"></div>
                      <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{job.company}</span>
                        <span className="text-blue-500 text-sm px-3 py-1 rounded-full bg-blue-900/30">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-gray-400">{job.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-blue-500"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-blue-500 shadow-md shadow-blue-500/50"></div>
                      <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{edu.institution}</span>
                        <span className="text-blue-500 text-sm px-3 py-1 rounded-full bg-blue-900/30">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-400">{edu.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'certifications' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-blue-500"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-blue-500 shadow-md shadow-blue-500/50"></div>
                      <h3 className="text-xl font-bold text-blue-400">{cert.name}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{cert.issuer}</span>
                        <span className="text-blue-500 text-sm px-3 py-1 rounded-full bg-blue-900/30">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-gray-400">{cert.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                            className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full shadow-md shadow-blue-500/20"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Full Resume
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;