import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiShield, FiGlobe } from 'react-icons/fi';

const AboutSection = () => {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "Java", "Python", "SQL", "HTML/CSS"],
      icon: <FiCode className="text-2xl" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      icon: <FiGlobe className="text-2xl" />,
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Laravel", "MongoDB", "MySQL"],
      icon: <FiDatabase className="text-2xl" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Tools & Security",
      items: ["Git", "Auth0", "WebSockets", "API Development"],
      icon: <FiShield className="text-2xl" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Passionate Developer & Tech Enthusiast
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am an undergraduate at the Faculty of Information Technology, University of Moratuwa, 
              passionate about full-stack development , Artifitial Intelegance and cybersecurity. I enjoy building impactful 
              software that solves real-world problems, and I am always eager to explore new technologies.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in technology has led me to work on diverse projects, from farm-to-market 
              platforms to FinTech solutions, always with a focus on creating user-centered experiences 
              and robust, scalable systems.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Education</h4>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Bachelor of Information Technology & Management</strong><br />
                University of Moratuwa, Sri Lanka<br />
                <span className="text-sm text-gray-500 dark:text-gray-400">Current Undergraduate</span>
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {skill.icon}
                </div>
                
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {skill.category}
                </h4>
                
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "3+", label: "Projects Completed" },
            { number: "5+", label: "Technologies" },
            { number: "2+", label: "Years Learning" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
