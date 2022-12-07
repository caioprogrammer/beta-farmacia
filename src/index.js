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
  FormModal,
  Termos,
  Politica
} from "./Components";


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
<Router>
  {/* <FormModal /> */}
  <Navigation />
  {/* <Home /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/contato" element={<Contact />} />
    <Route path="/fabricacao" element={<Fabricacao />} />
    <Route path="/termos-de-uso" element={<Termos />} />
    <Route path="/politica" element={<Politica />} />
  </Routes>
  <Footer />
</Router>,
)