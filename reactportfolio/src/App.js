import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
    <Jumbotron />
    <Skills />
     <Portfolio />
 
  </div>
  );
}

export default App;
