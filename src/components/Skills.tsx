'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  CodeBracketIcon, 
  CommandLineIcon,
  BugAntIcon,
  EyeIcon,
  ServerIcon 
} from '@heroicons/react/24/outline'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Security Analysis',
      icon: ShieldCheckIcon,
      color: 'text-blue-600',
      skills: [
        'Vulnerability Assessment',
        'Threat Intelligence',
        'Risk Analysis',
        'Security Auditing',
        'Compliance Testing'
      ]
    },
    {
      title: 'Development',
      icon: CodeBracketIcon,
      color: 'text-green-600',
      skills: [
        'Python Programming',
        'JavaScript/TypeScript',
        'Bash Scripting',
        'C/C++',
        'Go'
      ]
    },
    {
      title: 'System Administration',
      icon: CommandLineIcon,
      color: 'text-purple-600',
      skills: [
        'Linux Administration',
        'Network Configuration',
        'Container Security',
        'Cloud Security (AWS)',
        'Infrastructure as Code'
      ]
    },
    {
      title: 'Penetration Testing',
      icon: BugAntIcon,
      color: 'text-red-600',
      skills: [
        'Web Application Testing',
        'Network Penetration',
        'Social Engineering',
        'Physical Security',
        'Wireless Security'
      ]
    },
    {
      title: 'Digital Forensics',
      icon: EyeIcon,
      color: 'text-orange-600',
      skills: [
        'Memory Analysis',
        'Disk Imaging',
        'Network Forensics',
        'Mobile Forensics',
        'Malware Analysis'
      ]
    },
    {
      title: 'Infrastructure',
      icon: ServerIcon,
      color: 'text-indigo-600',
      skills: [
        'SIEM Configuration',
        'IDS/IPS Management',
        'Firewall Administration',
        'Log Analysis',
        'Incident Response'
      ]
    }
  ]

  const tools = [
    { name: 'Wireshark', category: 'Network Analysis' },
    { name: 'Metasploit', category: 'Penetration Testing' },
    { name: 'Burp Suite', category: 'Web Security' },
    { name: 'Volatility', category: 'Memory Analysis' },
    { name: 'Ghidra', category: 'Reverse Engineering' },
    { name: 'Nmap', category: 'Network Scanning' },
    { name: 'John the Ripper', category: 'Password Cracking' },
    { name: 'Splunk', category: 'SIEM' },
    { name: 'Yara', category: 'Malware Detection' },
    { name: 'Autopsy', category: 'Digital Forensics' },
    { name: 'Hashcat', category: 'Password Recovery' },
    { name: 'Snort', category: 'Intrusion Detection' }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my cybersecurity expertise across various domains, 
            tools, and technologies that I use in my security research and CTF competitions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-white dark:bg-gray-900 ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {tool.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {tool.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
