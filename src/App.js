import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Category1 from './components/Category1.js';
import About from './components/About.js';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/category1" component={Category1} />
      <Route path="/about" component={About}/>

      <Footer />
    </Router>
  );
}

export default App;
