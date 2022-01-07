import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Pregunta from "./preguntas/Pregunta";
import Registro from "./layout/Registro";
import { useState } from "react";
import Error from "./layout/Error";
import Fallo from "./layout/Fallo";
import FormPreguntas from "./layout/pregunta/FormPregunta";
import Puntajes from "./layout/puntajes/Puntajes";
function App() {
  const [guardar, setguardar] = useState([]);
  const [puntaje, setpuntajes] = useState(0);
  const [motivo, setmotivo] = useState([]);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="" element={<Cards />} />
              <Route
                path="layout/Registro"
                element={<Registro puntaje={puntaje} motivo={motivo} />}
              />
              <Route
                path="layout/pregunta/FormPregunta"
                element={<FormPreguntas />}
              />
              <Route path="layout/puntajes/Puntajes" element={<Puntajes />} />
              <Route
                path="preguntas"
                element={
                  <Pregunta setpuntajes={setpuntajes} setmotivo={setmotivo} />
                }
              />

              <Route path="layout/Fallo" element={<Fallo />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
