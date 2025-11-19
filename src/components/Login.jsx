import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("padre"); 
  const [emailOrName, setEmailOrName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!emailOrName || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (tipo === "padre") {
      // Guardar nombre del padre para mostrarlo en el dashboard
      localStorage.setItem("parentName", emailOrName);

      navigate("/parent/dashboard");
    } else {
      // login del niño
      localStorage.setItem("childName", emailOrName);

      navigate("/child/dashboard");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 px-4">

      {/* BOTÓN VOLVER — Mejorado */}
      <button
        onClick={() => navigate("/")}
        className="absolute z-50 top-8 left-6 flex items-center gap-2 bg-white text-gray-700 
          px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
      >
        <span className="text-lg">←</span>
        <span className="text-sm font-medium">Volver</span>
      </button>

      {/* CONTENEDOR CENTRAL */}
      <div className="flex flex-col items-center justify-center py-16">

        {/* LOGO */}
        <div className="flex items-center gap-2 mb-8 mt-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/src/assets/caritafeliz.png"
              alt="happy face"
              className="w-7 h-7 object-contain invert"
            />
          </div>
          <span className="text-2xl font-bold" style={{ color: "#FACC15" }}>
            HabitKids
          </span>
        </div>

        {/* SWITCH PADRE / NIÑO */}
        <div className="bg-white shadow-md rounded-full flex p-1 mb-6">
          <button
            onClick={() => setTipo("padre")}
            className={`px-6 py-2 rounded-full font-medium transition-all border ${
              tipo === "padre"
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            Padre
          </button>

          <button
            onClick={() => setTipo("niño")}
            className={`px-6 py-2 rounded-full font-medium transition-all border ${
              tipo === "niño"
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            Niño
          </button>
        </div>

        {/* CARD DE LOGIN */}
        <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">

          {/* Títulos */}
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {tipo === "padre"
              ? "¡Bienvenido de nuevo, Padre!"
              : "¡Bienvenido de nuevo, Niño!"}
          </h2>

          <p className="text-gray-600 text-sm mb-6">
            {tipo === "padre"
              ? "Accede para gestionar hábitos y recompensas"
              : "Ingresa a tus misiones y aventuras divertidas ⭐"}
          </p>

          {/* FORMULARIO */}
          <form className="mt-4 space-y-5" onSubmit={handleLogin}>

            {/* EMAIL / NOMBRE */}
            <div className="text-left">
              <label className="text-sm font-medium text-gray-700">
                {tipo === "padre" ? "Correo Electrónico" : "Nombre de Usuario"}
              </label>

              <input
                type={tipo === "padre" ? "email" : "text"}
                placeholder={
                  tipo === "padre"
                    ? "Introduce tu correo electrónico"
                    : "Introduce tu nombre"
                }
                value={emailOrName}
                onChange={(e) => setEmailOrName(e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black 
                focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* CONTRASEÑA */}
            <div className="text-left">
              <label className="text-sm font-medium text-gray-700">
                Contraseña
              </label>

              <input
                type="password"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black
                focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* BOTÓN */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition"
            >
              {tipo === "padre" ? "Iniciar Sesión" : "Entrar a mi Cuenta"}
            </button>
          </form>

          {/* LINK EXTRA */}
          <button
            className="mt-4 text-sm text-gray-600 hover:text-gray-800"
          >
            {tipo === "padre"
              ? "¿Olvidaste tu contraseña?"
              : "¿Necesitas ayuda?"}
          </button>

        </div>

      </div>
    </div>
  );
}
