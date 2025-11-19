import { useNavigate, useLocation } from "react-router-dom";

export default function ParentNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Para resaltar el botón activo
  const isActive = (path) =>
    location.pathname === path ? "text-yellow-600 font-semibold" : "text-gray-700";

  return (
    <nav className="w-full bg-[#FFFBEF] border-b border-gray-200 py-4 px-8 flex items-center justify-between">

      {/* IZQUIERDA: Logo + Menú */}
      <div className="flex items-center gap-10">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/parent/dashboard")}
        >
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow">
            <img src="/src/assets/caritafeliz.png" alt="logo" className="w-7 invert" />
          </div>

          <span className="text-xl font-bold text-yellow-600">Habit Kids</span>
        </div>

        {/* MENÚ */}
        <div className="flex items-center gap-8">

          {/* DASHBOARD */}
          <button
            className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium bg-white hover:text-yellow-600 ${isActive("/parent/dashboard")}`}
            onClick={() => navigate("/parent/dashboard")}
          >
            <i className="fa-solid fa-house text-lg"></i>
            Dashboard
          </button>

          {/* RUTINAS → Va al RegisterRoutine */}
          <button
            className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium bg-white hover:text-yellow-600 ${isActive("/parent/routines")}`}
            onClick={() => navigate("/parent/routines")}
          >
            <i className="fa-solid fa-list-check text-lg"></i>
            Rutinas
          </button>

          {/* HIJOS */}
          <button
            className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium bg-white hover:text-yellow-600 ${isActive("/parent/children")}`}
            onClick={() => navigate("/parent/children")}
          >
            <i className="fa-solid fa-user-group text-lg"></i>
            Hijos
          </button>

          {/* NOTIFICACIONES */}
          <button
            className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium bg-white hover:text-yellow-600 ${isActive("/parent/notifications")}`}
            onClick={() => navigate("/parent/notifications")}
          >
            <i className="fa-solid fa-bell text-lg"></i>
            Notificación
          </button>

          {/* CONFIG */}
          <button
            className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium bg-white hover:text-yellow-600 ${isActive("/parent/settings")}`}
            onClick={() => navigate("/parent/settings")}
          >
            <i className="fa-solid fa-gear text-lg"></i>
            Configuración
          </button>
        </div>
      </div>

      {/* LOGOUT */}
      <button
        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow hover:bg-red-50 transition"
        onClick={() => navigate("/login")}
      >
        <i className="fa-solid fa-right-from-bracket text-red-500 text-xl"></i>
      </button>
    </nav>
  );
}
