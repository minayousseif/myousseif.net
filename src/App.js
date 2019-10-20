import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Header     from './components/Header';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Footer     from './components/Footer';

function App() { 
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
