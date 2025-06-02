import About from "./components/About"
import BackToTop from "./components/BackToTop"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import ScrollProgressBar from "./components/ScrollProgressBar"


function App() {

  return (
    <>
    <Navbar />
    <ScrollProgressBar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    <BackToTop />
    </>
  )
}

export default App
