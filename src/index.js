import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  // Contact,
  Fabricacao,
  // FormModal,
  Termos,
  Politica
} from "./Components";


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
<Router>
  {/* <FormModal /> */}
  <div className="bar-top">
    <a target={"_blank"} rel="noreferrer" href="https://api.whatsapp.com/send?phone=5547991241414&text=Ol%C3%A1%20Italabs%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21">
    AVISO! Tivemos um problema com nosso sistema de emails.
    Se você nos contatou nos últimos 15 dias, CLIQUE AQUI!
    </a>
  </div>
  <Navigation />
  {/* <Home /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    {/* <Route path="/contato" element={<Contact />} /> */}
    <Route path="/fabricacao" element={<Fabricacao />} />
    <Route path="/termos-de-uso" element={<Termos />} />
    <Route path="/politica" element={<Politica />} />
  </Routes>
  <Footer />
</Router>,
)