
import './App.css'
import About from './Components/About'
import Bot from './Components/Bot'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Hireme from './Components/Hireme'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Skills from './Components/Skills'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Bot/>
        <Hero/>
        <About/>
        <Skills/>
        <Hireme/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
