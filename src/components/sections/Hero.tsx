'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Reduced animation complexity for mobile performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simplified Background for mobile performance */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Simple gradient background for mobile */}
      <div className="absolute inset-0 -z-10 md:hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900"></div>

      <div className="container mx-auto px-6 py-20" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Profile Image - Simplified for mobile */}
          <motion.div
            className="mb-6 md:mb-8"
            variants={itemVariants}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                  S
                </div>
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-3 md:mb-4"
            variants={itemVariants}
          >
            👋 Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-4 md:mb-6 text-gradient"
            variants={itemVariants}
          >
            Soham Sandip Satre
          </motion.h1>

          {/* Animated Role - Simplified for mobile */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 h-12 md:h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                'Recent BCS Graduate',
                2000,
                'Passionate Learner',
                2000,
                'Aspiring Developer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={60}
              className="text-primary-600 dark:text-primary-400"
              repeat={Infinity}
              preRenderFirstString={true}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-10 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
            variants={itemVariants}
          >
            A passionate learner starting my tech journey with fresh ideas and eagerness to grow. 
            Recent BCS graduate from SGM College, Karad, ready to bring dedication, creativity, and 
            a strong foundation in programming to create meaningful digital solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-10 md:mb-12 px-4 md:px-0"
            variants={itemVariants}
          >
            <motion.a
              href="#about"
              className="w-full sm:w-auto bg-gradient-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Learn About Me
            </motion.a>
            <motion.a
              href="/Soham_Resume.pdf"
              download="Soham_Sandip_Satre_Resume.pdf"
              className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4 md:space-x-6"
            variants={itemVariants}
          >
            {[
              { icon: FiGithub, href: 'https://github.com/sohamsatre', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/soham-satre', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:sohamsatre0304@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} className="md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
