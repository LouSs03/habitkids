import { Routes, Route, useLocation } from "react-router-dom";

/* ----- COMPONENTES PÚBLICOS ----- */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Gamification from "./components/Gamification";
import ParentControl from "./components/ParentControl";
import PromoVideo from "./components/PromoVideo";

import Login from "./components/Login";
import Register from "./components/Register";
import Plans from "./components/Plans";


/* ----- DASHBOARDS ----- */
import ChildDashboard from "./components/ChildDashboard";
import ParentDashboard from "./components/ParentDashboard";
import TodayPath from "./components/TodayPath";

/* ----- PARENT COMPONENTS ----- */
import RegisterChildPage from "./components/RegisterChildPage";
import ChildRegisterSuccess from "./components/ChildRegisterSuccess";
import ParentRoutines from "./components/ParentRoutines";
import RegisterRoutine from "./components/RegisterRoutine";
import ParentSettings from "./components/ParentSettings";
import ParentNavbar from "./components/ParentNavbar";
import RoutineTimer from "./components/RoutineTimer";
import CongratsScreen from "./components/CongratsScreen";




function App() {
  const location = useLocation();

  /* --- RUTAS QUE USAN NAVBAR DEL PADRE --- */
  const parentRoutes = [
    "/parent/dashboard",
    "/parent/dashboard/register",
    "/parent/dashboard/register/success",

    "/parent/routines",
    "/parent/routines/create",

    "/parent/settings",
  

  ];

  /* --- RUTAS SIN NINGÚN NAVBAR (login, register, niño) --- */
  const noNavbarRoutes = [
    "/login",
    "/register",
    "/child/dashboard",
    "/child/today",
    "/child/today/timer",
    "/child/congrats",
  ];

  const isParentRoute = parentRoutes.includes(location.pathname);
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* ----- NAVBARS ----- */}
      {!hideNavbar && !isParentRoute && <Navbar />}
      {isParentRoute && <ParentNavbar />}

      {/* ----- TODAS LAS RUTAS ----- */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HowItWorks />
              <PromoVideo />
              <Benefits />
              <Plans />
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

        {/* RUTA DEL CAMINO DE HOY */}
        <Route path="/child/today" element={<TodayPath />} />

        {/* DASHBOARD PADRE */}
        <Route path="/parent/dashboard" element={<ParentDashboard />} />

        {/* REGISTRO DE HIJOS */}
        <Route path="/parent/dashboard/register" element={<RegisterChildPage />} />
        <Route path="/parent/dashboard/register/success" element={<ChildRegisterSuccess />} />

        {/* RUTINAS */}
        <Route path="/parent/routines" element={<ParentRoutines />} />
        <Route path="/parent/routines/create" element={<RegisterRoutine />} />

        {/* CONFIGURACIÓN PADRE */}
        <Route path="/parent/settings" element={<ParentSettings />} />

        <Route path="/child/today/timer" element={<RoutineTimer />} />
        <Route path="/child/congrats" element={<CongratsScreen />} />



      </Routes>

      {/* ----- FOOTER SOLO EN PÁGINAS PÚBLICAS ----- */}
      {!hideNavbar && !isParentRoute && <Footer />}
    </>
  );
}

export default App;
