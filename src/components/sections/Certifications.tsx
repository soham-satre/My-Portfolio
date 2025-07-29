'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi'

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const certifications = [
    {
      title: 'Full Stack Java Developer',
      issuer: 'Symbiosis',
      date: '2024',
      description: 'Comprehensive certification covering Java development, Spring Framework, database management, and full-stack web application development.',
      skills: ['Java', 'Spring Framework', 'Database Design', 'Web Development', 'REST APIs'],
      credentialUrl: '#',
      logo: '/api/placeholder/80/80',
      featured: true,
    },
    {
      title: 'Python Fundamentals',
      issuer: 'Great Learning',
      date: '2024',
      description: 'Foundation certification in Python programming covering core concepts, data structures, algorithms, and practical applications.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Programming Logic', 'Problem Solving'],
      credentialUrl: '#',
      logo: '/api/placeholder/80/80',
      featured: true,
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="max-w-6xl mx-auto"
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
              Certifications
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Validating my learning journey with recognized certifications and achievements
            </motion.p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                {/* Certificate Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start space-x-4">
                    {/* Certificate Icon/Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                        <FiAward className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    
                    {/* Certificate Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-medium">{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <FiCalendar className="w-4 h-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Action */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="font-medium">Completed</span>
                    </div>
                    
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                    >
                      <FiExternalLink size={16} />
                      <span className="text-sm font-medium">View Certificate</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Goals */}
          <motion.div
            className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              These certifications represent my commitment to continuous learning and professional development. 
              I&apos;m always looking for new opportunities to expand my knowledge and stay current with industry trends.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FiAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Next Goal</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AWS Cloud Practitioner</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FiAward className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Exploring</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">React Developer Path</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FiAward className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interest</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Data Science Fundamentals</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
