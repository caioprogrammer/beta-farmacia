import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/thumbnail.png';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img style={{ maxWidth: "173px" }} alt="logo" src={logo} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#0" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Serviços
                </a>
                <div className="dropdown-menu show" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/fabricacao">Fabricação</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item" to="/logistica">Logística</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Fale Conosco
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link link-parceiro" to="/contact">
                  Quero ser parceiro
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;