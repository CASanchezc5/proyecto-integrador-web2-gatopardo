import Button from "../../components/Button";
import "./Login.css";
import "../../index.css"
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="container-login">
      <div className="container-logo">
        <Link to="/"> <img src="public/logito-gato-pardo-10.png" alt="" /></Link>
      </div>
      <form className="login-form" action="">
        <h1 className="title-login">Iniciar Sesión</h1>
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Contraseña" />
        <Button className="button" />     {/* <input type="button" value="Ingresar" /> */}
        <Link  className="link" to="/register">
          Si no tienes cuenta Regístrate aquí
        </Link>
        <Link className="link" to="/">
          Volver al inicio
        </Link>
      </form>
    </div>
  );
}

export default Login;
