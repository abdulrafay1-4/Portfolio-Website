'use client'

import { motion } from 'framer-motion'
import { TrophyIcon, FlagIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function CTFAchievements() {
  const achievements = [
    {
      event: 'AirTech CTF 2025',
      position: '1st',
      category: 'General',
      points: 8500,
      description: 'Comprehensive CTF covering multiple cybersecurity domains',
      date: '2025',
      type: 'Team'
    }
  ]

  const skills = [
    { name: 'Reverse Engineering', competitions: 20, avgScore: 5 },
    { name: 'Web Exploitation', competitions: 30, avgScore: 80 },
    { name: 'Cryptography', competitions: 20, avgScore: 75 },
    { name: 'Digital Forensics', competitions: 22, avgScore: 90 },
    { name: 'Binary Exploitation', competitions: 18, avgScore: 70 },
    { name: 'Network Security', competitions: 15, avgScore: 85 }
  ]

  const stats = [
    { icon: TrophyIcon, label: 'Competitions Won', value: '1', color: 'text-yellow-500' },
    { icon: FlagIcon, label: 'Total Flags Captured', value: '200+', color: 'text-green-500' },
    { icon: ChartBarIcon, label: 'Rank in Pakistan', value: 'Top 10', color: 'text-blue-500' }
  ]

  return (
    <section id="ctf" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            CTF Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in Capture The Flag competitions has shaped my practical cybersecurity skills 
            and competitive spirit in the field of information security.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-900 mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Recent Competitions
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.event}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                          {achievement.category}
                        </span>
                        <span>{achievement.type}</span>
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {achievement.position}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.points} pts
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              CTF Skills Breakdown
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.competitions} competitions
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Average Score
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.avgScore}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.avgScore}%` }}
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

        {/* CTF Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Find me on CTF platforms
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://tryhackme.com/p/abdulrafay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              TryHackMe
            </a>
            <a
              href="https://picoctf.org/users/abdulrafay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              PicoCTF
            </a>
            <a
              href="https://ctftime.org/user/123456"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              CTFtime
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
