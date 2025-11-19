import { useNavigate } from "react-router-dom";

export default function ParentSettings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFBEF] px-6 py-10">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Configuración de la Cuenta
      </h1>

      <div className="max-w-3xl mx-auto space-y-10">

        {/* Perfil del padre */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-3">Perfil del Padre</h2>

          <div className="flex items-center gap-4 mb-4">
            <i className="fa-solid fa-user text-2xl text-gray-600"></i>
            <div>
              <p className="text-gray-800 font-medium">Padre Juan</p>
              <p className="text-gray-500 text-sm">juan.perez@example.com</p>
            </div>
          </div>

          <button className="px-4 py-2 bg-yellow-400 rounded-full hover:bg-yellow-500">
            Editar Perfil
          </button>
        </div>

        {/* Preferencias de notificación */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Preferencias de Notificación</h2>

          <div className="flex justify-between items-center mb-3">
            <span>Notificaciones de rutinas completadas</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>

          <div className="flex justify-between items-center mb-3">
            <span>Recordatorios de rutinas</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>

          <div className="flex justify-between items-center">
            <span>Alertas de progreso semanal</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>

        {/* Configuración de alarmas */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Configuración de Alarmas</h2>

          <div className="flex justify-between items-center mb-4">
            <label>Volumen de Alarma</label>
            <input type="range" min="0" max="100" className="w-40" />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label>Vibración</label>
            <input type="checkbox" className="toggle-checkbox" />
          </div>

          <div className="flex justify-between items-center">
            <label>Tono de Alarma</label>
            <select className="bg-gray-100 px-3 py-2 rounded-xl">
              <option>Clásico</option>
              <option>Digital</option>
              <option>Dulce</option>
            </select>
          </div>
        </div>

      </div>

    </div>
  );
}
