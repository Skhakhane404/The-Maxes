import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'About', path: '/about' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-max-dark/95 backdrop-blur-md border-b border-max-orange/20">
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Slogan */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/maxeslogo-smaller.jpg" 
              alt="THE MAXES" 
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-display text-white leading-tight">
                <span className="text-max-orange">THE</span> MAXES
              </span>
              <span className="text-[10px] text-max-gray/60 italic tracking-wide leading-tight">
                "Don't worry, Be happy"
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative group text-sm uppercase tracking-wider text-white hover:text-max-orange transition-colors duration-300"
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-max-orange to-max-orange-light shadow-[0_0_10px_rgba(232,93,4,0.5)] transition-all duration-300 ease-out ${
                      isActive 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
            
            <a
              href="tel:+27736015342"
              className="flex items-center gap-2 bg-max-orange text-white px-4 py-2 rounded-full hover:bg-max-orange-dark transition-all hover:scale-105 text-sm font-semibold"
            >
              <FaPhone className="text-sm" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative text-sm uppercase tracking-wider py-2 transition-colors ${
                        isActive ? 'text-max-orange' : 'text-white hover:text-max-orange'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute -bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-max-orange to-max-orange-light" />
                      )}
                    </Link>
                  )
                })}
                <a
                  href="tel:+27736015342"
                  className="flex items-center justify-center gap-2 bg-max-orange text-white px-4 py-3 rounded-full font-semibold"
                >
                  <FaPhone />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
