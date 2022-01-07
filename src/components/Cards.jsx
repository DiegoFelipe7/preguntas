import Card from "./Card";
import astronomia from "../img/astronomia.jpg";
import ciencia from "../img/ciencia.jpg";
import economia from "../img/economia.jpg";
import matematicas from "../img/matematicas.jpg";
import futbol from "../img/futbol.jpg";
import Header from "./Header";
const card = [
  {
    id: 1,
    title: "Astronomia",
    img: astronomia,
    descripcion:
      "La astronomia​ es la ciencia que estudia los cuerpos celestes del universo, incluidos las estrellas, los planetas, sus satélites naturales, los asteroides, cometas y meteoroides, la materia interestelar, las nebulosas, la materia",
  },
  {
    id: 2,
    title: "Ciencia",
    img: ciencia,
    descripcion:
      "La ciencia es el conjunto de conocimientos obtenidos mediante la observación y el razonamiento , sistemáticamente estructurados y de los que se deducen principios y leyes generales con capacidad predictiva y comprobables experimentalmente .",
  },
  {
    id: 3,
    title: "Economía",
    img: economia,
    descripcion:
      "La economía es la ciencia social que estudia cómo las familias, empresas y gobiernos organizan los recursos disponibles que suelen ser escasos, para satisfacer las diferentes necesidades y así tener un mayor bienestar.",
  },
  {
    id: 4,
    title: "Matemáticas",
    img: matematicas,
    descripcion:
      "Las matemáticas son una ciencia formal, que estudia la relación entre entes o elementos abstractos, como son los números, los signos y las figuras.",
  },
];
const Cards = () => {
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center h-100 ">
        <div className="row">
          {card.map((datos) => (
            <Card key={datos.id} datos={datos} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
