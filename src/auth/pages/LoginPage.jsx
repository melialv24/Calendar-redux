import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore, useForm } from "../../hooks";
import "./LoginPage.css";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerEmail: "",
  registerName: "",
  registerPassword: "",
  registerPassword2: "",
};

export const LoginPage = () => {
  const { startLogin, errorMessage, startRegister } = useAuthStore();

  const {
    loginEmail,
    loginPassword,
    onInputChange: changeLogin,
  } = useForm(loginFormFields);
  const {
    registerEmail,
    registerName,
    registerPassword,
    registerPassword2,
    onInputChange: changeRegister,
  } = useForm(registerFormFields);

  const loginSubmit = (e) => {
    e.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if (registerPassword !== registerPassword2) {
      Swal.fire("Register Error", "Las contraseñas deben ser iguales", "error");
      return;
    }
    startRegister({
      email: registerEmail,
      password: registerPassword,
      name: registerName,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Login Error", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={changeLogin}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={changeLogin}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={registerName}
                onChange={changeRegister}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={changeRegister}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={changeRegister}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={changeRegister}
              />
            </div>

            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
