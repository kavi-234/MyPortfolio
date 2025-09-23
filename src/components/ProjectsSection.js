import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiSmartphone, FiDatabase } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Machinery Sales and Inventory Management System",
      description: "Web-based platform for machinery sales and inventory management for Paam Enterprises, Sri Lanka.",
      longDescription: "Features inventory management, product listings, customer interface for buying/purchasing machinery, and admin tools for managing orders, sales, and inquiries.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "AWS"],
      link: "#",
      github: "#",
      icon: <FiCode className="text-2xl" />,
      color: "from-yellow-500 to-orange-500",
      image: "🏭"
    },
    {
      title: "Farm-to-Market (Harvest Bidding & Transport Management System)",
      description: "Full-stack platform for farmers and merchants to manage harvest bidding and transport.",
      longDescription: "Real-time bidding using Socket.io, integrated PayHere for secure payments, and geolocation-enabled transport coordination.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "PayHere", "Socket.io", "Geolocation API"],
      link: "#",
      github: "#",
      icon: <FiSmartphone className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      image: <img src="/Farm_to_Market.png" alt="Farm-to-Market" className="w-16 h-16 object-contain mx-auto" />
    },
    {
      title: "Melody Mart – Online Musical Instrument Store",
      description: "Web-based platform for buying and selling musical instruments.",
      longDescription: "Includes product browsing, secure online payments, order tracking, and real-time notifications.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Audio", "PayHere", "Socket.io"],
      link: "#",
      github: "#",
      icon: <FiDatabase className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      image: <img src="/MelodyMart.png" alt="Melody Mart" className="w-16 h-16 object-contain mx-auto" />
    },
    {
      title: "E-Commerce Platform",
      description: "Web-based Ecommerce platform developed with Laravel.",
      longDescription: "Boutique shop platform with user authentication, product management, and order processing.",
      tech: ["Laravel", "XAMPP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#",
      icon: <FiSmartphone className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      image: <img src="/Ecommerce.png" alt="E-Commerce" className="w-16 h-16 object-contain mx-auto" />
    },
    {
      title: "Water Intake Tracker",
      description: "Reminds users to stay hydrated by tracking daily water intake goals and progress.",
      longDescription: "Simple React app using local storage to save user progress and goals.",
      tech: ["React", "JavaScript", "CSS", "LocalStorage"],
      link: "#",
      github: "#",
      icon: <FiCode className="text-2xl" />,
      color: "from-cyan-500 to-blue-500",
      image: "💧"
    },
    {
      title: "NovaNex (Automated Weighing and Packing System)",
      description: "Automated system for weighing, dispensing, and packing goods using sensors and stepper motors.",
      longDescription: "Designed for real-time solid agricultural product handling. Finalist in SLIOT Academic Team Project.",
      tech: ["Arduino", "Nema23", "Load Cell Sensor", "Servo Motors", "C++"],
      link: "#",
      github: "#",
      icon: <FiDatabase className="text-2xl" />,
      color: "from-gray-500 to-gray-700",
      image: <img src="/NovaNex.png" alt="NovaNex" className="w-16 h-16 object-contain mx-auto" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-cyan-950/30 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions, from full-stack web applications to IoT systems. 
            Each project represents a unique challenge solved with modern technologies and creative problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 transition-all duration-500"
            >
              {/* Project Header */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Image or Gradient */}
                {typeof project.image === 'string' ? (
                  <div className={`h-full bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                    <div className="text-8xl text-white/80">
                      {project.image}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    {React.cloneElement(project.image, {
                      className: "w-full h-full object-cover"
                    })}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  </div>
                )}
                
                {/* Tech Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                  <div className="text-white text-xl">
                    {project.icon}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/30"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    <FiExternalLink size={16} />
                    View Live
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded-xl font-medium text-sm flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300"
                  >
                    <FiGithub size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/kavi-234"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiGithub size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;