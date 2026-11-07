import { motion } from 'framer-motion'
import { FaFacebook, FaPlay, FaArrowRight } from 'react-icons/fa'

// Facebook Reel Links
const workItems = [
  {
    id: 1,
    title: 'BMW M3 Complete Restoration',
    description: 'Full panel beating and spray painting on a BMW M3. Watch the transformation!',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/876992034960877&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/876992034960877',
    category: 'Restoration'
  },
  {
    id: 2,
    title: 'Mercedes-Benz C-Class Respray',
    description: 'Complete colour change and full respray on a Mercedes-Benz C-Class.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/942438348339371&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/942438348339371',
    category: 'Spray Painting'
  },
  {
    id: 3,
    title: 'Audi A4 Accident Repair',
    description: 'Major collision repair and chassis alignment on an Audi A4.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/869914309078962&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/869914309078962',
    category: 'Collision Repair'
  },
  {
    id: 4,
    title: 'Porsche 911 Detailing',
    description: 'Premium detailing and paint correction on a Porsche 911.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1414259493476035&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/1414259493476035',
    category: 'Detailing'
  },
  {
    id: 5,
    title: 'VW Golf GTI Custom Paint',
    description: 'Custom spray paint job with perfect colour matching on a VW Golf GTI.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/3745766779058660&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/3745766779058660',
    category: 'Spray Painting'
  },
  {
    id: 6,
    title: 'Toyota Hilux Chassis Repair',
    description: 'Full chassis straightening and panel beating on a Toyota Hilux.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1927073011469035&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/1927073011469035',
    category: 'Panel Beating'
  },
  {
    id: 7,
    title: 'BMW X5 Full Respray',
    description: 'Complete respray and body restoration on a BMW X5 SUV.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/3127448117420887&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/3127448117420887',
    category: 'Spray Painting'
  },
  {
    id: 8,
    title: 'Mercedes G-Wagon Restoration',
    description: 'Premium restoration and detailing on a Mercedes G-Wagon.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/4203736406526151&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/4203736406526151',
    category: 'Restoration'
  },
  {
    id: 9,
    title: 'Audi S4 Performance Build',
    description: 'Complete transformation and performance build on an Audi S4.',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1626024298412612&show_text=0&width=560',
    reelLink: 'https://www.facebook.com/reel/1626024298412612',
    category: 'Restoration'
  }
]

// Video Card Component
function VideoCard({ item }) {
  return (
    <div className="group bg-max-dark-light rounded-2xl overflow-hidden border border-max-gray/10 hover:border-max-orange/30 transition-all hover:-translate-y-2 duration-300">
      {/* Video Embed */}
      <div className="relative aspect-video bg-max-dark overflow-hidden">
        <iframe
          src={item.videoUrl}
          width="100%"
          height="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full h-full"
          title={item.title}
          loading="lazy"
        />
        
        {/* Overlay Play Hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-max-orange/0 group-hover:bg-max-orange/20 rounded-full p-4 transition-all duration-300 backdrop-blur-sm border border-transparent group-hover:border-max-orange/30">
            <FaPlay className="text-white/0 group-hover:text-white text-3xl ml-1 transition-all duration-300" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-max-orange/90 text-white text-xs px-3 py-1.5 rounded-full">
          {item.category}
        </div>

        {/* Facebook Link */}
        <a
          href={item.reelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 bg-black/70 hover:bg-[#1877f2] text-white text-xs px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5"
        >
          <FaFacebook className="text-sm" />
          <span className="hidden sm:inline">Watch</span>
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg text-white group-hover:text-max-orange transition-colors">
          {item.title}
        </h3>
        <p className="text-max-gray text-sm mt-1 leading-relaxed">
          {item.description}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <a
            href={item.reelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-max-orange text-xs font-semibold hover:underline"
          >
            <FaFacebook />
            View on Facebook
            <FaArrowRight className="text-[10px]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section className="section-padding pt-32 bg-max-dark">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-max-orange font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-display mt-2">
            Transformations in <span className="gradient-text">Action</span>
          </h1>
          <p className="text-max-gray mt-4 max-w-2xl mx-auto">
            Watch our restoration journeys — from damaged to perfect
          </p>
        </motion.div>

        {/* Videos Grid - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <VideoCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Follow Us on Facebook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-max-dark-light p-8 rounded-2xl border border-max-orange/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaFacebook className="text-3xl text-[#1877f2]" />
              <h2 className="text-2xl font-display">Follow Our Work</h2>
            </div>
            <p className="text-max-gray text-sm mb-6">
              See more transformations, behind-the-scenes content, and client testimonials on Facebook
            </p>
            <a
              href="https://facebook.com/themaxesbodyrepair"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1877f2] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1877f2]/90 transition-all hover:scale-105"
            >
              Follow THE MAXES on Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
