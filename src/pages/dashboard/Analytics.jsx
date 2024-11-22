import './Analytics.css'
import { FaTools  } from 'react-icons/fa';


const Analytics = () => {
  return (
    <div className='analytics-page'>

      <FaTools className="card-icon" />
   
      <h2 className="title-profile">Mis Talleres</h2>

      {/* Cards */}
      <div className="cards-container">
        <div className="card-analitycs">
          {/* <FaChartLine className="card-icon" /> */}
          <h3>Taller de Carvado de Sellos</h3>
          <p>Precio: $ 100000.</p>
          <p>Duración: 1 hora.</p>
          <p>Fecha: 02/12/2024.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Analytics;
