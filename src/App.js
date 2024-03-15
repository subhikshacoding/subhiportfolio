import React from "react";
import './App.css';
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/project";
import Contact from "./routes/contact";
import {Route,Routes} from "react-router-dom";

function App() {
  return(
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />

     
      
     </Routes>

    </div>
  )
}

export default App;
