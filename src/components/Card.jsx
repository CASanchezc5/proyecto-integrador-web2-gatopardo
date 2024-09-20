import "./Card.css";

const Card = () => {
  return (
    <div className="container-card">
      <figure className="figure-card">
        <img className="img-card" src="public/_MG_5633.jpg" alt="img" />
      </figure>
      <p className="paragraph-card">
        <span className="span-card-title">Subtitulo taller</span>
        <span className="span-card-description">
          Descripcion del taller Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Velit ipsum ullam iure vero omnis fugit eos
          molestiae possimus ex ipsa, nesciunt quibusdam architecto dolorem!
          Nesciunt labore itaque possimus expedita vero. molestiae possimus ex ipsa, nesciunt quibusdam architecto dolorem! Nesciunt labore itaque possimus expedita vero.
        </span>
      </p>
      {/* <div>
        <input type="button" value="Ver más" />
      </div> */}
    </div>
  );
};

export default Card;
