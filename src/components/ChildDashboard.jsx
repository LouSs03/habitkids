import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChildDashboard() {
    const navigate = useNavigate();

    const childName = "Sarah"; // luego se reemplaza por datos reales

    return (
        <div className="min-h-screen bg-white px-6 py-6">


            {/* HEADER */}
            <header className="flex justify-between items-center w-full">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                        <img
                            src="/src/assets/caritafeliz.png"
                            alt="happy face"
                            className="w-7 h-7 object-contain invert"
                        />
                    </div>

                    <h1 className="text-xl font-bold text-yellow-600">
                        HabitKids
                    </h1>
                </div>

                {/* Logout (Nuevo Botón Moderno) */}
                <button
                    onClick={() => navigate("/login")}
                    className="w-14 h-14 flex items-center justify-center rounded-full 
               bg-yellow-400 hover:bg-yellow-500 shadow-lg 
               transition-all duration-200"
                    title="Cerrar sesión"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="black"
                        className="w-7 h-7"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                    </svg>
                </button>

            </header>

            {/* SALUDO */}
            <div className="mt-10 flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-200 rounded-full overflow-hidden flex items-center justify-center shadow">
                    <img
                        src="/src/assets/nino.jpg"
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="bg-white shadow px-4 py-2 rounded-xl font-semibold text-gray-700">
                    ¡Hola, {childName}!
                </p>
            </div>

            {/* CONTENEDORES PRINCIPALES */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Racha */}
                <div className="bg-[#FFFAE8] shadow rounded-3xl p-10 flex flex-col items-center text-center">
                    <p className="font-semibold text-gray-700 text-xl mb-4">
                        ¡Súper Racha!
                    </p>

                    <div className="flex items-center gap-3">
                        {/* Icono ✨ */}
                        <span className="text-yellow-500 text-3xl">✨</span>

                        {/* Número grande */}
                        <p className="text-6xl font-bold text-gray-900">7</p>

                        {/* Texto "días" */}
                        <span className="text-gray-700 text-2xl">días</span>
                    </div>
                </div>



                {/* Calendario */}
                <div className="bg-white shadow rounded-xl p-6">
                    <p className="font-semibold text-gray-700 mb-4">
                        Progreso de Noviembre
                    </p>

                    {/* Encabezado del calendario */}
                    <div className="grid grid-cols-7 text-center gap-2 text-gray-600 font-medium">
                        <span>Dom</span>
                        <span>Lun</span>
                        <span>Mar</span>
                        <span>Mié</span>
                        <span>Jue</span>
                        <span>Vie</span>
                        <span>Sáb</span>
                    </div>

                    {/* DÍAS */}
                    <div className="grid grid-cols-7 text-center gap-3 mt-3 text-gray-700">
                        {[
                            2, 3, 4, 5, 6, 7, 8,
                            9, 10, 11, 12, 13, 14, 15,
                            16, 17, 18, 19, 20, 21, 22,
                            23, 24, 25, 26, 27, 28, 29, 30
                        ].map((day) => (
                            <div
                                key={day}
                                className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer
                                    ${[5, 8, 12, 15, 20].includes(day)
                                        ? "bg-yellow-400 text-white font-bold shadow"
                                        : "hover:bg-gray-200 transition"
                                    }
                                `}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PROGRESO DE HOY */}
            <div className="mt-16 text-center">
                <p className="font-semibold text-gray-700">
                    Progreso de hoy: <span className="font-bold">3 de 5</span> tareas
                </p>

                {/* Barra de progreso */}
                <div className="w-full md:w-1/2 mx-auto mt-4 bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div className="bg-yellow-400 h-full w-[60%]"></div>
                </div>

                {/* Botón de ver rutinas */}
                <button
                    className="mt-6 bg-yellow-400 hover:bg-yellow-500 transition text-black px-6 py-3 rounded-full font-semibold shadow"
                    onClick={() => navigate("/child/routines")}
                >
                    Ver mis Rutinas de Hoy →
                </button>
            </div>
        </div>
    );
}
