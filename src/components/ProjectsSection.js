import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiSmartphone, FiDatabase } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Farm to Market Software",
      description: "A comprehensive farm-to-market platform connecting farmers, merchants, and transporters directly. Features real-time chat, bidding system, and role-based access control using Auth0.",
      longDescription: "Built with modern web technologies to streamline agricultural supply chains. Includes real-time messaging, price negotiations, and secure authentication.",
      tech: ["React", "Node.js", "MongoDB", "Express", "WebSockets", "Auth0"],
      link: "https://github.com/kavi-234/harvest-software",
      github: "https://github.com/kavi-234/harvest-software",
      icon: <FiCode className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      image: "🌾"
    },
    {
      title: "E-Commerce Platform",
      description: "Developed a full stack ecommerce application for botique shop",
      longDescription:"Designed to provide shopping experience for customers in a boutique setting.",
      tech: ["Laravel","Xampp","MySql","CSS","JavaScript","HTML"],
      link: "https://github.com/kavi-234/E-commerce_Platform",
      github: "https://github.com/kavi-234/E-commerce_Platform",
      icon: <FiSmartphone className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
  image: <img src="/Ecommerce.png" alt="E-Commerce" className="w-16 h-16 object-contain mx-auto" />
    },
    {
      title: "Polly Pipe Database System",
      description: "A complete database system and user interface for an aquarium installation company, featuring ER modeling, normalization, and comprehensive UI wireframes.",
      longDescription: "Comprehensive database design project including entity-relationship modeling, database normalization, and user interface design for business management.",
      tech: ["MySQL", "SQL Triggers", "Stored Procedures", "Database Design"],
      link: "#",
      github: "#",
      icon: <FiDatabase className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      image: "🐠"
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            database design, and innovative problem-solving.
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
              className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-20 absolute -top-4 -right-4">
                  {project.image}
                </div>
                <div className="text-white z-10">
                  {project.icon}
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
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
