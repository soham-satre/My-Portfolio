'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiHeart, FiZap } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  const stats = [
    { label: 'Education', value: 'BCS Graduate', icon: FiCode },
    { label: 'Certifications', value: '2+', icon: FiZap },
    { label: 'Learning Projects', value: '5+', icon: FiHeart },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
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
              About Me
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Fresh graduate with big dreams and a passion for technology
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Starting My Tech Journey with Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I&apos;m a recent Bachelor of Computer Science graduate from SGM College, Karad, 
                excited to begin my career in the IT sector. While I may be new to the professional 
                world, I bring fresh perspectives, genuine enthusiasm for learning, and a solid 
                foundation in programming concepts.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                My academic journey has equipped me with knowledge in multiple programming languages 
                and frameworks. I believe that every expert was once a beginner, and I&apos;m committed 
                to continuous learning, growth, and contributing meaningful solutions to real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                🎯 <strong>My Goal:</strong> To grow from a passionate learner into a skilled developer 
                who creates impactful digital solutions while never losing the curiosity and eagerness 
                that drive me today.
              </p>
              
              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Technologies I&apos;m Learning & Working With:</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Java', 'Python', 'C/C++', 'JavaScript', 'HTML/CSS', 'MySQL', 
                    'R', 'React', 'Node.js', 'Git', 'VS Code', 'IntelliJ'
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Let&apos;s Connect & Grow Together
                </a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
