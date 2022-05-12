import React from "react"; 

  const database = [
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
  ];

export default function Login() {
  return(
  <div className="login-wrapper">
    <h1>Veuillez vous connecter</h1>
    <form>
      <label>
        <p>Nom Utilisateur</p>
        <input type="text" />
      </label>
      <label>
        <p>Mot de Passe</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Soumettre</button>
      </div>
    </form>
  </div> 
  )
}