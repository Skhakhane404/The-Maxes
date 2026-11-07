import { motion } from 'framer-motion'
import { FaUsers, FaGraduationCap, FaHandsHelping, FaTrophy } from 'react-icons/fa'

export default function About() {
  return (
    <section className="section-padding pt-32 bg-max-dark">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-max-orange font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display mt-2">
            Who We <span className="gradient-text">Are</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/maxeslogo.jpg" 
              alt="THE MAXES Team" 
              className="rounded-2xl border border-max-orange/20 w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display">
              Restoring Cars, <span className="text-max-orange">Building Futures</span>
            </h2>
            <p className="text-max-gray leading-relaxed">
              At THE MAXES Body Repair and Spray Paint, we believe in more than just fixing cars. 
              We're dedicated to restoring vehicles to perfection while creating opportunities for 
              our community.
            </p>
            <p className="text-max-gray leading-relaxed">
              Located in Thabong, Welkom, we've been serving the Free State community with 
              premium panel beating, spray painting, and collision repair services. Our team 
              combines years of industry experience with state-of-the-art equipment to deliver 
              results that exceed expectations.
            </p>
            <p className="text-max-gray leading-relaxed">
              But our mission goes beyond the workshop. We're committed to uplifting our 
              community by providing training and employment opportunities to local youth 
              who have completed their N5 in Motor Mechanic or Engineering studies. We give 
              them the hands-on exposure they need to build successful careers in the 
              automotive industry.
            </p>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-display text-center mb-12">
            Our <span className="text-max-orange">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-max-dark-light p-6 rounded-2xl border border-max-gray/10 text-center">
              <div className="text-4xl text-max-orange mb-4 flex justify-center">
                <FaTrophy />
              </div>
              <h3 className="font-display text-xl mb-2">Quality Work</h3>
              <p className="text-max-gray text-sm">We deliver excellence in every repair, ensuring your car looks and performs like new.</p>
            </div>
            <div className="bg-max-dark-light p-6 rounded-2xl border border-max-gray/10 text-center">
              <div className="text-4xl text-max-orange mb-4 flex justify-center">
                <FaHandsHelping />
              </div>
              <h3 className="font-display text-xl mb-2">Community First</h3>
              <p className="text-max-gray text-sm">We invest in our local youth by providing training and employment opportunities.</p>
            </div>
            <div className="bg-max-dark-light p-6 rounded-2xl border border-max-gray/10 text-center">
              <div className="text-4xl text-max-orange mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className="font-display text-xl mb-2">Trust & Integrity</h3>
              <p className="text-max-gray text-sm">We build lasting relationships with our clients through honesty and transparency.</p>
            </div>
            <div className="bg-max-dark-light p-6 rounded-2xl border border-max-gray/10 text-center">
              <div className="text-4xl text-max-orange mb-4 flex justify-center">
                <FaGraduationCap />
              </div>
              <h3 className="font-display text-xl mb-2">Skills Development</h3>
              <p className="text-max-gray text-sm">We mentor young technicians, giving them real-world experience in the industry.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center bg-gradient-to-r from-max-orange/10 to-max-orange/5 p-12 rounded-2xl border border-max-orange/20"
        >
          <h2 className="text-3xl font-display mb-4">
            Join Us in <span className="text-max-orange">Building Futures</span>
          </h2>
          <p className="text-max-gray max-w-2xl mx-auto mb-6">
            Whether you need your car restored or you're a young technician looking for 
            hands-on experience, THE MAXES is here for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-max-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-max-orange-dark transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
