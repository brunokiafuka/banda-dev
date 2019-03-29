import React from "react";
import "./styles.css";
const Header = () => (
  <header id="main-header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          BandaDevs {`</>`}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Membros
            </a>
            <a className="nav-item nav-link" href="#">
              Eventos
            </a>
            <a className="nav-item nav-link" href="#">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
