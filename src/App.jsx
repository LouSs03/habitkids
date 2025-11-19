import { Routes, Route, useLocation } from "react-router-dom";

/* ----- COMPONENTES PÚBLICOS ----- */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Gamification from "./components/Gamification";
import ParentControl from "./components/ParentControl";

import Login from "./components/Login";
import Register from "./components/Register";

/* ----- DASHBOARDS ----- */
import ChildDashboard from "./components/ChildDashboard";
import ParentDashboard from "./components/ParentDashboard";

/* ----- PARENT: hijos ----- */
import RegisterChildPage from "./components/RegisterChildPage";
import ChildRegisterSuccess from "./components/ChildRegisterSuccess";

/* ----- PARENT: rutinas ----- */
import RegisterRoutine from "./components/RegisterRoutine";

/* ----- PARENT: configuración ----- */
import ParentSettings from "./components/ParentSettings";

function App() {
  const location = useLocation();

  /* ---------------------------
     RUTAS DONDE NO VA NAVBAR NI FOOTER
     --------------------------- */
  const noLayoutRoutes = [
    "/login",
    "/register",
    "/child/dashboard",

    // padre
    "/parent/dashboard",
    "/parent/dashboard/register",
    "/parent/dashboard/register/success",

    "/parent/routines",
    "/parent/settings"
  ];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {/* Mostrar navbar SOLO si la ruta lo permite */}
      {!hideLayout && <Navbar />}

      <Routes>
        {/* -------------------------- HOME -------------------------- */}
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

        {/* ------------------- LOGIN | REGISTER ------------------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ------------------- CHILD DASHBOARD ------------------- */}
        <Route path="/child/dashboard" element={<ChildDashboard />} />

        {/* ------------------- PARENT DASHBOARD ------------------- */}
        <Route path="/parent/dashboard" element={<ParentDashboard />} />

        {/* ------------------- REGISTRO DE HIJO ------------------- */}
        <Route path="/parent/dashboard/register" element={<RegisterChildPage />} />
        <Route path="/parent/dashboard/register/success" element={<ChildRegisterSuccess />} />

        {/* ------------------- RUTINAS DEL PADRE ------------------- */}
        <Route path="/parent/routines" element={<RegisterRoutine />} />

        {/* ------------------- CONFIGURACIÓN DEL PADRE ------------ */}
        <Route path="/parent/settings" element={<ParentSettings />} />
      </Routes>

      {/* Mostrar footer SOLO si la ruta lo permite */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
