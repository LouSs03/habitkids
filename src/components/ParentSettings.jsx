import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import ParentNavbar from "./ParentNavbar";


export default function ParentSettings() {
  const [notifications, setNotifications] = useState({
    completadas: true,
    recordatorios: true,
    semanal: false,
  });

  const [alarmSettings, setAlarmSettings] = useState({
    volume: 70,
    vibracion: true,
    tono: "Clásico",
  });

  return (
    <div className="w-full min-h-screen bg-[#FFFBEF] p-6 flex flex-col items-center">
      

      {/* TÍTULO */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Configuración de la Cuenta
      </h1>

      <div className="w-full max-w-2xl space-y-10">

        {/* ============================
    PERFIL DEL PADRE MEJORADO
============================ */}
        <section className="bg-white shadow rounded-3xl p-8 border border-gray-200">

          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Perfil del Padre
          </h2>

          <div className="flex items-start justify-between">

            {/* IZQUIERDA: Icono + datos */}
            <div className="flex items-start gap-4">

              {/* ICONO REDONDO */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                <i className="fa-solid fa-user text-xl text-gray-600"></i>
              </div>

              <div>
                <p className="text-gray-800 font-medium text-lg">
                  Información del Perfil
                </p>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  <span className="font-semibold text-gray-700">Nombre:</span> Padre Juan <br />
                  <span className="font-semibold text-gray-700">Email:</span> juan.perez@example.com
                </p>
              </div>

            </div>

            {/* BOTÓN EDITAR */}
            <button className="self-end flex items-center gap-2 mt-4 
    bg-white border border-yellow-400 text-gray-700 
    px-4 py-2 rounded-xl transition font-medium hover:bg-yellow-50">
              <i className="fa-solid fa-pen text-yellow-500"></i>
              Editar Perfil
            </button>
          </div>

        </section>


        {/* ───────────────────────────────────────────────
            PREFERENCIAS DE NOTIFICACIÓN
        ─────────────────────────────────────────────── */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Preferencias de Notificación
          </h2>

          {[
            { label: "Notificaciones de rutinas completadas", key: "completadas" },
            { label: "Recordatorios de rutinas", key: "recordatorios" },
            { label: "Alertas de progreso semanal", key: "semanal" },
          ].map((item) => (
            <div key={item.key} className="flex justify-between items-center py-3 border-b last:border-b-0">
              <span className="text-gray-700">{item.label}</span>

              {/* SWITCH */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications[item.key]}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      [item.key]: !notifications[item.key],
                    })
                  }
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-yellow-400 transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
              </label>
            </div>
          ))}
        </section>

        {/* ───────────────────────────────────────────────
            CONFIGURACIÓN DE ALARMAS
        ─────────────────────────────────────────────── */}
        <section className="bg-white shadow rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Configuración de Alarma
          </h2>

          {/* VOLUMEN */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Volumen de Alarma</span>
              <span className="text-gray-500">{alarmSettings.volume}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={alarmSettings.volume}
              onChange={(e) =>
                setAlarmSettings({ ...alarmSettings, volume: e.target.value })
              }
              className="w-full accent-yellow-400"
            />
          </div>

          {/* VIBRACIÓN */}
          <div className="flex justify-between items-center py-4 border-t">
            <span className="text-gray-700">Vibración</span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={alarmSettings.vibracion}
                onChange={() =>
                  setAlarmSettings({
                    ...alarmSettings,
                    vibracion: !alarmSettings.vibracion,
                  })
                }
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-yellow-400 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
            </label>
          </div>

          {/* TONO */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-700">Tono de Alarma</span>

            <select
              value={alarmSettings.tono}
              onChange={(e) =>
                setAlarmSettings({ ...alarmSettings, tono: e.target.value })
              }
              className="border border-yellow-300 px-4 py-2 rounded-xl bg-white text-gray-700 
             outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer 
             hover:bg-yellow-50 transition"
            >
              <option value="Clásico">Clásico</option>
              <option value="Dulce">Dulce</option>
              <option value="Suave">Suave</option>
              <option value="Digital">Digital</option>
            </select>
          </div>
        </section>
      </div>
    </div>
  );
}
