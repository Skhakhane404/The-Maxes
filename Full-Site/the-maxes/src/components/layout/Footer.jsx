import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-max-dark border-t border-max-orange/20">
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/maxeslogo-smaller.jpg" 
                alt="THE MAXES" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-display">
                <span className="text-max-orange">THE</span> MAXES
              </span>
            </Link>
            <p className="text-max-gray text-sm">
              Premium panel beating & spray painting services in Welkom.
              Quality you can see, service you can trust.
            </p>
            <p className="text-max-gray/40 text-xs mt-3">
              Reg. No: 2020 / 769828 / 07
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-max-gray">
              <li><Link to="/" className="hover:text-max-orange transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-max-orange transition-colors">Services</Link></li>
              <li><Link to="/our-work" className="hover:text-max-orange transition-colors">Our Work</Link></li>
              <li><Link to="/about" className="hover:text-max-orange transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-max-gray">
              <li className="flex items-center gap-3">
                <FaPhone className="text-max-orange text-xs" />
                <a href="tel:+27736015342" className="hover:text-white transition-colors">+27 (0)73 601 5342</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-max-orange text-xs" />
                <a href="https://wa.me/27736015342" className="hover:text-white transition-colors">+27 (0)73 601 5342</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-max-orange text-xs" />
                <a href="mailto:info@the-maxes.com" className="hover:text-white transition-colors">info@the-maxes.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-max-orange text-xs" />
                <span className="text-xs">17224 Mike Selloane Street, Thabong, Welkom, 9463</span>
              </li>
            </ul>
          </div>

          {/* Follow Us & Hours */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://facebook.com/themaxesbodyrepair" target="_blank" rel="noopener noreferrer" className="text-2xl text-max-gray hover:text-max-orange transition-colors">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/themaxesbodyrepair" target="_blank" rel="noopener noreferrer" className="text-2xl text-max-gray hover:text-max-orange transition-colors">
                <FaInstagram />
              </a>
              <a href="https://wa.me/27736015342" target="_blank" rel="noopener noreferrer" className="text-2xl text-max-gray hover:text-max-orange transition-colors">
                <FaWhatsapp />
              </a>
            </div>
            <div className="text-sm text-max-gray">
              <div className="flex items-center gap-2">
                <FaClock className="text-max-orange text-xs" />
                <span>Mon–Fri: 8:00–17:00</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaClock className="text-max-orange text-xs" />
                <span>Sat: 9:00–14:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-max-gray/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-max-gray/60">
            © {new Date().getFullYear()} THE MAXES. All rights reserved.
          </p>
          <p className="text-xs text-max-gray/40">
            Developed by{' '}
            <a 
              href="https://siyabongaflepu.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-max-orange hover:underline transition-colors"
            >
              Siyabonga Flepu
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
