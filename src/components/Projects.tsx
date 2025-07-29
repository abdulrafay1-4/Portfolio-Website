'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Projects() {
  const projects = [
    {
      title: 'SOC Automation Platform',
      description: 'A comprehensive Security Operations Center automation platform that integrates with multiple SIEM tools, automates incident response workflows, and provides real-time threat intelligence.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Flask', 'ELK Stack', 'Docker', 'Redis'],
      github: 'https://github.com/abdul-rafay/soc-automation',
      demo: 'https://soc-demo.abdulrafay.dev',
      category: 'Security Operations'
    },
    {
      title: 'CTF Challenge Framework',
      description: 'A modern platform for hosting Capture The Flag competitions with dynamic scoring, real-time leaderboards, and integrated hint systems for educational purposes.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'Docker'],
      github: 'https://github.com/abdul-rafay/ctf-platform',
      demo: 'https://ctf.abdulrafay.dev',
      category: 'Education'
    },
    {
      title: 'Network Security Scanner',
      description: 'An advanced network vulnerability assessment tool that performs comprehensive security scans, generates detailed reports, and provides remediation recommendations.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Nmap', 'SQLite', 'Tkinter', 'Scapy'],
      github: 'https://github.com/abdul-rafay/network-scanner',
      demo: null,
      category: 'Penetration Testing'
    },
    {
      title: 'Digital Forensics Toolkit',
      description: 'A collection of digital forensics tools for incident response teams, including memory analysis, disk imaging, and evidence correlation capabilities.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Volatility', 'Sleuth Kit', 'Yara', 'Pandas'],
      github: 'https://github.com/abdul-rafay/forensics-toolkit',
      demo: null,
      category: 'Digital Forensics'
    },
    {
      title: 'Threat Intelligence Dashboard',
      description: 'Real-time threat intelligence aggregation and visualization platform that collects IOCs from multiple sources and provides actionable insights.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/abdul-rafay/threat-intel',
      demo: 'https://threat-intel.abdulrafay.dev',
      category: 'Threat Intelligence'
    },
    {
      title: 'Secure Chat Application',
      description: 'End-to-end encrypted messaging application with perfect forward secrecy, secure key exchange, and resistance against various cryptographic attacks.',
      image: '/api/placeholder/400/300',
      technologies: ['Rust', 'WebRTC', 'Signal Protocol', 'React', 'WebAssembly'],
      github: 'https://github.com/abdul-rafay/secure-chat',
      demo: 'https://chat.abdulrafay.dev',
      category: 'Cryptography'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my cybersecurity projects that demonstrate my skills 
            in various domains including threat detection, incident response, and security automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abdul-rafay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>View All Projects</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
