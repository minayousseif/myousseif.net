import React from "react";
import "./App.css";

import {
  Navigation,
  Header,
  About,
  Skills,
  Accomplishments,
  Experience,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Accomplishments />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
