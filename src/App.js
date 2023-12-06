import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/index";
import { Resume } from "./pages/resume";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { Final } from "./pages/Final";

function App() {
  
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Resume />} path="/resume" />
      <Route element={<Projects />} path="/projects" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Final />} path="/final" />
    </Routes>
  );
}

export default App;
