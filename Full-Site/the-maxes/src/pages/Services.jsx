import SEO from '../components/SEO'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaintBrush, FaTools, FaCarCrash, FaPalette, FaWrench, FaSprayCan, FaAlignLeft, FaShieldAlt, FaTimes, FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'
import { sendQuoteEmail } from '../services/emailService'

const services = [
  {
    icon: FaPaintBrush,
    title: 'Spray Painting',
    description: 'Professional spray painting services with OEM-quality finishes. We use premium paints and advanced techniques to restore your vehicle\'s appearance.',
  },
  {
    icon: FaTools,
    title: 'Dent Repair',
    description: 'Expert dent removal using state-of-the-art tools and techniques. From minor dings to major dents, we restore your car\'s body to perfection.',
  },
  {
    icon: FaCarCrash,
    title: 'Collision Repair',
    description: 'Comprehensive collision repair services. We handle everything from minor fender benders to major accident damage with precision and care.',
  },
  {
    icon: FaPalette,
    title: 'Colour Matching',
    description: 'Precise colour matching technology ensures your paint job blends seamlessly with the original factory finish. No visible differences, guaranteed.',
  },
  {
    icon: FaWrench,
    title: 'Panel Beating',
    description: 'Professional panel beating services to restore damaged body panels to their original shape and condition.',
  },
  {
    icon: FaSprayCan,
    title: 'Full Resprays',
    description: 'Complete vehicle resprays for a fresh new look. Choose from standard colours or custom finishes to make your car stand out.',
  },
  {
    icon: FaAlignLeft,
    title: 'Chassis Alignment',
    description: 'Precision chassis alignment services to ensure your vehicle\'s frame is perfectly straight after an accident. Safety and performance restored.',
  },
  {
    icon: FaShieldAlt,
    title: 'Insurance Claims',
    description: 'We handle insurance claims directly. Our team works with all major insurance providers to make the process smooth and hassle-free.',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    message: ''
  })

  const openModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
    setSubmitStatus(null)
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicle: '',
      message: ''
    })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSubmitStatus(null)
    document.body.style.overflow = 'auto'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sendQuoteEmail({
        ...formData,
        service: selectedService,
        type: 'Quote Request'
      })
      setSubmitStatus('success')
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO 
        title="Services"
        description="Professional panel beating, spray painting, collision repair, and more in Welkom. Free estimates and insurance claims handled."
        keywords="panel beating, spray painting, dent repair, collision repair, Welkom, chassis alignment"
        url="https://www.the-maxes.com/services"
      />
      <section className="section-padding pt-32 bg-max-dark">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-max-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-display mt-2">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-max-gray mt-4 max-w-2xl mx-auto">
              Comprehensive automotive repair and restoration services in Welkom
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-max-dark-light p-6 rounded-2xl border border-max-gray/10 hover:border-max-orange/30 transition-all cursor-pointer"
                onClick={() => openModal(service.title)}
              >
                <div className="text-4xl text-max-orange mb-4">
                  <service.icon />
                </div>
                <h3 className="text-xl font-display mb-2">{service.title}</h3>
                <p className="text-max-gray text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-max-orange text-sm font-semibold hover:underline">
                  Request Quote →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
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
                onClick={closeModal}
                className="absolute top-4 right-4 text-max-gray hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <FaCheckCircle className="text-5xl text-max-orange mx-auto mb-4" />
                  <h3 className="text-2xl font-display mb-2">Quote Request Sent! 🎉</h3>
                  <p className="text-max-gray text-sm">
                    We've received your request for <span className="text-max-orange">{selectedService}</span>
                    <br />
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-4 bg-max-orange text-white px-6 py-2 rounded-full hover:bg-max-orange-dark transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-display mb-2">
                    Request a Quote for <br />
                    <span className="text-max-orange">{selectedService}</span>
                  </h2>
                  <p className="text-max-gray text-sm mb-6">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-1">Vehicle Details</label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="Make, Model & Year"
                        className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-1">Additional Information</label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about what needs to be done..."
                        className="w-full bg-max-dark border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-max-orange text-white font-semibold py-3 rounded-full hover:bg-max-orange-dark transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
