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

/* ----- PARENT COMPONENTS ----- */
import RegisterChildPage from "./components/RegisterChildPage";
import ChildRegisterSuccess from "./components/ChildRegisterSuccess";
import ParentRoutines from "./components/ParentRoutines";
import RegisterRoutine from "./components/RegisterRoutine";
import ParentSettings from "./components/ParentSettings";
import ParentNavbar from "./components/ParentNavbar";


function App() {
  const location = useLocation();

  /* Rutas que usan el NAVBAR del padre */
  const parentRoutes = [
    "/parent/dashboard",
    "/parent/dashboard/register",
    "/parent/dashboard/register/success",

    "/parent/routines",
    "/parent/routines/create",

    "/parent/settings",
  ];

  /* Rutas que NO usan ningún navbar (login, register, niño) */
  const noNavbarRoutes = [
    "/login",
    "/register",
    "/child/dashboard",
  ];

  const isParentRoute = parentRoutes.includes(location.pathname);
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* NAVBAR: público, padre o ninguno */}
      {!hideNavbar && !isParentRoute && <Navbar />}
      {isParentRoute && <ParentNavbar />}

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

        {/* LOGIN | REGISTER */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD NIÑO */}
        <Route path="/child/dashboard" element={<ChildDashboard />} />

        {/* PADRE */}
        <Route path="/parent/dashboard" element={<ParentDashboard />} />

        {/* HIJOS */}
        <Route path="/parent/dashboard/register" element={<RegisterChildPage />} />
        <Route path="/parent/dashboard/register/success" element={<ChildRegisterSuccess />} />

        {/* RUTINAS */}
        <Route path="/parent/routines" element={<ParentRoutines />} />
        <Route path="/parent/routines/create" element={<RegisterRoutine />} />

        {/* CONFIGURACIÓN */}
        <Route path="/parent/settings" element={<ParentSettings />} />

      </Routes>

      {/* FOOTER solo en páginas públicas */}
      {!hideNavbar && !isParentRoute && <Footer />}
    </>
  );
}

export default App;
