'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    'Cybersecurity Student',
    'CTF Player', 
    'SOC Analyst',
    'Blue Team Member',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/abdulrafay1-7',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdul-rafay-b343592b6/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'TryHackMe',
      href: 'https://tryhackme.com/p/abdulrafay',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 4.5h3v3h-3v-3zm-3 6h3v3h-3v-3zm6 0h3v3h-3v-3zm-3 3h3v3h-3v-3z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abdul Rafay
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">
            I'm a{' '}
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 font-semibold"
            >
              {roles[currentRole]}
            </motion.span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Passionate cybersecurity enthusiast from FAST-NUCES, dedicated to mastering 
            the art of digital defense through hands-on experience in CTF competitions, 
            security research, and real-world threat analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg"
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View My Work
            </motion.a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <a 
              href="#about" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Scroll to about section"
            >
              <ChevronDownIcon className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
