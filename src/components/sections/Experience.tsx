'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      period: '2021 - 2022',
      description: 'Developed responsive web applications and collaborated with design teams to create engaging user experiences using modern frontend technologies.',
      achievements: [
        'Built 15+ client websites',
        'Improved mobile performance by 60%',
        'Collaborated with UX/UI team'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Started career developing web applications, learning best practices, and contributing to various projects in an agile environment.',
      achievements: [
        'Contributed to 10+ projects',
        'Learned modern web technologies',
        'Participated in code reviews'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Work Experience
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My professional journey and the experiences that shaped my skills
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center relative z-10">
                    <FiBriefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-dark-800 p-6 rounded-xl shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                        <FiCalendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
