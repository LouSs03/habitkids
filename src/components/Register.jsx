import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("padre");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert("Completa todos los campos.");
      return;
    }

    if (tipo === "padre") {
      if (!email) {
        alert("El email es obligatorio.");
        return;
      }

      // 1️⃣ Crear usuario en Auth
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        alert(signUpError.message);
        return;
      }

      // 2️⃣ LOGIN inmediato (necesario para obtener user.id)
      const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        alert(loginError.message);
        return;
      }

      const user = loginData.user;
      if (!user) {
        alert("Error inesperado obteniendo usuario.");
        return;
      }

      // 3️⃣ Insertar perfil real
      const { error: profileError } = await supabase.from("profiles").insert({
        id: user.id,
        role: "parent",
        name,
        username: email.split("@")[0],
      });

      if (profileError) {
        alert(profileError.message);
        return;
      }

      alert("Cuenta creada exitosamente.");
      navigate("/login");
    }

    // Caso niño (no permitido aquí)
    if (tipo === "niño") {
      alert("Los niños se crean desde el panel del padre.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        <div className="px-10 py-10 flex flex-col justify-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 mb-6 w-fit bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all">
            <span className="text-xl">←</span>
            <span className="font-medium">Volver</span>
          </button>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <img src="/logo.png" className="w-6 h-6 invert" />
            </div>
            <span className="text-2xl font-bold text-yellow-400">HabitKids</span>
          </div>

          <div className="w-full bg-white border border-gray-300 rounded-full shadow-inner flex items-center p-1 mb-10">
            <button onClick={() => setTipo("padre")}
              className={`flex-1 text-center py-2 rounded-full font-semibold transition-all ${tipo === "padre" ? "bg-yellow-400 text-black shadow border border-yellow-400" : "bg-white text-gray-700"}`}>
              Padre
            </button>
            <button onClick={() => setTipo("niño")}
              className={`flex-1 text-center py-2 rounded-full font-semibold transition-all ${tipo === "niño" ? "bg-yellow-400 text-black shadow border border-yellow-400" : "bg-white text-gray-700"}`}>
              Niño
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            {tipo === "padre" ? "Crea tu cuenta" : "Cuenta del Niño"}
          </h2>

          <p className="text-gray-600 text-sm mb-8">
            {tipo === "padre"
              ? "Regístrate para gestionar hábitos"
              : "Los niños se crean desde el panel del padre"}
          </p>

          <form className="space-y-6" onSubmit={handleRegister}>
            
            {tipo === "niño" && (
              <div className="p-3 bg-yellow-100 rounded-xl text-sm text-gray-700">
                Las cuentas de niño deben crearse desde el panel de Padre.
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700">Nombre Completo</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white" />
            </div>

            {tipo === "padre" && (
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white" />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700">Contraseña</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white" />
            </div>

            <button type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition">
              Crear Cuenta
            </button>
          </form>

          <button onClick={() => navigate("/login")}
            className="mt-6 text-sm text-gray-600 hover:text-black">
            ¿Ya tienes una cuenta?
          </button>
        </div>

        <div className="bg-yellow-300 flex justify-center items-center p-10 relative min-h-[350px] lg:min-h-full w-full h-full">
          <img src="/coheteee.webp"
            className="w-full max-w-[420px] object-contain drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
}
