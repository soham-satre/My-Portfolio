'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiLayers, 
  FiSmartphone, 
  FiGitBranch 
} from 'react-icons/fi'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      skills: [
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'C/C++', level: 70 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 85 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: FiLayers,
      skills: [
        { name: 'React (Basic)', level: 65 },
        { name: 'Node.js (Basic)', level: 60 },
        { name: 'ASP.NET', level: 70 },
        { name: 'Java Swing', level: 75 },
        { name: 'Bootstrap', level: 70 },
      ]
    },
    {
      title: 'Database & Analytics',
      icon: FiDatabase,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'R Programming', level: 65 },
        { name: 'Database Design', level: 75 },
        { name: 'SQL Queries', level: 80 },
        { name: 'Data Analysis', level: 60 },
      ]
    },
    {
      title: 'Development Tools',
      icon: FiGitBranch,
      skills: [
        { name: 'Git', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Visual Studio', level: 80 },
        { name: 'Eclipse', level: 75 },
        { name: 'IntelliJ IDEA', level: 75 },
      ]
    },
    {
      title: 'Core Concepts',
      icon: FiServer,
      skills: [
        { name: 'Object-Oriented Programming', level: 80 },
        { name: 'Data Structures', level: 75 },
        { name: 'Algorithms', level: 70 },
        { name: 'Software Engineering', level: 65 },
        { name: 'Problem Solving', level: 85 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: FiSmartphone,
      skills: [
        { name: 'Learning Agility', level: 95 },
        { name: 'Team Collaboration', level: 80 },
        { name: 'Communication', level: 75 },
        { name: 'Adaptability', level: 90 },
        { name: 'Time Management', level: 80 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-12 md:py-20 bg-white dark:bg-dark-900">
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
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 md:px-0"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Building a strong foundation in technology with enthusiasm to learn and grow
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gray-50 dark:bg-dark-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1 md:mb-2">
                        <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 md:h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-purple-600 h-1.5 md:h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.3 + index * 0.05 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Every day is a learning opportunity. Growing my skills with dedication and curiosity.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Currently Learning: Advanced React', 'Exploring: Full Stack Development', 'Goal: Becoming a Skilled Developer'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
