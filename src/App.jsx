import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Gamification from "./components/Gamification";
import ParentControl from "./components/ParentControl";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const location = useLocation();

  // rutas donde NO debe aparecer navbar/footer
  const noLayoutRoutes = ["/login", "/register"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HowItWorks />
              <Benefits />
              <Gamification />
              <ParentControl />
            </>
          }
        />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
