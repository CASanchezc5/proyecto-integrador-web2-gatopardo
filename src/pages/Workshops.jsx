import Card from "../components/Card"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "./Workshops.css"


function Workshops() {
  return (
    <div className="container">
      <Menu />
      {/* <h1 className="workshops-title">Talleres</h1> */}
      {/* <img className="img-wokshops" src="public/logito-gato-pardo-14.png" alt="" /> */}
      

      <div class="slider-box">
        <ul>
          <li>
            <img src="public/slider1.jpg" alt="" />
            <div class="texto">
              {/* <h2>Imagen 1</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quaerat ducimus odit voluptate. </p> */}
            </div>
          </li>
          <li>
            <img src="public/slider2.jpg" alt="" />
            <div class="texto">
              {/* <h2>Imagen 2</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quaerat ducimus odit voluptate. </p> */}
            </div>
          </li>
          <li>
            <img src="public/slider3.jpg" alt="" />
            <div class="texto">
              {/* <h2>Imagen 3</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quaerat ducimus odit voluptate. </p> */}
            </div>
          </li>
          <li>
            <img src="public/slider4.jpg" alt="" />
            <div class="texto">
              {/* <h2>Imagen 4</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quaerat ducimus odit voluptate. </p> */}
            </div>
          </li>
        </ul>
      </div>

      <div className="container-cards">
        <Card /> 
        <Card /> 
      </div>

      <Footer />
    </div>
  )
}

export default Workshops