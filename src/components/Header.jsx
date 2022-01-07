import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-conten-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Inicio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="layout/pregunta/FormPregunta"
              >
                Registrar Preguntas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="layout/puntajes/Puntajes">
                Puntajes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
/*<a classNameName="nav-link text-white">Inicio</a>*/
