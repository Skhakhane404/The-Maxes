import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background with orange glow */}
      <div className="absolute inset-0 bg-max-dark">
        <div className="orange-glow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      </div>

      <div className="relative z-10 container-custom mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1]"
            >
              YOUR CAR
              <br />
              <span className="gradient-text">RESTORED</span>
              <br />
              TO PERFECTION
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg text-max-gray mt-4 max-w-lg leading-relaxed"
            >
              Expert panel beating, spray painting, and collision repair in Welkom.
              Free estimates, insurance approved, and quality guaranteed.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 bg-max-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-max-orange-dark transition-all hover:scale-105 text-sm"
              >
                Our Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 border border-max-gray/30 text-white px-6 py-3 rounded-full font-semibold hover:border-max-orange hover:text-max-orange transition-all text-sm"
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 mt-8"
            >
              <span className="text-xs text-max-gray/70 uppercase tracking-wider">Trusted by:</span>
              <div className="flex gap-4 text-xs text-max-gray/40 uppercase tracking-wider font-semibold">
                <span>Santam</span>
                <span>•</span>
                <span>King Price</span>
                <span>•</span>
                <span>Discovery</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Stats with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:border-max-orange/30 transition-all">
              <p className="text-3xl font-display text-max-orange">10+</p>
              <p className="text-xs text-max-gray/70 mt-1">Years Experience</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:border-max-orange/30 transition-all">
              <p className="text-3xl font-display text-max-orange">500+</p>
              <p className="text-xs text-max-gray/70 mt-1">Cars Restored</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:border-max-orange/30 transition-all">
              <p className="text-3xl font-display text-max-orange">4.9★</p>
              <p className="text-xs text-max-gray/70 mt-1">Rating</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:border-max-orange/30 transition-all">
              <p className="text-3xl font-display text-max-orange">100%</p>
              <p className="text-xs text-max-gray/70 mt-1">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-max-gray/30"
      >
        <div className="w-5 h-8 border-2 border-max-gray/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-max-orange rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
