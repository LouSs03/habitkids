import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function RoutineTimer() {
  const navigate = useNavigate();
  const location = useLocation();

  const task = location.state?.task;
  if (!task) navigate("/child/today");

  const [secondsLeft, setSecondsLeft] = useState(task.duration);
  const [showEmergency, setShowEmergency] = useState(false);

  const formatTime = (total) => {
    const m = String(Math.floor(total / 60)).padStart(2, "0");
    const s = String(total % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const timeText = secondsLeft > 0 ? formatTime(secondsLeft) : "00:00";

  useEffect(() => {
    if (secondsLeft <= 0) {
      completeRoutine();
      return;
    }

    const id = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [secondsLeft]);

  const completeRoutine = async () => {
    await supabase
      .from("routines")
      .update({
        status: "completed",
        completed_at: new Date().toISOString(),
      })
      .eq("id", task.id);

    navigate("/child/congrats", {
      state: { completedLabel: task.label },
    });
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center relative">

      {/* ← BOTÓN REGRESAR */}
      <button
        onClick={() => navigate("/child/today")}

        className="absolute left-6 top-6 w-12 h-12 bg-yellow-400 hover:bg-yellow-500
          rounded-full shadow flex items-center justify-center transition"
      >
        <span className="text-2xl font-bold">←</span>
      </button>

      {/* BOTÓN EMERGENCIA */}
      <button
        onClick={() => setShowEmergency(true)}
        className="absolute right-6 top-6 px-5 py-2 rounded-full 
          bg-yellow-300 hover:bg-yellow-400 text-black font-semibold shadow"
      >
        ¡Emergencia!
      </button>

      {/* TIMER */}
      <div className="relative w-56 h-56 flex items-center justify-center mb-6">
        <div className="absolute inset-0 rounded-full border-[12px] border-yellow-400" />
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <img src={task.icon} className="w-14 h-14 mb-2 object-contain" />
          <div className="text-5xl font-extrabold tracking-wide text-black">
            {timeText}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4">¡Tú puedes! ({task.label})</p>

      <button
        onClick={completeRoutine}
        className="mt-2 px-8 py-2 rounded-full bg-[#7195FF] text-white font-semibold shadow-md
            hover:bg-[#567dff] transition"
      >
        ¡Terminé!
      </button>

      {/* EMERGENCY POPUP */}
      {showEmergency && (
        <div className="fixed inset-0 bg-[#E5E7F5]/60 backdrop-blur-sm flex items-center justify-center z-20">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-6 w-[280px] text-center">
            <p className="text-xs text-gray-500 mb-5">
              Úsalo solo en emergencias.
            </p>

            <button
              onClick={() => navigate("/child/today")}
              className="w-full py-2 mb-3 rounded-full bg-red-500 border border-red-300
                hover:bg-red-600 text-white text-sm font-semibold"
            >
              Sí, pausar
            </button>

            <button
              onClick={() => setShowEmergency(false)}
              className="w-full py-2 rounded-full bg-gray-100 hover:bg-gray-200 
                text-gray-700 text-sm"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
