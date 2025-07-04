import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;