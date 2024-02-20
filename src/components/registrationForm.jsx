import { useState } from "react";

export const RegistrationForm = () => {
  const initValues = {
    name: "",
    telephone: "",
    email: "",
    adress: "",
  };

  let [values, setValues] = useState(initValues);

  const inputManipulator = (e) => {
    let { name , value } = e.target

    setValues({
        ...values, 
        [name]: value
    })
  }
  
  const formManipulator = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form autoComplete="off" onSubmit={formManipulator}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>

          <input
            className="form-control"
            placeholder="Nome Completo"
            type="text"
            name="name"
            value={values.name}
            onChange={inputManipulator}
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-phone"></i>
                </div>
              </div>

              <input
                className="form-control"
                placeholder="Telefone"
                type="text"
                name="telephone"
                value={values.telephone}
                onChange={inputManipulator}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>

              <input
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={inputManipulator}
              />
            </div>
          </div>
        </div>
        <textarea
                className="form-control"
                placeholder="Endereço"
                type="adress"
                name="adress"
                value={values.adress}
                onChange={inputManipulator}
              />
      </form>
    </>
  );
};
