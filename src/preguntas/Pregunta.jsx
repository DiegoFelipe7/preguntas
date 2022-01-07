import preguntaimagen from "../img/pregunta.png";
import { useEffect, useState } from "react";
import Preguntas from "./Preguntas";
import { useNavigate } from "react-router-dom";
const Pregunta = ({ setpuntajes, setmotivo }) => {
  const [preguntas, setpreguntas] = useState([]);
  const [opciones, setopciones] = useState([]);
  const [respuesta, setRespuesta] = useState([]);
  const [puntaje, setpuntaje] = useState(0);
  const [idpreg, setid] = useState(1);
  const { id, categoria, pregunta } = preguntas;
  let navegacion = useNavigate();
  useEffect(() => {
    const ConsultaApi = async () => {
      try {
        const url = `http://localhost:4000/preguntas/${idpreg}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setpreguntas(resultado); //almaceno todo os elementos de la consulta en este state
        setopciones(resultado.respuestas); //almaceno las opciones en este state
      } catch (error) {
        console.log(error);
      }
    };
    ConsultaApi();
  }, [idpreg, respuesta]);

  useEffect(() => {
    const validar = () => {
      if (preguntas.solucion === respuesta) {
        let puntajes = 1;
        puntajes = puntajes + idpreg;
        setid(puntajes);
        setpuntaje(puntajes);

        if (puntaje === 25) {
          alert(
            `Felicitaciones has ganado completa el siguiente formulario  para realizar la entrega de premio en efectivo de 
              ${puntaje}00 US`
          );
          navegacion("../layout/Registro");
          setpuntajes(puntaje);
          setmotivo("Ganador");
        }
      }
      if (respuesta != "") {
        if (preguntas.solucion != respuesta) {
          alert("Upp respuesta incorrecta");
          navegacion("../layout/Registro");
          setpuntajes(puntaje);
          setmotivo("Equivocacion");
        }
      }
    };

    validar();
  }, [respuesta]);

  const Retirarse = () => {
    setpuntajes(puntaje);
    navegacion("../layout/Registro");
    setmotivo("Retiro");
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="card mb-3 h-50 w-50">
          <div className="row g-0">
            <div className="col-md-4 modelo ">
              <img src={preguntaimagen} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title text-primary text-uppercase text-center">
                  categoria {categoria}
                </h4>
                <h5 className="card-text">¿{pregunta}?</h5>
                <div className="card-text">
                  {opciones.map((pregunta) => (
                    <Preguntas
                      key={pregunta}
                      pregunta={pregunta}
                      setRespuesta={setRespuesta}
                    />
                  ))}
                </div>
              </div>
              {puntaje === 0 ? null : (
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        className="btn btn-block btn-danger w-100  fw-bold"
                        onClick={() => Retirarse()}
                      >
                        Retirarse
                      </button>
                    </div>
                    <div className="col-md-6">
                      <h6 className="card-text m-2 fw-bold">
                        Money : ${puntaje} Dolar
                      </h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pregunta;
