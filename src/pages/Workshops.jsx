import Card from "../components/Card"
import Menu from "../components/Menu"
import "./Workshops.css"


function Workshops() {
  return (
    <div className="wokshops-container">
      <Menu />
      {/* <h1 className="workshops-title">Talleres</h1> */}
      <img className="img-wokshops" src="public/logito-gato-pardo-14.png" alt="" />
      {/* <img className="img-wokshops" src="public/logito-gato-pardo-03.png" alt="" /> */}
      <div className="container-cards">
        <Card /> 
        <Card /> 
      </div>
    </div>
  )
}

export default Workshops