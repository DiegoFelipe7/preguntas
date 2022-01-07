const Preguntas = ({ pregunta, setRespuesta }) => {
  const Respuesta = (pregunta) => {
    setRespuesta(pregunta);
  };
  return (
    <>
      <div className="btn-group-vertical w-100">
        <button
          className="btn btn-outline-primary mt-2"
          value={pregunta}
          onClick={() => Respuesta(pregunta)}
        >
          <h6>{pregunta}</h6>
        </button>
      </div>
    </>
  );
};

export default Preguntas;
