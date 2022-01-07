import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header";
import { useNavigate } from "react-router";
const FormPreguntas = () => {
  let navegacion = useNavigate();
  const nuevapregunta = Yup.object().shape({
    categoria: Yup.string().required("La categoria del juego es obligatorio!"),
    pregunta: Yup.string().required("La pregunta del juego es obligatorio!"),
    respuestas: Yup.string().required(
      "La respuestas del juego son obligatorio!"
    ),
    solucion: Yup.string().required("La respuesta correcta  es obligatorio!"),
  });
  const handleSubmit = async (valores) => {
    try {
      //Nuevo Registro al documento json
      const url = "http://localhost:4000/preguntas";
      const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(valores),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resultado = await respuesta.json();
      navegacion("/");
    } catch (error) {
      console.log("ocurrio un error" + error);
    }
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center h-100">
        <Formik
          initialValues={{
            categoria: "",
            pregunta: "",
            respuestas: "",
            solucion: "",
          }}
          enableReinitialize={true} //esta propiedad pinta los valores en los input
          onSubmit={async (values, { resetForm }) => {
            values.respuestas = values.respuestas.split(";");
            //subtmin para los valores y guardar en la api
            await handleSubmit(values);
            resetForm();
          }}
          validationSchema={nuevapregunta}
        >
          {({ errors, touched }) => {
            return (
              <Form className="w-50  border p-5 bg-light shadow ">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Categoria
                  </label>
                  <Field
                    className={`form-control ${
                      errors.categoria && touched.categoria && "is-invalid"
                    } `}
                    type="text"
                    placeholder="Ingresa una categoria"
                    id="categoria"
                    name="categoria"
                  />
                  {errors.categoria && touched.categoria ? (
                    <div className="alert alert-warning">
                      {errors.categoria}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Pregunta
                  </label>
                  <Field
                    className={`form-control ${
                      errors.pregunta && touched.pregunta && "is-invalid"
                    } `}
                    type="text"
                    placeholder="Ingresa una pregunta"
                    id="pregunta"
                    name="pregunta"
                  />
                  {errors.pregunta && touched.pregunta ? (
                    <div className="alert alert-warning">{errors.pregunta}</div>
                  ) : null}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="" className="form-label fw-bold">
                    Respuestas
                  </label>
                  <Field
                    as="textarea"
                    id="respuestas"
                    name="respuestas"
                    type="text"
                    className="form-control"
                    placeholder="ejemplo  1;2;3;4"
                  />
                  {errors.respuestas && touched.respuestas ? (
                    <div className="alert alert-warning">
                      {errors.respuestas}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Solucion
                  </label>
                  <Field
                    className={`form-control ${
                      errors.solucion && touched.solucion && "is-invalid"
                    } `}
                    type="text"
                    placeholder="Ingresa la solucion"
                    id="solucion"
                    name="solucion"
                  />
                  {errors.solucion && touched.solucion ? (
                    <div className="alert alert-warning">{errors.solucion}</div>
                  ) : null}
                </div>
                <div className="form-group mt-3">
                  <button className="btn btn-primary fw-bold w-100">
                    Registrar
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default FormPreguntas;
