import SEO from '../components/SEO'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import WorkShowcase from '../components/sections/WorkShowcase'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Expert panel beating, spray painting, and collision repair in Welkom. Free estimates, insurance approved, quality guaranteed. 🚗 Book your free quote today!"
        keywords="panel beating, spray painting, car repair, Welkom, Thabong, collision repair, dent repair, auto body"
        url="https://www.the-maxes.com/"
      />
      <Hero />
      <Services />
      <WorkShowcase />
      <Contact />
    </>
  )
}
