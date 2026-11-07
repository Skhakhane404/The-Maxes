import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

const workItems = [
  {
    id: 1,
    title: 'Audi A4 Restoration',
    category: 'Panel Beating',
    before: '/Images/Audi2.jpg',
    after: '/Images/Audi.jpg',
  },
  {
    id: 2,
    title: 'Ford Ranger Collision Repair',
    category: 'Panel Beating',
    before: '/Images/Ranger2.jpg',
    after: '/Images/Ranger.jpg',
  },
  {
    id: 3,
    title: 'VW Polo Custom Paint',
    category: 'Spray Painting',
    before: '/Images/Polo2.jpg',
    after: '/Images/Polo.jpg',
  },
  {
    id: 4,
    title: 'Haval H6 Full Respray',
    category: 'Spray Painting',
    before: '/Images/Haval2.jpg',
    after: '/Images/Haval.jpg',
  },
  {
    id: 5,
    title: 'Hyundai i20 Dent Repair',
    category: 'Accident Repairs',
    before: '/Images/Hyndai2.jpg',
    after: '/Images/Hyndai.jpg',
  },
  {
    id: 6,
    title: 'Audi A4 Detailing',
    category: 'Detailing',
    before: '/Images/Audi2.jpg',
    after: '/Images/Audi.jpg',
  },
]

function BeforeAfterCard({ item }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative bg-max-dark rounded-2xl overflow-hidden border border-max-gray/10 hover:border-max-orange/30 transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] relative overflow-hidden">
        {/* Before Image - Always visible but dimmed */}
        <img 
          src={item.before} 
          alt={`${item.title} - Before`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* After Image - Revealed on hover */}
        <img 
          src={item.after} 
          alt={`${item.title} - After`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        />

        {/* Dark Overlay - Dims the card when not hovered */}
        <div className={`absolute inset-0 bg-black/60 transition-all duration-500 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`} />

        {/* Orange Glow Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-max-orange/0 via-max-orange/0 to-max-orange/0 transition-all duration-700 ${
          isHovered ? 'from-max-orange/20 via-max-orange/5 to-transparent' : ''
        }`} />

        {/* Label - Before/After */}
        <div className={`absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full transition-all duration-500 ${
          isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}>
          Before
        </div>
        <div className={`absolute top-3 right-3 bg-max-orange text-white text-xs px-3 py-1.5 rounded-full transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          After ✨
        </div>

        {/* Hover Hint */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[10px] px-4 py-1.5 rounded-full transition-all duration-500 ${
          isHovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}>
          Hover to see the transformation
        </div>

        {/* After Label on Hover */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-max-orange/90 text-white text-[10px] px-4 py-1.5 rounded-full transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          ✨ After
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-max-dark">
        <h3 className="font-display text-lg text-white group-hover:text-max-orange transition-colors">
          {item.title}
        </h3>
        <p className="text-max-gray text-sm">{item.category}</p>
      </div>
    </div>
  )
}

export default function WorkShowcase() {
  return (
    <section className="section-padding bg-max-dark-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-max-orange font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">
            Before & <span className="gradient-text">After</span>
          </h2>
          <p className="text-max-gray mt-4 max-w-2xl mx-auto">
            Hover over each card to see the transformation
          </p>
        </motion.div>

        {/* 6 Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeforeAfterCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 bg-max-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-max-orange-dark transition-all hover:scale-105"
          >
            View All Projects
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
