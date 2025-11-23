import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function ChildDashboard() {
  const navigate = useNavigate();
  const [child, setChild] = useState(null);
  const [streak, setStreak] = useState(0);
  const [monthlyCompleted, setMonthlyCompleted] = useState(0);
  const [todayProgress, setTodayProgress] = useState({ 
    completed: 0, 
    total: 0 
  });

  useEffect(() => {
    const loadData = async () => {
      const session = localStorage.getItem("child_session");
      if (!session) {
        navigate("/login");
        return;
      }

      const childSession = JSON.parse(session);
      setChild(childSession);

      const today = new Date().toISOString().slice(0, 10);
      const monthStart = today.slice(0, 7) + "-01";

      // === RUTINAS DEL DÍA ===
      const { data: todayData } = await supabase
        .from("routines")
        .select("*")
        .eq("child_id", childSession.id)
        .eq("date", today);

      setTodayProgress({
        total: todayData?.length || 0,
        completed: todayData?.filter((t) => t.status === "completed").length || 0
      });

      // === RUTINAS DEL MES ===
      const { data: monthData } = await supabase
        .from("routines")
        .select("*")
        .eq("child_id", childSession.id)
        .gte("date", monthStart)
        .lte("date", today);

      setMonthlyCompleted(monthData?.filter((t) => t.status === "completed").length || 0);

      // === CALCULAR RACHA ===
      const { data: allData } = await supabase
        .from("routines")
        .select("date,status")
        .eq("child_id", childSession.id);

      const completedDays = [...new Set(allData?.filter(t => t.status === "completed").map(t => t.date) || [])];
      let currentStreak = 0;
      let day = new Date(today);
      
      while (completedDays.includes(day.toISOString().slice(0, 10))) {
        currentStreak++;
        day = new Date(day.setDate(day.getDate() - 1));
      }
      
      setStreak(currentStreak);
    };

    loadData();
  }, [navigate]);

  const getStreakMessage = () => {
    if (streak === 0) return "No hay racha";
    if (streak === 1) return "¡Empezó la racha!";
    return "¡Buena racha!";
  };

  if (!child) return null;

  return (
    <div className="min-h-screen bg-[#FFFBEF] px-6 py-6">
      {/* HEADER */}
      <header className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="happy face" 
              className="w-7 h-7 object-contain invert" 
            />
          </div>
          <h1 className="text-xl font-bold text-yellow-600">HabitKids</h1>
        </div>
        <button 
          onClick={() => navigate("/login")} 
          className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 shadow-lg transition-all duration-200"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="black" 
            className="w-7 h-7"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" 
            />
          </svg>
        </button>
      </header>

      {/* SALUDO */}
      <div className="mt-10 flex items-center gap-3">
        <div className="w-12 h-12 bg-yellow-200 rounded-full overflow-hidden flex items-center justify-center shadow">
          <img 
            src={child?.avatar} 
            alt="avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="bg-white shadow px-4 py-2 rounded-xl font-semibold text-gray-700">
          ¡Hola, {child?.name}!
        </p>
      </div>

      {/* CUADROS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FFFAE8] shadow rounded-3xl p-10 text-center">
          <p className="font-semibold text-gray-700 text-xl mb-4">
            {getStreakMessage()}
          </p>
          <p className="text-7xl font-bold text-gray-900">{streak}</p>
          <p className="mt-2 text-lg text-gray-700">días</p>
        </div>
        <div className="bg-white shadow rounded-3xl p-10 text-center">
          <p className="font-semibold text-gray-700 text-xl mb-2">
            Progreso del Mes
          </p>
          <p className="text-6xl font-bold text-yellow-600">
            {monthlyCompleted}
          </p>
          <p className="text-gray-600 mt-2 text-lg">
            Tareas completadas este mes
          </p>
        </div>
      </div>

      {/* PROGRESO HOY */}
      <div className="mt-16 text-center">
        <p className="font-semibold text-gray-700 text-lg">
          Progreso de hoy:{" "}
          <span className="font-bold">
            {todayProgress.completed} de {todayProgress.total}
          </span>{" "}
          tareas
        </p>
        <div className="w-full md:w-1/2 mx-auto mt-4 bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div 
            className="bg-yellow-400 h-full" 
            style={{ 
              width: todayProgress.total === 0 ? "0%" : `${(todayProgress.completed / todayProgress.total) * 100}%` 
            }}
          ></div>
        </div>
        <button 
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 transition text-black px-6 py-3 rounded-full font-semibold shadow"
          onClick={() => navigate("/child/today")}
        >
          Ver mis Rutinas de Hoy →
        </button>
      </div>
    </div>
  );
}