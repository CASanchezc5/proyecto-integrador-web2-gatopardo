import "./Contact.css";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Menu from "../components/Menu";
import Button from "../components/Button";

function Contact() {
  return (
    <div>
      <Menu />

      <h1 className="contact-title">Contacto</h1>
      <section className="contact-section">
        <form className="form-contact" action="" method="">
          <label htmlFor="name">Nombre</label>
          <input type="text" />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" />

          <label htmlFor="subject">Asunto</label>
          <input type="text"  />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message"  rows="4" ></textarea>

          <Button className="button" />  {/* <input type="button" value="Enviar" /> */}
        </form>

        <div className="contact-info">
          <p><FaEnvelope color="#054a61" /> contacto@ejemplo.com</p>
          <p><FaPhone color="#054a61" /> +34 123 456 789</p>
          <p><FaLocationDot color="#054a61" /> Calle Falsa 123, Ciudad, País</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
