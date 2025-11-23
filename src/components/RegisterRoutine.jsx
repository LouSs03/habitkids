import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function RegisterRoutine() {
  const navigate = useNavigate();

  const [selectedIcon, setSelectedIcon] = useState(0);
  const [children, setChildren] = useState([]);
  const [title, setTitle] = useState("");
  const [childId, setChildId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");

  const icons = [
    { id: 0, img: "/pincel.png" },
    { id: 1, img: "/libro.png" },
    { id: 2, img: "/cama.png" },
    { id: 3, img: "/mano.png" },
    { id: 4, img: "/planta.png" },
    { id: 5, img: "/comida.png" },
    { id: 6, img: "/hablar.png" },
    { id: 7, img: "/sol.png" },
    { id: 8, img: "/huella.png" },
    { id: 9, img: "/pieza.png" },
  ];

  useEffect(() => {
    const loadChildren = async () => {
      const parentAuth = (await supabase.auth.getUser()).data.user;
      if (!parentAuth) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("parent_id", parentAuth.id)
        .order("name", { ascending: true });

      setChildren(data || []);
    };

    loadChildren();
  }, []);

  const handleSaveRoutine = async () => {
    if (!title || !childId || !startTime || !duration) {
      alert("Completa todos los campos.");
      return;
    }

    // ⭐ Hora estable y limpia: HH:MM:SS
    const cleanTime = startTime.length === 5 
      ? `${startTime}:00` 
      : startTime.slice(0, 8);

    const today = new Date().toISOString().slice(0, 10);

    // Insertamos la rutina sin tocar nada de tu diseño
    const { error } = await supabase.from("routines").insert({
      child_id: childId,
      title,
      icon: icons[selectedIcon].img,
      start_time: cleanTime,
      duration: Number(duration),
      status: "pending",
      date: today,
    });

    if (error) {
      console.error(error);
      alert("Error al guardar rutina.");
      return;
    }

    navigate("/parent/routines");
  };

  return (
    <div className="min-h-screen bg-[#FFFBEF]">
      <div className="flex flex-col items-center py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Registrar Nueva Rutina
        </h1>

        <div className="bg-white w-full max-w-3xl rounded-3xl shadow-lg p-10 border border-gray-200">
          <label className="font-medium text-gray-700">Nombre de la Rutina</label>
          <input
            type="text"
            placeholder="Ej. Lavarse los dientes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 mb-6 px-4 py-3 rounded-xl bg-gray-100 text-gray-700"
          />

          <label className="font-medium text-gray-700">Asignar a Niño(a)</label>
          <select
            value={childId}
            onChange={(e) => setChildId(e.target.value)}
            className="w-full mt-2 mb-6 px-4 py-3 rounded-xl bg-gray-100 text-gray-700"
          >
            <option value="">Seleccionar niño(a)</option>
            {children.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <p className="font-medium text-gray-700 mb-2">Configuración de Tiempo</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-600">Hora de Inicio</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Duración (minutos)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="15"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700"
              />
            </div>
          </div>

          <p className="font-medium text-gray-700 mb-3">Ícono / Categoría</p>

          <div className="grid grid-cols-5 gap-4 mb-8">
            {icons.map((icon) => (
              <button
                key={icon.id}
                onClick={() => setSelectedIcon(icon.id)}
                className={`w-16 h-16 flex items-center justify-center rounded-xl border transition
                  ${
                    selectedIcon === icon.id
                      ? "bg-yellow-200 border-yellow-400 shadow"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                <img src={icon.img} className="w-8 h-8 object-contain" />
              </button>
            ))}
          </div>

          <button
            onClick={handleSaveRoutine}
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 shadow transition"
          >
            Guardar Rutina
          </button>
        </div>
      </div>
    </div>
  );
}
