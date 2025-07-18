import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    emailjs.init('yf6tNTXif_DwJ32k-');
  }, []);

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    emailjs
      .send(
        'service_8xj0gc3',
        'template_i29d6kv',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )
      .then(
        () => {
          setSubmitting(false);
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        },
        (error) => {
          setSubmitting(false);
          console.error('EmailJS error:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-16 rounded-full"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <motion.div 
                className="bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(0, 255, 255, 0.2)"
                }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-3 rounded-lg border border-cyan-400/30">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a href="mailto:mhdameent2006@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium">
                        mhdameent2006@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg border border-purple-400/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-purple-300 font-medium">Kochi, India</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(0, 255, 255, 0.2)"
                }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { href: "https://www.linkedin.com/in/muhammed-ameen-t/", icon: "M100.28 448H7.4V154.72H100.28zm-46.44-326.8C24.5 121.2 0 96.6 0 63.56S24.5 6 54.28 6s54.28 24.6 54.28 57.56-24.5 57.64-54.28 57.64zM447.8 448h-92.88V315.52c0-31.64-.64-72.24-44-72.24-43.96 0-50.7 34.4-50.7 69.92V448H166.28V154.72H255v40.2h1.16c12.36-23.4 42.48-48 87.32-48 93.4 0 103.24 61.4 103.24 141.24z", viewBox: "0 0 448 512", color: "from-blue-400 to-blue-600" },
                    { href: "https://github.com/Muhammed-Ameen-T", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", viewBox: "0 0 24 24", color: "from-gray-400 to-gray-600" },
                    { href: "https://instagram.com/ameen.t___", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", viewBox: "0 0 24 24", color: "from-pink-400 to-purple-600" },
                    { href: "https://x.com/muhammed_ameent", icon: "M1010 4H829L490 469 191 4H4L420 618 4 1223H183L536 711l312 512h186L621 605 1010 4Z", viewBox: "0 0 1200 1227", color: "from-blue-400 to-cyan-600" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`interactive bg-gradient-to-r ${social.color} p-4 rounded-xl text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox={social.viewBox}>
                        <path d={social.icon}/>
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <motion.div 
                className="bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500"
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 25px 50px -10px rgba(0, 255, 255, 0.2)"
                }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
                  Send Me a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 text-green-300 p-6 rounded-xl mb-6 text-center"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg font-semibold">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`interactive w-full px-4 py-3 bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500 transition-all duration-300 ${
                            errors.name ? 'border-red-500 focus:ring-red-400' : 'border-slate-600 hover:border-cyan-400/50'
                          }`}
                          placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                      </motion.div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`interactive w-full px-4 py-3 bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500 transition-all duration-300 ${
                            errors.email ? 'border-red-500 focus:ring-red-400' : 'border-slate-600 hover:border-cyan-400/50'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`interactive w-full px-4 py-3 bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500 transition-all duration-300 ${
                          errors.subject ? 'border-red-500 focus:ring-red-400' : 'border-slate-600 hover:border-cyan-400/50'
                        }`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && <p className="text-red-400 text-sm mt-2">{errors.subject}</p>}
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`interactive w-full px-4 py-3 bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500 resize-none transition-all duration-300 ${
                          errors.message ? 'border-red-500 focus:ring-red-400' : 'border-slate-600 hover:border-cyan-400/50'
                        }`}
                        placeholder="Tell me about your project or just say hello!"
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                    </motion.div>

                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className={`interactive w-full py-4 rounded-xl text-white font-semibold text-lg relative overflow-hidden transition-all duration-300 ${
                        submitting 
                          ? 'bg-slate-700 cursor-wait' 
                          : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400'
                      }`}
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Sending Message...
                        </span>
                      ) : (
                        <span>Send Message</span>
                      )}
                      
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;