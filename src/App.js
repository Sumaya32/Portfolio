import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/index";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";




function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Projects />} path="/projects" />
    </Routes>
  );
}

export default App;
