import "../styles/cards.css";
import { Link } from "react-router-dom";
const Card = ({ datos }) => {
  const { title, img, descripcion } = datos;
  return (
    <>
      <div className="col-md-3">
        <div className="card text-center bg-dark ">
          <img src={img} alt="" className="img" />
          <div className="card-body">
            <h4 className="card-title text-white ">{title}</h4>
            <p className="card-text text-white">{descripcion}</p>
            <Link to="/preguntas" className="btn btn-outline-secondary round-0">
              Pon a prueba tu conocimiento
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
