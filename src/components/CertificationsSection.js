import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiShield, FiCode } from 'react-icons/fi';

const CertificationsSection = () => {
  // Animation variants (copied from ProjectsSection)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  // Achievements data
  const achievements = [
    {
      title: "Top 10 DevQuest International Hackathon",
      year: "2025",
      description: "Organized by SLIIT"
    },
    {
      title: "2nd Runner-up - HackElite 1.0",
      year: "2024",
      description: "Organized by IEEE WIE Student Branch – University of Moratuwa"
    },
    {
      title: "Top 10 Finalists - AlgoXplore 1.0",
      year: "2024",
      description: "Organized by Hackathon Hub of NSBM Green University"
    },
    {
      title: "Top 10 Finalists - SLIoT",
      year: "2025",
      description: "Organized by CS Engineering, University of Moratuwa, SLT-Mobitel, Institute of Engineers Sri Lanka (IESL)"
    },
    {
      title: "Top 20 - CODE RUSH",
      year: "2024",
      description: "Faculty of IT, University of Moratuwa"
    }
  ];

  // Certifications data
  const certifications = [
    "Python Intermediate from Codecademy",
    "SQL from HackerRank",
    "React Intermediate from Codecademy",
    "Python Programming (open uom)"
  ];



  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements & Participations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="text-5xl opacity-20 absolute -top-4 -right-4">
                  <FiAward className="text-white" />
                </div>
                <div className="text-white z-10">
                  <FiAward className="text-2xl" />
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{item.year}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="text-5xl opacity-20 absolute -top-4 -right-4">
                  <FiBookOpen className="text-white" />
                </div>
                <div className="text-white z-10">
                  <FiBookOpen className="text-2xl" />
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6 space-y-4">
                <span className="text-lg font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert}</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CertificationsSection;
