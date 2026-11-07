import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCar } from 'react-icons/fa'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSpeeding, setIsSpeeding] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    // Start the speeding animation
    setIsSpeeding(true)
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    // Reset animation after scroll completes
    setTimeout(() => {
      setIsSpeeding(false)
    }, 1000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
              type: 'spring',
              stiffness: 300,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 20,
            transition: { duration: 0.3 }
          }}
          onClick={scrollToTop}
          className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-max-orange/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
          
          {/* Main Button */}
          <div className="relative bg-max-dark border-2 border-max-orange rounded-full p-4 hover:bg-max-dark-light transition-all duration-300 shadow-lg shadow-max-orange/20 hover:shadow-max-orange/40 hover:scale-110">
            <motion.div
              animate={isSpeeding ? {
                x: [0, 30, -30, 20, -20, 10, -10, 0],
                y: [0, -20, -40, -60, -80, -100, -120, -140],
                rotate: [0, -5, 5, -3, 3, 0],
                scale: [1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1]
              } : {
                y: [0, -4, 0]
              }}
              transition={isSpeeding ? {
                duration: 0.8,
                ease: "easeOut"
              } : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaCar className="text-2xl text-max-orange group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Label */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-max-gray/50 uppercase tracking-wider whitespace-nowrap">
            {isSpeeding ? '🏎️ Vroom!' : 'Go Up'}
          </div>

          {/* Speed Lines when speeding */}
          {isSpeeding && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 flex gap-1"
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ 
                    x: [0, -20, -40],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="w-1.5 h-0.5 bg-max-orange rounded-full"
                />
              ))}
            </motion.div>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  )
}
