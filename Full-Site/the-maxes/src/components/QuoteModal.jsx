import { motion } from 'framer-motion'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'

export default function QuoteModal({ isOpen, onClose, service }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show success state
    setIsSubmitted(true)
    
    // Actually submit the form
    const form = e.target
    setTimeout(() => {
      form.submit()
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-max-dark-light rounded-2xl border border-max-orange/30 max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-max-gray hover:text-white transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="text-center py-8">
            <FaCheckCircle className="text-5xl text-max-orange mx-auto mb-4" />
            <h3 className="text-2xl font-display mb-2">Quote Request Sent! 🎉</h3>
            <p className="text-max-gray text-sm">
              We've received your request for <span className="text-max-orange">{service}</span>
              <br />
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          // Form State
          <>
            <h2 className="text-2xl font-display mb-2">
              Request a Quote for <br />
              <span className="text-max-orange">{service}</span>
            </h2>
            <p className="text-max-gray text-sm mb-6">
              Fill in your details and we'll get back to you within 24 hours.
            </p>

            <form 
              action="mailto:bookings@the-maxes.com" 
              method="POST" 
              encType="text/plain"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="service" value={service} />
              
              <div>
                <label className="block text-sm font-semibold mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+27 73 601 5342"
                  className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1">Vehicle Details</label>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="Make, Model & Year"
                  className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1">Additional Information</label>
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Tell us more about what needs to be done..."
                  className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-max-orange text-white font-semibold py-3 rounded-full hover:bg-max-orange-dark transition-all hover:scale-[1.02]"
              >
                Send Quote Request
              </button>
              
              <p className="text-center text-xs text-max-gray/50">
                Your message will be sent to bookings@the-maxes.com
              </p>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
