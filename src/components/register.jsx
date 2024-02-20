import { RegistrationForm } from "./registrationForm";

export const Register = () => {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3" bis_skin_checked="1">
      <div className="container-fluid py-5" bis_skin_checked="1">
        <h1 className="display-5 fw-bold">Cadastro de Pacientes</h1>
        <p className="col-md-8 fs-4">Esse é o modelo de cadastro.</p>        
      </div>

      <div className="row">
          <div className="col-md-5">
                <RegistrationForm/>
          </div>
          <div className="col-md-7">
            <h2>Lista de Pacientes</h2>
          </div>
        </div>
    </div>
    
  );
};
