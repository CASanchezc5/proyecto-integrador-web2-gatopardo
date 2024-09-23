import './Register.css'
import "../../index.css"
import Button from "../../components/Button";
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className="container-register">
      <div className="container-logo">
        <img  />
      </div>
      <form className="login-form" action="">
        <h1 className="title-register">Registro</h1>
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Contraseña" />
        <input type="email" placeholder="Correo Electronico" />
        <Button className="button" />  {/* <input type="button" value="Registrarse" /> */}
        <Link  className="link" to="/login">
          Si ya tienes cuenta inicia sesión aquí
        </Link>
        <Link className="link" to="/">
          Volver al inicio
        </Link>
      </form>
    </div>
  )
}

export default Register