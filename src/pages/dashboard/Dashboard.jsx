// src/pages/Dashboard.jsx
import "./Dashboard.css";
import { FaHome, FaUser, FaPalette , FaEnvelopeOpenText } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <main className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* <h2>Dashboard</h2> */}

        <Link to="/" className="nav-link">
          <FaHome className="icon" /> Inicio
        </Link>
        <Link to="profile" className="nav-link">
          <FaUser className="icon" /> Perfil
        </Link>
        <Link to="analytics" className="nav-link">
          <FaPalette  className="icon" /> Talleres
        </Link>
        <Link to="messages" className="nav-link">
            <FaEnvelopeOpenText className="icon" /> Mensajes
        </Link>
      </aside>

      {/* Main Content */}

      <section className="content-dashboard">
        <span className="glass"></span>
        <h1>¡Bienvenido al Dashboard!</h1>
        {/* <p>
          Bienvenido al panel de administración. Aquí podrás acceder rápidamente
          a tus datos, gestionar tu perfil y revisar las estadísticas de
          rendimiento. Usa el menú lateral para navegar y explorar las distintas
          funcionalidades disponibles.
        </p> */}
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
