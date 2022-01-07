const Puntaje = ({ puntajes }) => {
  const { id, nombre, identificacion, puntaje, motivo } = puntajes;
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{identificacion}</td>
      <td>{puntaje}</td>
      <td>{motivo}</td>
    </tr>
  );
};

export default Puntaje;
