import React, { useState } from "react";

export default function Register() {
  const [tipo, setTipo] = useState("padre");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      {/* CARD PRINCIPAL */}
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* ---------------- COLUMNA IZQUIERDA ---------------- */}
        <div className="px-10 py-10 flex flex-col justify-center">

          {/* BOTÓN VOLVER */}
          <button
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2 mb-6 w-fit 
             bg-white border border-gray-300 text-gray-700 
             px-4 py-2 rounded-full shadow-sm
             hover:shadow-md hover:bg-gray-50 transition-all"
          >
            <span className="text-xl">←</span>
            <span className="font-medium">Volver</span>
          </button>


          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <img src="/src/assets/caritafeliz.png" className="w-6 h-6 invert" />
            </div>
            <span className="text-2xl font-bold text-yellow-400">HabitKids</span>
          </div>

          {/* SWITCH PADRE / NIÑO */}
          <div className="w-full bg-white border border-gray-300 rounded-full shadow-inner flex items-center p-1 mb-10">

            {/* Botón Padre */}
            <button
              onClick={() => setTipo("padre")}
              className={`flex-1 text-center py-2 rounded-full font-semibold transition-all ${tipo === "padre"
                  ? "bg-yellow-400 text-black shadow border border-yellow-400"
                  : "bg-white text-gray-700"
                }`}
            >
              Padre
            </button>

            {/* Botón Niño */}
            <button
              onClick={() => setTipo("niño")}
              className={`flex-1 text-center py-2 rounded-full font-semibold transition-all ${tipo === "niño"
                  ? "bg-yellow-400 text-black shadow border border-yellow-400"
                  : "bg-white text-gray-700"
                }`}
            >
              Niño
            </button>

          </div>

          {/* TÍTULO */}
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            {tipo === "padre" ? "Crea tu cuenta" : "Crea una cuenta para el Niño"}
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            {tipo === "padre"
              ? "Regístrate para gestionar hábitos y recompensas"
              : "Asocia la cuenta del niño al padre para controlar sus hábitos"}
          </p>

          {/* FORMULARIO */}
          <form className="space-y-6">

            {/* Campo SOLO en modo Niño */}
            {tipo === "niño" && (
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Usuario del Padre
                </label>
                <input
                  type="text"
                  placeholder="Ingresa el nombre del padre"
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            )}

            {/* Nombre */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                {tipo === "padre" ? "Nombre Completo" : "Nombre del Niño"}
              </label>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email solo para PADRE */}
            {tipo === "padre" && (
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            )}

            {/* Contraseña */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Mínimo 8 caracteres"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* BOTÓN SUBMIT */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition"
            >
              Crear Cuenta
            </button>
          </form>

          {/* YA TIENES CUENTA */}
          <button
            onClick={() => window.location.href = "/login"}
            className="mt-6 text-sm text-gray-600 hover:text-black"
          >
            ¿Ya tienes una cuenta?
          </button>

        </div>

        {/* ------------------ COLUMNA DERECHA ------------------ */}
        {/* ------------------ COLUMNA DERECHA ------------------ */}
        <div className="bg-yellow-300 flex justify-center items-center p-10 
                relative min-h-[350px] 
                lg:min-h-full 
                w-full h-full">

          <img
            src="/src/assets/coheteee.webp"
            className="w-full max-w-[420px] object-contain drop-shadow-lg"
          />
        </div>


      </div>
    </div>
  );
}
