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

  return(
  <div className="container">
    <div className="login-wrapper">
      <h1>Veuillez vous connecter</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="info">Nom Utilisateur</p>
          <input className="input" type="text" name="" />
        </label>
        <label>
          <p className="info">Mot de Passe</p>
          <input className="input"  type="password"/>
        </label>
        <div>
          <button type="submit" onSubmit={handleSubmit}>Soumettre</button>
        </div>
      </form>
    </div>  
  </div>
  )
}