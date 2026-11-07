import { motion } from 'framer-motion'
import { FaTools, FaPaintBrush, FaCar, FaStar } from 'react-icons/fa'

const services = [
  {
    icon: FaTools,
    title: 'Panel Beating',
    description: 'Professional dent removal, chassis straightening, and body repair using state-of-the-art equipment.',
  },
  {
    icon: FaPaintBrush,
    title: 'Spray Painting',
    description: 'OEM-quality paint matching and application with premium finishes that last.',
  },
  {
    icon: FaCar,
    title: 'Accident Repairs',
    description: 'Full accident damage assessment and repair. We handle insurance claims directly.',
  },
  {
    icon: FaStar,
    title: 'Detailing',
    description: 'Complete interior and exterior detailing to restore your car\'s showroom shine.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-max-dark-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-max-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-max-gray mt-4 max-w-2xl mx-auto">
            Comprehensive automotive repair and restoration services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px rgba(232,93,4,0.15)',
              }}
              className="bg-max-dark p-8 rounded-2xl border border-max-gray/10 hover:border-max-orange/30 transition-all"
            >
              <div className="text-4xl text-max-orange mb-4">
                <service.icon />
              </div>
              <h3 className="text-xl font-display mb-3">{service.title}</h3>
              <p className="text-max-gray text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
