import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function ParentRoutines() {
  const navigate = useNavigate();

  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const authUser = (await supabase.auth.getUser()).data.user;
      if (!authUser) return;

      // 1️⃣ obtener hijos reales del padre
      const { data: children } = await supabase
        .from("profiles")
        .select("id")
        .eq("parent_id", authUser.id);

      if (!children || children.length === 0) {
        setRoutines([]);
        setLoading(false);
        return;
      }

      const childrenIds = children.map((c) => c.id);

      // 2️⃣ obtener rutinas reales de esos hijos
      const { data: routinesData } = await supabase
        .from("routines")
        .select("*")
        .in("child_id", childrenIds)
        .order("start_time", { ascending: true });

      setRoutines(routinesData || []);
      setLoading(false);
    };

    load();
  }, []);

  // conversión de formato 24h → 12h
  const convertTime = (t) => {
    const [h, m] = t.split(":");
    const hour = parseInt(h);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${m} ${ampm}`;
  };

  // etiquetas bonitas
  const statusLabel = {
    pending: "Pendiente",
    in_progress: "En curso",
    completed: "Completada",
  };

  return (
    <div className="min-h-screen bg-[#FFFBEF] p-8">

      {/* ▬▬▬▬▬▬▬▬▬ HEADER ▬▬▬▬▬▬▬▬▬ */}
      <div className="w-full bg-[#FFF0C2] border border-yellow-200 rounded-3xl p-10 shadow mb-10">
        <h2 className="text-xl font-bold text-gray-800">Resumen de Rutinas</h2>

        <div className="flex items-center justify-between mt-6">
          <div className="text-center">
            <p className="text-5xl font-bold text-yellow-600">
              {loading ? "-" : routines.length}
            </p>
            <p className="text-gray-700 mt-1">rutinas creadas</p>
          </div>

          <button
            onClick={() => navigate("/parent/routines/create")}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full text-gray-800 shadow font-medium flex items-center gap-2 transition"
          >
            ➕ Crear nueva rutina
          </button>
        </div>
      </div>

      {/* ▬▬▬▬▬▬▬▬▬ GRID ▬▬▬▬▬▬▬▬▬ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading && <p className="text-gray-600">Cargando rutinas...</p>}

        {!loading && routines.length === 0 && (
          <p className="text-gray-600">Aún no has registrado rutinas.</p>
        )}

        {routines.map((routine) => (
          <div
            key={routine.id}
            className="bg-white shadow rounded-3xl p-6 border border-gray-200"
          >
            {/* Ícono */}
            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
              <img
                src={routine.icon}
                alt="icon"
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Título */}
            <h3 className="font-semibold text-lg text-gray-800">
              {routine.title}
            </h3>

            {/* Hora */}
            <p className="text-gray-600 text-sm mt-1">
              ⏰ {convertTime(routine.start_time)}
            </p>

            {/* Estado */}
            <p className="text-gray-500 text-sm italic mt-1">
              {statusLabel[routine.status]}
            </p>

            {/* BOTONES */}
            <div className="flex gap-3 mt-5">
              <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-full">
                ✏️ Editar
              </button>

              <button className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full">
                🗑 Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
