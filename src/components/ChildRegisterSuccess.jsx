import { useNavigate } from "react-router-dom";

export default function ChildRegisterSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFBEF] flex flex-col items-center justify-center px-6">

      {/* CARD PRINCIPAL */}
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-md w-full text-center">

        {/* ICONO SUCCESS */}
        <div className="mx-auto w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
          <i className="fa-solid fa-check text-white text-4xl"></i>
        </div>

        {/* TÍTULO */}
        <h2 className="text-2xl font-bold text-gray-800 mt-6">
          ¡Hijo registrado con éxito!
        </h2>

        {/* TEXTO SECUNDARIO */}
        <p className="text-gray-600 mt-3">
          Ahora podrás asignarle rutinas, recompensas y llevar un seguimiento de su progreso.
        </p>

        {/* BOTÓN PRINCIPAL */}
        <button
          onClick={() => navigate("/parent/dashboard")}
          className="mt-8 w-full bg-yellow-400 py-3 rounded-full text-black font-semibold hover:bg-yellow-500 transition"
        >
          Ir al Dashboard
        </button>

        {/* BOTÓN SECUNDARIO */}
        <button
          onClick={() => navigate("/parent/children")}
          className="mt-3 w-full bg-gray-200 py-3 rounded-full text-gray-700 font-semibold hover:bg-gray-300 transition"
        >
          Ver Hijos
        </button>

      </div>
    </div>
  );
}
