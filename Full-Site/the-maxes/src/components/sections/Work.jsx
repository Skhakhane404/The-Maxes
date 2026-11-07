import { motion } from 'framer-motion'
import { FaCamera } from 'react-icons/fa'

const workItems = [
  { id: 1, title: 'BMW M3 Restoration', category: 'Panel Beating' },
  { id: 2, title: 'Mercedes Paint Job', category: 'Spray Painting' },
  { id: 3, title: 'Audi Accident Repair', category: 'Accident Repairs' },
  { id: 4, title: 'Porsche Detailing', category: 'Detailing' },
  { id: 5, title: 'VW Golf Custom Paint', category: 'Spray Painting' },
  { id: 6, title: 'Toyota Chassis Repair', category: 'Panel Beating' },
]

export default function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-max-orange font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">
            Before & <span className="gradient-text">After</span>
          </h2>
          <p className="text-max-gray mt-4 max-w-2xl mx-auto">
            See the transformation — real results from real projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square bg-max-dark-light rounded-2xl overflow-hidden border border-max-gray/10 hover:border-max-orange/30 transition-all cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-max-dark to-max-dark-light">
                <FaCamera className="text-5xl text-max-gray/30 group-hover:text-max-orange/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-max-orange text-xs mt-1">{item.category}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-max-orange/0 group-hover:bg-max-orange/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
