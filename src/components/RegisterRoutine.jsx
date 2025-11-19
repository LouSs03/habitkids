import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterRoutine() {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState(0);

  const icons = [
    { id: 0, img: "/src/assets/iconos-rutina/pincel.png" },
    { id: 1, img: "/src/assets/iconos-rutina/libro.png" },
    { id: 2, img: "/src/assets/iconos-rutina/cama.png" },
    { id: 3, img: "/src/assets/iconos-rutina/mano.png" },
    { id: 4, img: "/src/assets/iconos-rutina/planta.png" },
    { id: 5, img: "/src/assets/iconos-rutina/comida.png" },
    { id: 6, img: "/src/assets/iconos-rutina/hablar.png" },
    { id: 7, img: "/src/assets/iconos-rutina/sol.png" },
    { id: 8, img: "/src/assets/iconos-rutina/huella.png" },
    { id: 9, img: "/src/assets/iconos-rutina/pieza.png" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEF]">

      {/* 🔸 NAVBAR PADRE */}
      <nav className="w-full bg-[#FFFBEF] border-b border-gray-200 py-4 px-8 flex items-center justify-between">

        {/* IZQUIERDA: LOGO + MENÚ */}
        <div className="flex items-center gap-10">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/parent/dashboard")}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow">
              <img src="/src/assets/caritafeliz.png" alt="logo" className="w-7 invert" />
            </div>

            <span className="text-xl font-bold text-yellow-600">HabitKids</span>
          </div>

          {/* MENÚ */}
          <div className="flex items-center gap-8">

            <button
              className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 rounded-lg px-3 py-2 font-medium bg-white"
              onClick={() => navigate("/parent/dashboard")}
            >
              <i className="fa-solid fa-house text-lg"></i>
              Dashboard
            </button>

            {/* Rutinas → ya enlazado */}
            <button
              className="flex items-center gap-2 text-yellow-600 font-semibold rounded-lg px-3 py-2 bg-white"
              onClick={() => navigate("/parent/routines")}
            >
              <i className="fa-solid fa-list-check text-lg"></i>
              Rutinas
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 rounded-lg px-3 py-2 bg-white font-medium">
              <i className="fa-solid fa-user-group text-lg"></i>
              Hijos
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 rounded-lg px-3 py-2 bg-white font-medium">
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

      {/* 🔸 CONTENIDO PRINCIPAL */}
      <div className="flex flex-col items-center py-12 px-4">

        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Registrar Nueva Rutina
        </h1>

        {/* CARD */}
        <div className="bg-white w-full max-w-3xl rounded-3xl shadow-lg p-10 border border-gray-200">

          {/* Nombre */}
          <label className="font-medium text-gray-700">Nombre de la Rutina</label>
          <input
            type="text"
            placeholder="Ej. Lavarse los dientes"
            className="w-full mt-2 mb-6 px-4 py-3 rounded-xl bg-gray-100 text-gray-700"
          />

          {/* Asignar Niño */}
          <label className="font-medium text-gray-700">Asignar a Niño(a)</label>
          <select className="w-full mt-2 mb-6 px-4 py-3 rounded-xl bg-gray-100 text-gray-700">
            <option>Seleccionar niño(a)</option>
            <option>Sara</option>
            <option>Leo</option>
            <option>Mia</option>
          </select>

          {/* Tiempo */}
          <p className="font-medium text-gray-700 mb-2">Configuración de Tiempo</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-600">Hora de Inicio</label>
              <input
                type="time"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Duración (minutos)</label>
              <input
                type="number"
                placeholder="15"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700"
              />
            </div>
          </div>

          {/* Íconos */}
          <p className="font-medium text-gray-700 mb-3">Ícono / Categoría</p>

          <div className="grid grid-cols-5 gap-4 mb-8">
            {icons.map((icon) => (
              <button
                key={icon.id}
                onClick={() => setSelectedIcon(icon.id)}
                className={`w-16 h-16 flex items-center justify-center rounded-xl border transition
                  ${
                    selectedIcon === icon.id
                      ? "bg-yellow-200 border-yellow-400 shadow"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                <img src={icon.img} className="w-8 h-8 object-contain" />
              </button>
            ))}
          </div>

          {/* Alarma */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-medium text-gray-700">Activar Alarma</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-yellow-400 transition"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></span>
            </label>
          </div>

          {/* Botón Guardar */}
          <button
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 shadow transition"
          >
            Guardar Rutina
          </button>

        </div>
      </div>
    </div>
  );
}
