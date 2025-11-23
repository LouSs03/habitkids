import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function TodayPath() {
  const navigate = useNavigate();
  const location = useLocation();

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const load = async () => {
      const session = localStorage.getItem("child_session");
      if (!session) {
        navigate("/login");
        return;
      }

      const child = JSON.parse(session);
      const today = new Date().toISOString().slice(0, 10);

      const { data } = await supabase
        .from("routines")
        .select("*")
        .eq("child_id", child.id)
        .eq("date", today)
        .order("start_time", { ascending: true });

      let updated = data.map((t) => ({
        ...t,
        highlight: false,
      }));

      const next = updated.findIndex((t) => t.status !== "completed");
      if (next !== -1) updated[next].highlight = true;

      setTareas(updated);
    };

    load();
  }, [navigate]);

  // ================================
  // ⭐ Actualizar tras completar rutina
  // ================================
  useEffect(() => {
    const completedLabel = location.state?.completedLabel;
    if (!completedLabel) return;

    setTareas((prev) => {
      let updated = prev.map((t) =>
        t.title === completedLabel ? { ...t, status: "completed" } : t
      );

      updated = updated.map((t) => ({ ...t, highlight: false }));
      const next = updated.findIndex((t) => t.status !== "completed");
      if (next !== -1) updated[next].highlight = true;

      return updated;
    });

    navigate(location.pathname, { replace: true, state: {} });
  }, [location.state, location.pathname, navigate]);

  // =======================================
  // ⭐ BLOQUEAR RUTINA SI SU HORA NO HA LLEGADO
  // =======================================
  const canStartRoutine = (task) => {
    if (task.status === "completed") return false;

    const now = new Date();

    const [h, m, s] = task.start_time.split(":");
    const start = new Date();
    start.setHours(Number(h), Number(m), Number(s));

    return now >= start; // true si ya llegó la hora
  };

  const handleOpenRoutine = (task) => {
    if (!canStartRoutine(task)) return; // bloqueado

    const taskForTimer = {
      id: task.id,
      label: task.title,
      icon: task.icon,
      duration: task.duration * 60,
    };

    navigate("/child/today/timer", { state: { task: taskForTimer } });
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFBEF] flex flex-col items-center py-10 relative">
      <h2 className="text-lg font-semibold text-purple-700 mb-10 mt-6">
        Camino de Hoy
      </h2>

      <div className="flex flex-col items-center relative">
        <div className="absolute top-0 bottom-0 w-[2px] bg-gray-300"></div>

        {tareas.map((t, i) => {
          const allowed = canStartRoutine(t);

          return (
            <button
              key={i}
              onClick={() => handleOpenRoutine(t)}
              disabled={!allowed}
              className={`flex flex-col items-center mb-8 relative z-10 focus:outline-none`}
            >
              <div
                className={`
                  w-16 h-16 flex items-center justify-center rounded-full border-2
                  ${
                    t.status === "completed"
                      ? "bg-[#E3FBE7] border-green-500"
                      : t.highlight
                      ? "bg-yellow-400 border-yellow-500"
                      : allowed
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300 opacity-50"
                  }
                `}
              >
                <img
                  src={t.icon}
                  className="w-9 h-9 object-contain"
                />
              </div>

              {t.status === "completed" && (
                <span className="text-green-600 text-xl font-bold absolute right-[-25px] top-1">
                  ✔
                </span>
              )}

              <p className="text-xs mt-2 text-gray-700">{t.title}</p>

              {!allowed && t.status !== "completed" && (
                <p className="text-[10px] text-red-500 mt-1">Aún no es hora</p>
              )}
            </button>
          );
        })}
      </div>

      {/* BOTÓN PARA VOLVER AL DASHBOARD */}
      <button
        onClick={() => navigate("/child/dashboard")}
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-full text-black font-semibold shadow"
      >
        ← Volver al Dashboard
      </button>
    </div>
  );
}
