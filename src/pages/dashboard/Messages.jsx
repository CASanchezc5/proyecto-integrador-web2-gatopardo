import "./Messages.css";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { useState, useEffect } from "react";

const URL_CONTACTS = "http://localhost:3000/messages";

const Messages = () => {
  const [stateMessages, setStateMessages] = useState([]);

  function getMessages() {
    fetch(URL_CONTACTS)
      .then((response) => response.json())
      .then((json) => setStateMessages(json));
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="messages-page">
      <FaEnvelopeOpenText className="card-icon-messages" />
      <h2 className="title-messages">Mensajes</h2>
      
        <div className="cards-container">
        {
          stateMessages.map((itemMessage)=>(
            <div key={itemMessage.id} className="cards-container">
              <h3>Nombre: {itemMessage.name}</h3>
              <p>Correo Electronico: {itemMessage.email}</p>
              <p>Asusnto: {itemMessage.subject}</p>
              <p>Mensaje: {itemMessage.message}</p>
            </div>
          ))
        }
        </div>
    </div>
  );
};

export default Messages;
