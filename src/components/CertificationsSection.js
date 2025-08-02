import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiShield, FiCode } from 'react-icons/fi';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "BTEC Cybersecurity Assignment",
      issuer: "EMC Cyber",
      date: "2024",
      description: "Completed comprehensive cybersecurity coursework covering network security, ethical hacking, and security protocols.",
      icon: <FiShield className="text-2xl" />,
      color: "from-red-500 to-pink-500",
      badge: "🛡️"
    },
    {
      title: "Web Development Certification",
      issuer: "Coursera/Udemy",
      date: "2023",
      description: "Comprehensive full-stack web development certification covering modern frameworks and best practices.",
      icon: <FiCode className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      badge: "💻"
    },
    {
      title: "Auth0 Authentication System",
      issuer: "Self-Directed Project",
      date: "2024",
      description: "Successfully implemented and deployed a complete authentication system using Auth0 for multiple projects.",
      icon: <FiBookOpen className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      badge: "🔐"
    }
  ];

  const achievements = [
    {
      title: "University Academic Performance",
      description: "Maintaining excellent academic standing in IT program",
      metric: "Dean's List",
      icon: "🎓"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to various development projects",
      metric: "5+ Repos",
      icon: "🌟"
    },
    {
      title: "Technical Problem Solving",
      description: "Developed innovative solutions for real-world challenges",
      metric: "3+ Projects",
      icon: "💡"
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks",
      metric: "100% Dedication",
      icon: "📚"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My commitment to continuous learning and professional development through 
            certifications, courses, and hands-on project experience.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <div className="text-4xl">{cert.badge}</div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {achievement.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {achievement.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              I believe in continuous improvement and staying up-to-date with the latest 
              technologies and industry best practices.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              <FiAward size={20} />
              View All Credentials
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
