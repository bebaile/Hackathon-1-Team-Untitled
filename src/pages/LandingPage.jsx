import React, { useState, useContext } from "react";
//import { MainContext } from "../contexts/MainContext";
//const { isOnline, setIsOnline } = useContext(MainContext);
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const LandingPage = () => {
  const [isLogging, setIsLogging] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsLogging(!isLogging);
  };

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" className="img-logo" />
      </div>
      <div className="About">
        <h1> À propos</h1>
        <p>
          Ce site à été crée afin de sensibiliser la population à
          l'éco-responsabilité.
          <br />
          Ce site vous permettra d'en savoir un peu plus sur la qualité de l'air
          et de l'eau près de chez vous (où dans une zone que vous aurez choisi)
          et ainsi agir en conséquence de manière éco-responsable.
          <br />
          En créant votre compte vous pourrez facilement retrouver les endroits
          ciblés auparavant en les mettant en favoris.
        </p>
      </div>
      <div className="Sign-in">
        <Link to="/Connexion">
          <button
            onClick={handleClick}
            type="button"
            placeholder="Connecte-toi"
          >
            Connecte toi{" "}
          </button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
