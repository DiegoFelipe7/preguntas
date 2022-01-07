import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Registro = ({ puntaje, motivo }) => {
  const nuevapregunta = Yup.object().shape({
    nombre: Yup.string().required("el nombre es obligatorio!"),
    identificacion: Yup.number().required("la identificacion es obligatoria!"),
  });
  let navegacion = useNavigate();
  const handleSubmit = async (valores) => {
    try {
      //Nuevo Registro al documento json
      const url = "http://localhost:4000/historial";
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
      <div className="container d-flex justify-content-center align-items-center h-100">
        <Formik
          initialValues={{
            nombre: "",
            identificacion: "",
            puntaje: puntaje,
            motivo: motivo,
          }}
          enableReinitialize={true} //esta propiedad pinta los valores en los input
          onSubmit={async (values, { resetForm }) => {
            //subtmin para los valores y guardar en la api
            await handleSubmit(values);
            resetForm();
          }}
          validationSchema={nuevapregunta}
        >
          {({ errors, touched }) => {
            return (
              <Form className="w-25  border p-5 bg-light shadow ">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Nombre
                  </label>
                  <Field
                    className={`form-control ${
                      errors.nombre && touched.nombre && "is-invalid"
                    } `}
                    type="text"
                    placeholder="Ingresa tu nombre"
                    id="nombre"
                    name="nombre"
                  />
                  {errors.nombre && touched.nombre ? (
                    <div className="alert alert-warning">{errors.nombre}</div>
                  ) : null}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="" className="form-label fw-bold">
                    Identificación
                  </label>
                  <Field
                    className={`form-control ${
                      errors.identificacion &&
                      touched.identificacion &&
                      "is-invalid"
                    } `}
                    type="text"
                    placeholder="Ingresa tu identificacion"
                    id="identificacion"
                    name="identificacion"
                  />
                  {errors.nombre && touched.nombre ? (
                    <div className="alert alert-warning">{errors.nombre}</div>
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

export default Registro;
