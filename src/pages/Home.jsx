import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "./Home.css";
function Home() {
  return (
    <div>
      <Menu />
      {/* <h1 className="home-title">Home</h1> */}
      <div className="banner">
        <img src="public/banner.jpg" alt="" />
      </div>

    

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur a,
        nemo rerum, magni impedit atque aspernatur recusandae sapiente quas
        dolore et voluptatum dolorem aut velit architecto deserunt magnam?
        Animi, saepe!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur a,
        nemo rerum, magni impedit atque aspernatur recusandae sapiente quas
        dolore et voluptatum dolorem aut velit architecto deserunt magnam?
        Animi, saepe!
      </p>
      <Footer />
    </div>
  );
}
export default Home;
