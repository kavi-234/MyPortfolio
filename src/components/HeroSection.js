import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950 pt-16">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Modern Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative group"
          >
            <div className="relative w-48 h-48 mx-auto">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl animate-spin-slow"></div>
              <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-3xl"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-2xl overflow-hidden">
                <img 
                  src="propic.jpg" 
                  alt="Kaveesha Prabuddhi" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              

            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent mb-6 tracking-tight">
              Kaveesha Prabuddhi
            </h1>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                Full-Stack Developer
              </p>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                IT & Management Undergraduate @ University of Moratuwa • Building innovative solutions with modern technologies
              </p>
            </div>
          </motion.div>

          {/* Modern Description with Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about building innovative solutions that bridge technology and real-world impact. 
              Always eager to explore cutting-edge technologies and contribute to meaningful projects.
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {['React', 'Node.js', 'MongoDB', 'Python', 'Laravel', 'AWS', 'Arduino'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Modern CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                y: -2 
              }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToAbout}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Explore My Work</span>
              <FiArrowDown className="relative z-10 group-hover:animate-bounce" size={20} />
            </motion.button>
            
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              href="/Kaveesha_Prabuddhi_SEIntern.pdf"
              download
              className="group px-10 py-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-800 dark:text-white font-bold text-lg rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 flex items-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 dark:from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FiDownload className="relative z-10 group-hover:rotate-12 transition-transform duration-300" size={20} />
              <span className="relative z-10">Download CV</span>
            </motion.a>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 hidden lg:block">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
            />
          </div>
          <div className="absolute top-40 right-10 hidden lg:block">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
