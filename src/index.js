import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Fabricacao,
  Logistica
} from "./Components";


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
<Router>
  <Navigation />
  {/* <Home /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/fabricacao" element={<Fabricacao />} />
    <Route path="/logistica" element={<Logistica />} />
  </Routes>
  <Footer />
</Router>,
)