"use client";
import '../Styles/footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, []);

  return (
    <footer className="bg-footer mt-5">
      <nav className="navbar bg-transparent">
        <div className="container-fluid d-flex justify-content-around pesquisa-footer">
          <a className="navbar-brand text-light">Explore e Descubra</a>
        </div>
      </nav>
      <div className="barra-de-apresentação">
        <div className="informações-site">
          <h3>Galeria de aventuras!</h3>
          <img
            id="logo-company"
            src="/img/logo-company.jpg"
            alt="logo do site"
          />
        </div>
        <div className="redes-sociais">
          <h3>Redes Sociais</h3>
          <ul className="rodape__social">
            <li>
              <a href="" className="rodape__midia" />
              <img src="img/facebook.png" alt="icone do facebook" />
            </li>
            <li>
              <a href="" className="rodape__midia" />
              <img src="img/twitter.png" alt="icone do twitter" />
            </li>
            <li>
              <a href="" className="rodape__midia" />
              <img src="img/instagram.png" alt="icone do instagram" />
            </li>
          </ul>
        </div>
        <nav className="formas-de-pagamento">
          <div className="cartoes-aceitos">
            <h3>Formas de Pagamento</h3>
            <ul className="rodape__navegacao">
              <li className="rodape__link">
                <a href="#">
                  <img src="img/cads.png" alt="" />
                </a>
              </li>
              <li className="rodape__link">
                <a href="#">
                  <img src="img/Amazon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="desenvolvimento">
        Desenvolvido por Thiago Queiroz - 2023
      </div>
    </footer>
  );
};

export default Footer;
