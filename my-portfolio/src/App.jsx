import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      {/* Cyber ambient background grids */}
      <div className="gradient-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}