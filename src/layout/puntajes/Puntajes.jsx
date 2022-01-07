import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Puntaje from "./Puntaje";
const Puntajes = () => {
  const [puntaje, setpuntaje] = useState([]);
  useEffect(() => {
    const ConsultaApi = async () => {
      try {
        const url = "http://localhost:4000/historial";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setpuntaje(resultado); //almaceno todo os elementos de la consulta en este state
      } catch (error) {
        console.log(error);
      }
    };
    ConsultaApi();
  }, []);
  return (
    <>
      <Header />
      <div className=" w-100 bg-white h-100">
        <div className="container">
          <h1 className="text-center fw-bold">Registro de puntajes</h1>
          <table className="table bg-white">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Identificacion</th>
                <th scope="col">Puntaje</th>
                <th scope="col">Motivo</th>
              </tr>
            </thead>
            <tbody>
              {puntaje.map((puntajes) => (
                <Puntaje key={puntajes.id} puntajes={puntajes} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Puntajes;
