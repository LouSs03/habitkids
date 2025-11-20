import { useNavigate } from "react-router-dom";

export default function ParentRoutines() {
  const navigate = useNavigate();

  const routines = [
    {
      id: 1,
      title: "Cepillarse los dientes",
      time: "07:30 AM",
      status: "Completada",
      icon: "/src/assets/rutina_lapiz.png",
      color: "bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Hacer la cama",
      time: "08:00 AM",
      status: "Pendiente",
      icon: "/src/assets/rutina_libro.png",
      color: "bg-green-100",
      iconColor: "text-green-500"
    },
    {
      id: 3,
      title: "Leer un libro",
      time: "07:00 PM",
      status: "En curso",
      icon: "/src/assets/rutina_libro.png",
      color: "bg-purple-100",
      iconColor: "text-purple-500"
    },
    {
      id: 4,
      title: "Comer cena",
      time: "08:30 PM",
      status: "Pendiente",
      icon: "/src/assets/rutina_comida.png",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      id: 5,
      title: "Tomar un baño",
      time: "08:30 PM",
      status: "Completada",
      icon: "/src/assets/rutina_lapiz.png",
      color: "bg-pink-100",
      iconColor: "text-pink-500"
    },
    {
      id: 6,
      title: "Meditar 10 min",
      time: "09:00 PM",
      status: "Pendiente",
      icon: "/src/assets/rutina_corazon.png",
      color: "bg-red-100",
      iconColor: "text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEF] p-8">

      {/* ▬▬▬▬▬▬▬▬▬ Header resumen ▬▬▬▬▬▬▬▬▬ */}
      <div className="w-full bg-[#FFF0C2] border border-yellow-200 rounded-3xl p-10 shadow mb-10">

        <h2 className="text-xl font-bold text-gray-800">Resumen de Rutinas</h2>

        <div className="flex items-center justify-between mt-6">

          <div className="text-center">
            <p className="text-5xl font-bold text-yellow-600">{routines.length}</p>
            <p className="text-gray-700 mt-1">rutinas creadas</p>
          </div>

          <button
            onClick={() => navigate("/parent/routines/create")}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full text-gray-800 shadow font-medium flex items-center gap-2 transition"
          >
            <i className="fa-solid fa-plus"></i>
            Crear nueva rutina
          </button>
        </div>
      </div>

      {/* ▬▬▬▬▬▬▬▬▬ Grid de Rutinas ▬▬▬▬▬▬▬▬▬ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {routines.map((routine) => (
          <div
            key={routine.id}
            className="bg-white shadow rounded-3xl p-6 border border-gray-200"
          >
            {/* Ícono */}
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${routine.color}`}
            >
              <img src={routine.icon} className="w-7 h-7" />
            </div>

            {/* Título */}
            <h3 className="font-semibold text-lg text-gray-800">{routine.title}</h3>

            {/* Hora */}
            <p className="text-gray-600 text-sm mt-1">
              <i className="fa-solid fa-clock mr-2"></i>
              {routine.time}
            </p>

            {/* Estado */}
            <p className="text-gray-500 text-sm italic mt-1">{routine.status}</p>

            {/* Botones */}
            <div className="flex gap-3 mt-5">
              <button
                className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-full flex items-center justify-center gap-2 transition font-medium"
              >
                <i className="fa-solid fa-pen text-gray-600"></i> Editar
              </button>

              <button
                className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full flex items-center justify-center gap-2 transition font-medium"
              >
                <i className="fa-solid fa-trash"></i> Eliminar
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
