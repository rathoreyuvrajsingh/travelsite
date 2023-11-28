import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
