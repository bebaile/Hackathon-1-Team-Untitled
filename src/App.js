import React from "react";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import { MainContextProvider } from "./contexts/MainContext";

const App = () => {
  //const [isOnline, setIsOnline] = useState(false);

  // a mettre dans les composants enfants
  //const { isOnline, setIsOnline } = useContext(MainContext);

  return (
    <>
      <MainContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </MainContextProvider>
    </>
  );
};

export default App;
