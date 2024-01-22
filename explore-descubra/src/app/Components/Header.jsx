"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    
    if (typeof window !== 'undefined') {

    }
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/img/logoSite.png"
              alt="Logo"
              width={40}
              height={30}
              className="d-inline-block align-text-top"
            />{" "}
            &gt;Explore e Descubra
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Destino
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Promoções
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Cadastre-se
                </a>
              </li>
            </ul>
            <div className="dropdown">
              <a
                className="btn btn-warning dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Administrador{" "}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Clientes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pacotes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Compras
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
