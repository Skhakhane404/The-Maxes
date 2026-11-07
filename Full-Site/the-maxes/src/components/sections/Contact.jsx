import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'
import { sendQuoteEmail } from '../../services/emailService'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

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
        type: 'Contact Form'
      })
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-max-dark-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-max-orange font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">
            Let's Get Your Car <span className="gradient-text">Fixed</span>
          </h2>
          <p className="text-max-gray mt-4 max-w-2xl mx-auto">
            Contact us for a free estimate — we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-max-orange/20 p-4 rounded-full text-max-orange">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+27736015342" className="text-max-gray hover:text-max-orange transition-colors">
                  +27 (0)73 601 5342
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-max-orange/20 p-4 rounded-full text-max-orange">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <a href="https://wa.me/27736015342" className="text-max-gray hover:text-max-orange transition-colors">
                  +27 (0)73 601 5342
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-max-orange/20 p-4 rounded-full text-max-orange">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:info@the-maxes.com" className="text-max-gray hover:text-max-orange transition-colors">
                  info@the-maxes.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-max-orange/20 p-4 rounded-full text-max-orange">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-max-gray">17224 Mike Selloane Street</p>
                <p className="text-max-gray">Thabong, Welkom, 9463</p>
                <a 
                  href="https://www.google.com/maps/dir//17224+Mike+Selloane+Street+Thabong+Welkom+9463" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-max-orange hover:underline text-sm inline-block mt-1"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-max-orange/20 p-4 rounded-full text-max-orange">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p className="text-max-gray">Mon–Fri: 8:00–17:00</p>
                <p className="text-max-gray">Sat: 9:00–14:00</p>
              </div>
            </div>

            <div className="bg-max-dark p-6 rounded-2xl border border-max-orange/20">
              <p className="text-sm text-max-gray">
                <span className="text-max-orange font-semibold">⚡ Quick response:</span> 
                {" "}We typically respond within 1-2 hours during business hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-max-dark p-8 rounded-2xl border border-max-gray/10"
          >
            <h3 className="text-2xl font-display mb-6 text-center">Send Us a Message</h3>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <FaCheckCircle className="text-5xl text-max-orange mx-auto mb-4" />
                <h3 className="text-xl font-display mb-2">Message Sent! 🎉</h3>
                <p className="text-max-gray text-sm">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 bg-max-orange text-white px-6 py-2 rounded-full hover:bg-max-orange-dark transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-max-dark-light border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-max-dark-light border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 73 601 5342"
                    className="w-full bg-max-dark-light border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-max-dark-light border border-max-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-max-orange transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>Spray Painting</option>
                    <option>Dent Repair</option>
                    <option>Collision Repair</option>
                    <option>Colour Matching</option>
                    <option>Panel Beating</option>
                    <option>Full Resprays</option>
                    <option>Chassis Alignment</option>
                    <option>Insurance Claims</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your car and what needs fixing..."
                    className="w-full bg-max-dark-light border border-max-gray/20 rounded-lg px-4 py-3 text-white placeholder-max-gray/50 focus:outline-none focus:border-max-orange transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-max-orange text-white font-semibold py-4 rounded-full hover:bg-max-orange-dark transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
