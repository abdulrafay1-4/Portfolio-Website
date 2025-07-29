'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, TrophyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function About() {
  const skills = [
    { name: 'Reverse Engineering', level: 85 },
    { name: 'Digital Forensics', level: 80 },
    { name: 'Linux Administration', level: 70 },
    { name: 'Network Security', level: 65 },
    { name: 'Penetration Testing', level: 40 },
    { name: 'Incident Response', level: 55 },
    { name: 'Python Programming', level: 90 },
    { name: 'SIEM Analysis', level: 85 }
  ]

  const stats = [
    { icon: AcademicCapIcon, label: 'Years of Study', value: '3+' },
    { icon: TrophyIcon, label: 'CTF Competitions', value: '30+' },
    { icon: ShieldCheckIcon, label: 'Security Projects', value: '5+' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Cybersecurity Student
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm currently pursuing my degree in Computer Science at FAST-NUCES, 
                with a specialized focus on cybersecurity. My journey began with a 
                fascination for understanding how systems work and, more importantly, 
                how they can be protected.
              </p>
              <p>
                Through extensive participation in Capture The Flag (CTF) competitions, 
                I've honed my skills in various cybersecurity domains including reverse 
                engineering, digital forensics, web application security, and cryptography.
              </p>
              <p>
                My goal is to contribute to the cybersecurity community by developing 
                innovative security solutions and helping organizations build robust 
                defense mechanisms against evolving threats.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-blue-900/30 p-4 rounded-lg mb-3 inline-block">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
