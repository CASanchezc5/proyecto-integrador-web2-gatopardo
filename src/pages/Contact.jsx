import "./Contact.css";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import { v4 } from 'uuid';

const URL_CONTACTS = 'http://localhost:3000/messages'

function Contact() {
  const [stateName, setStateName] = useState("");
  const [stateEmail, setStateEmail] = useState("");
  const [stateSubject, setStateSubject] = useState("");
  const [stateMessage, setStateMessage] = useState("");


   // Función para manejar el envío del formulario
   const handleSubmit = (e) => {
    e.preventDefault(); // Evita el refresco de la página

    // Validación de campos vacíos
    if (!stateName || !stateEmail || !stateSubject || !stateMessage) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, complete todos los campos.",
        confirmButtonColor: "#cd890a",
      });
      return;
    }

    // Objeto de datos a enviar
    const contactData = {
      id: v4(),
      name: stateName,
      email: stateEmail,
      subject: stateSubject,
      message: stateMessage,
    };

    // Enviar los datos al servidor simulado
    fetch(URL_CONTACTS, {
      method: "POST",
      body: JSON.stringify(contactData),
    })
      .then((response) => response.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Gracias por contactarnos. Te responderemos pronto.",
          confirmButtonColor: "#054a61",
        });
        // Limpiar los campos del formulario
        setStateName("");
        setStateEmail("");
        setStateSubject("");
        setStateMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.",
          confirmButtonColor: "#cd890a",
        });
      });
  };

  return (
    <div className="container">
      <Menu />

      <h1 className="contact-title">Contacto</h1>
      <section className="contact-section">
        <form className="form-contact" onSubmit={handleSubmit} action="" method="">
          <label htmlFor="name">Nombre</label>
          <input type="text" value={stateName} onChange={(e) => setStateName(e.target.value)} />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" value={stateEmail} onChange={(e) => setStateEmail(e.target.value)} />

          <label htmlFor="subject">Asunto</label>
          <input type="text" value={stateSubject} onChange={(e) => setStateSubject(e.target.value)}  />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message"  rows="4" value={stateMessage}  onChange={(e) => setStateMessage(e.target.value)} ></textarea>

          <Button className="button" text="Enviar" onClick={handleSubmit} />  {/* <input type="button" value="Enviar" />, no se utiliza el value y se utiliza el text, para personalizar el texto, que va mediente una props */}
        </form>

        <div className="contact-info">
          <p><FaEnvelope color="#054a61" /> andresanta1981@gmail.com</p>
          <p><FaPhone color="#054a61" /> +57 310 515 4524</p>
          {/* <p><FaLocationDot color="#054a61" /> Calle Falsa 123, Ciudad, País</p> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
