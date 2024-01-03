import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/thumbnail.png';
import { useEffect } from "react";

function Navigation() {
  useEffect(() => {
    document.querySelector(".navbar-toggler").addEventListener("click", () => {
      document.querySelector(".navbar-mobile").classList.toggle("show")
    })
  })
  return (
    <div className="navigation">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-brand" to="/">
            <img style={{ maxWidth: "110px" }} alt="logo" src={logo} />
          </NavLink>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
          <div className="navbar-mobile">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#0" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Serviços
                </a>
                <div className="dropdown-menu show" aria-labelledby="navbarDropdown">
                  <NavLink data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="dropdown-item" to="/fabricacao">Fabricação</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="nav-link" to="/sobre">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <a rel="noreferrer" target={"_blank"} className="nav-link" href="https://api.whatsapp.com/send?phone=5515998065216&text=Ol%C3%A1%20LotNutrition%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21">
                  Fale Conosco
                </a>
                {/* <NavLink data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="nav-link" to="/contato">
                  Fale Conosco
                </NavLink> */}
              </li>
              
              <li className="nav-item">
                <a rel="noreferrer" target={"_blank"} className="nav-link link-parceiro" href="https://api.whatsapp.com/send?phone=5515998065216&text=Ol%C3%A1%20LotNutrition%2C%20gostaria%20de%20fazer%20meus%20suplementos%20com%20voc%C3%AAs%21">
                  Quero ser Parceiro
                </a>
                {/* <NavLink data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="nav-link link-parceiro" to="/contato">
                  Quero ser parceiro
                </NavLink> */}
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;