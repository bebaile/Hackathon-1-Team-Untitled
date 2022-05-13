import React from "react";

/* const database = [
   {
     username: "Olivier",
     password: "Pochic"
   },
   {
     username: "Ali",
     password: "Belala"
   },
   {
     username: "Basile",
     password: "Carle"
   },
   {
     username: "Audren",
     password: "Floch"
   },
   {
     username: "Stephane",
     password: "Feroussier"
   }
 ];*/


const handleSubmit = (event) => {
  event.preventDefault();
}


export default function Login() {

  return (
    <div className="container">
      <div className="login-wrapper">
        <h1>Veuillez vous connecter</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_body">
            <div className="body_form">
              <label className="info">Nom Utilisateur :</label>
              <input className="input" type="text" name="" />
            </div>
            <div className="body_form">
              <label className="info">Mot de Passe :</label>
              <input className="input" type="password" />
            </div>
            <div>
              <label className="body_form">Votre message :</label>
              <textarea id="message" name="message" placeholder="Parlez-nous un peu de vos motivations écologiques..."></textarea>
            </div>
          </div>
          <div className="sb">
            <button className="submit_button" type="submit" onSubmit={handleSubmit}>Soumettre</button>
          </div>
        </form>
      </div>
    </div>
  )
}