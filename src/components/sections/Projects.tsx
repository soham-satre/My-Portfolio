'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  learnings?: string[];
}

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  const projects = [
    {
      title: 'Password Generator & Encryption',
      description: 'A Java Swing desktop application that generates secure passwords and provides encryption/decryption functionality. This project helped me understand GUI development and security concepts.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Java Swing', 'AWT', 'Security Algorithms', 'OOP'],
      githubUrl: 'https://github.com/sohamsatre/password-generator',
      liveUrl: null,
      featured: true,
      learnings: [
        'GUI development with Java Swing',
        'Implementing security algorithms',
        'User experience design',
        'Error handling and validation'
      ]
    },
    {
      title: 'Online Grocery Shop',
      description: 'An ASP.NET web application for online grocery shopping with user authentication, product catalog, shopping cart, and order management. My first full-stack web application.',
      image: '/api/placeholder/600/400',
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'HTML/CSS', 'JavaScript'],
      githubUrl: 'https://github.com/sohamsatre/grocery-shop',
      liveUrl: null,
      featured: true,
      learnings: [
        'Web development fundamentals',
        'Database design and management',
        'User authentication systems',
        'Full-stack application architecture'
      ]
    },
    {
      title: 'College Management System',
      description: 'A comprehensive system for managing student records, courses, and academic information. Built during my final year as a learning project.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'MySQL', 'JDBC', 'Console Application'],
      githubUrl: 'https://github.com/sohamsatre/college-management',
      liveUrl: null,
      featured: false,
      learnings: [
        'Database connectivity with JDBC',
        'Complex data relationships',
        'System design principles',
        'Data validation and integrity'
      ]
    },
    {
      title: 'Simple Calculator App',
      description: 'One of my first programming projects - a calculator application that performs basic arithmetic operations. Simple but meaningful as my starting point.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Tkinter', 'Basic Algorithms'],
      githubUrl: 'https://github.com/sohamsatre/calculator-app',
      liveUrl: null,
      featured: false,
      learnings: [
        'Programming fundamentals',
        'Basic GUI development',
        'Algorithm implementation',
        'Code organization'
      ]
    },
    {
      title: 'Data Analysis Project',
      description: 'Statistical analysis of student performance data using R programming. Gained insights into data visualization and statistical computing.',
      image: '/api/placeholder/600/400',
      technologies: ['R', 'Data Analysis', 'Statistics', 'Data Visualization'],
      githubUrl: 'https://github.com/sohamsatre/data-analysis-r',
      liveUrl: null,
      featured: false,
      learnings: [
        'Statistical programming with R',
        'Data cleaning and preprocessing',
        'Creating meaningful visualizations',
        'Drawing insights from data'
      ]
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 md:mb-6 text-gradient"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 md:px-0"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              My learning journey through projects - each one taught me something valuable
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl shadow-xl group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* What I Learned */}
                  {project.learnings && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">What I Learned:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                        {project.learnings.map((learning, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <FiGithub />
                      <span>View Code</span>
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Other Notable Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* What I Learned */}
                    {project.learnings && (
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                        <h5 className="font-medium text-green-800 dark:text-green-300 text-sm mb-2">Key Learning:</h5>
                        <p className="text-xs text-green-700 dark:text-green-400">
                          {project.learnings[0]}
                        </p>
                      </div>
                    )}

                    {/* Project Links */}
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <FiGithub size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          <FiExternalLink size={18} />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Projects CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.a
              href="https://github.com/sohamsatre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 rounded-lg font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <FiCode />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
