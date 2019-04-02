import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route basename="/" /> <link to="/home/"  />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
