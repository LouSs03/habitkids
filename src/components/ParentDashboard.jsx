import { useState } from "react";
import ParentNavbar from "./ParentNavbar";
import { useNavigate } from "react-router-dom";

export default function ParentDashboard() {
  const navigate = useNavigate();

  const [summary] = useState({
    pending: 3,
    inProgress: 1,
    completed: 12,
  });

  const [children] = useState([
    { id: 1, name: "Sara", age: 8, avatar: "/src/assets/nino2.jpg" },
    { id: 2, name: "Leo", age: 6, avatar: "/src/assets/nino3.jpg" },
    { id: 3, name: "Mia", age: 10, avatar: "/src/assets/nino.jpg" },
  ]);

  const parentName = localStorage.getItem("parentName") || "John";

  return (
    <div className="min-h-screen bg-[#FFFBEF]">

      {/* CONTENIDO */}
      <div className="px-10 py-6 text-gray-800">

        {/* TITULO BIENVENIDA */}
        <h1 className="text-3xl font-bold text-yellow-600">¡Bienvenido, {parentName}!</h1>
        <p className="text-gray-500 mt-1 text-[15px]">
          Aquí tienes un resumen de la actividad de tus hijos.
        </p>

       {/* ------------------------------------
            RESUMEN DE RUTINAS
       ------------------------------------ */}
        <h2 className="text-lg font-semibold mt-10 mb-3 text-gray-800">
          Resumen de Rutinas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ----------------- PENDIENTES ----------------- */}
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
            <div className="flex items-center gap-2">
              <img src="/src/assets/icon_hourglass.png" className="w-6" />
              <h3 className="font-semibold text-gray-700 text-[15px]">Rutinas Pendientes</h3>
            </div>

            <div className="flex items-end justify-between mt-3">
              <span className="text-5xl font-bold text-yellow-600">{summary.pending}</span>
              <p className="text-[13px] text-gray-500 text-right">Rutinas por completar hoy</p>
            </div>
          </div>

          {/* ----------------- EN CURSO ----------------- */}
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
            <div className="flex items-center gap-2">
              <img src="/src/assets/icon_play.png" className="w-6" />
              <h3 className="font-semibold text-gray-700 text-[15px]">Rutinas En Curso</h3>
            </div>

            <div className="flex items-end justify-between mt-3">
              <span className="text-5xl font-bold text-blue-500">{summary.inProgress}</span>
              <p className="text-[13px] text-gray-500 text-right">Actualmente trabajando</p>
            </div>
          </div>

          {/* ----------------- COMPLETADAS ----------------- */}
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
            <div className="flex items-center gap-2">
              <img src="/src/assets/icon_check.png" className="w-6" />
              <h3 className="font-semibold text-gray-700 text-[15px]">Rutinas Completadas</h3>
            </div>

            <div className="flex items-end justify-between mt-3">
              <span className="text-5xl font-bold text-green-500">{summary.completed}</span>
              <p className="text-[13px] text-gray-500 text-right">Total acumulado</p>
            </div>
          </div>

        </div>

        {/* ------------------------------------
            PROGRESO SEMANAL
        ------------------------------------ */}
        <h2 className="text-lg font-semibold mt-12 mb-3 text-gray-800">
          Progreso Semanal
        </h2>

        <div className="bg-white border border-gray-200 rounded-2xl shadow p-8">
          <p className="text-gray-500 text-[14px] text-center">
            Aquí aparecerá la gráfica cuando existan rutinas registradas.
          </p>

          <div className="h-52 bg-yellow-100 mt-4 rounded-xl"></div>
        </div>

        {/* ------------------------------------
            TUS HIJOS
        ------------------------------------ */}
        <div className="flex justify-between items-center mt-12">
          <h2 className="text-lg font-semibold text-gray-800">Tus Hijos</h2>

          <button
            onClick={() => navigate("/parent/dashboard/register")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full shadow font-medium"
          >
            Registrar nuevo hijo
          </button>
        </div>

        {/* TARJETAS HIJOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {children.map((child) => (
            <div key={child.id} className="bg-white border border-gray-200 rounded-2xl shadow p-6 text-center">

              <img
                src={child.avatar}
                className="w-20 h-20 rounded-full mx-auto shadow-lg object-cover"
              />

              <h3 className="text-xl font-semibold mt-4 text-gray-800">{child.name}</h3>
              <p className="text-gray-500 text-sm">{child.age} años</p>

              <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-medium shadow">
                Ver progreso
              </button>

              <button className="mt-2 w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-full font-medium">
                Editar datos del hijo
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
