'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                  S
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-l-4 border-primary-500"
            variants={itemVariants}
          >
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic">
              &ldquo;Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown.&rdquo; - Robin Sharma
            </p>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
            variants={itemVariants}
          >
            👋 Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-display mb-6 text-gradient"
            variants={itemVariants}
          >
            Soham Sandip Satre
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            className="text-2xl md:text-3xl font-semibold mb-8 h-16 flex items-center justify-center"
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
              speed={50}
              className="text-primary-600 dark:text-primary-400"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A passionate learner starting my tech journey with fresh ideas and eagerness to grow. 
            Recent BCS graduate from SGM College, Karad, ready to bring dedication, creativity, and 
            a strong foundation in programming to create meaningful digital solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#about"
              className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ y: -2 }}
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
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
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
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
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
