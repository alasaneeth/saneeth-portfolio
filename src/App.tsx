import Header from './components/Pages/Header'
import "./App.css"
import Hero from './components/Pages/Hero'
import About from './components/Pages/About'
import TechincalSkills from './components/Pages/TechincalSkills'
import SoftSkills from './components/Pages/SoftSkills'
import Services from './components/Pages/Service'
import Contact from './components/Pages/Contact'
import Footer from './components/Pages/Footer'
// import Testimonial from './components/Pages/Testimonials'
import Certifications from './components/Pages/Certifications'


function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <TechincalSkills/>
      <SoftSkills/>
      <Certifications/>
      <Services/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
