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
        { id: 1, name: "Sara", age: 6, avatar: "/src/assets/nino2.jpg" },
        { id: 2, name: "Leo", age: 4, avatar: "/src/assets/nino3.jpg" },
        { id: 3, name: "Mia", age: 5, avatar: "/src/assets/nino.jpg" },
    ]);

    const parentName = localStorage.getItem("parentName") || "John";

    return (
        <div className="min-h-screen bg-[#FFFBEF]">

            {/* NAVBAR ESTÁNDAR */}
            <ParentNavbar />

            {/* CONTENIDO */}
            <div className="px-8 py-6">

                {/* TITULO */}
                <h2 className="text-3xl font-bold text-gray-800">
                    ¡Bienvenido, {parentName}!
                </h2>

                <p className="text-gray-600 mt-1">
                    Aquí tienes un resumen de la actividad de tus hijos.
                </p>

                {/* RESUMEN DE RUTINAS */}
                <h3 className="text-xl font-semibold mt-10 mb-4">
                    Resumen de Rutinas
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow flex flex-col">
                        <h4 className="font-semibold text-gray-700 mb-2">Rutinas Pendientes</h4>
                        <div className="flex items-center justify-between">
                            <span className="text-4xl font-bold text-yellow-600">
                                {summary.pending}
                            </span>
                            <span className="text-gray-500 text-sm">Rutinas por completar hoy</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow flex flex-col">
                        <h4 className="font-semibold text-gray-700 mb-2">Rutinas En Curso</h4>
                        <div className="flex items-center justify-between">
                            <span className="text-4xl font-bold text-blue-500">
                                {summary.inProgress}
                            </span>
                            <span className="text-gray-500 text-sm">Actualmente trabajando</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow flex flex-col">
                        <h4 className="font-semibold text-gray-700 mb-2">Rutinas Completadas</h4>
                        <div className="flex items-center justify-between">
                            <span className="text-4xl font-bold text-green-500">
                                {summary.completed}
                            </span>
                            <span className="text-gray-500 text-sm">Total acumulado</span>
                        </div>
                    </div>

                </div>

                {/* GRAFICO */}
                <h3 className="text-xl font-semibold mt-12 mb-4">
                    Progreso Semanal
                </h3>

                <div className="bg-white rounded-2xl shadow p-8 text-center">
                    <p className="text-gray-500">Aquí aparecerá la gráfica cuando existan rutinas registradas.</p>
                    <div className="h-40 bg-yellow-100 rounded mt-4"></div>
                </div>

                {/* SECCIÓN HIJOS */}
                <div className="flex justify-between items-center mt-12">
                    <h3 className="text-xl font-semibold">Tus Hijos</h3>

                    <button
                        onClick={() => navigate("/parent/dashboard/register")}
                        className="bg-yellow-400 px-4 py-2 rounded-full font-medium hover:bg-yellow-500 shadow"
                    >
                        Registrar nuevo hijo
                    </button>
                </div>

                {/* TARJETAS DE HIJOS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                    {children.map(child => (
                        <div
                            key={child.id}
                            className="bg-white rounded-2xl shadow p-6 text-center"
                        >
                            <img
                                src={child.avatar}
                                className="w-20 h-20 rounded-full mx-auto shadow"
                                alt="child avatar"
                            />

                            <h4 className="text-lg font-semibold mt-4">{child.name}</h4>
                            <p className="text-gray-500 text-sm">{child.age} años</p>

                            <button className="mt-4 w-full bg-yellow-400 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
                                Ver progreso
                            </button>

                            <button className="mt-2 w-full bg-gray-200 py-2 rounded-full font-medium hover:bg-gray-300 transition">
                                Editar datos del hijo
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
