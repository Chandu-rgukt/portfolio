import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <div className="app-container">
    <Navbar />
    <div id="home">
      <Profile />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
)

export default App
