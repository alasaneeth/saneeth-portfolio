import Header from './components/Pages/Header'
import "./App.css"
import Hero from './components/Pages/Hero'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import TechincalSkills from './components/Pages/TechincalSkills'
import SoftSkills from './components/Pages/SoftSkills'
import Services from './components/Pages/Service'
import Contact from './components/Pages/Contact'
import Footer from './components/Pages/Footer'


function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <TechincalSkills/>
      <SoftSkills/>
      <Services/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
