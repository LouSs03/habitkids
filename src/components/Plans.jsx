import { Link } from "react-router-dom";

export default function Plans() {
  return (
    <section className="py-20 bg-[#FFFBEF] text-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Planes para Cada Familia
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Elige el plan ideal para apoyar la formación de hábitos en tus hijos.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* PLAN GRATIS */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow text-center">
            <h3 className="text-2xl font-bold mb-4">Gratis</h3>
            <p className="text-4xl font-bold mb-6">S/ 0</p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ 1 perfil de niño</li>
              <li>✔ Rutinas diarias</li>
              <li>✔ Seguimiento básico</li>
            </ul>

            <Link
              to="/register"
              className="mt-8 block bg-yellow-400 px-6 py-3 rounded-full w-full font-semibold hover:bg-yellow-500 transition text-center"
            >
              Empezar gratis
            </Link>
          </div>

          {/* PLAN FAMILIAR */}
          <div className="bg-white border-2 border-yellow-400 rounded-3xl p-8 shadow-xl text-center scale-[1.05]">
            <h3 className="text-2xl font-bold mb-4">Familiar</h3>
            <p className="text-4xl font-bold mb-6">
              S/ 15<span className="text-lg">/mes</span>
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Hasta 3 niños</li>
              <li>✔ Recompensas ilimitadas</li>
              <li>✔ Reportes avanzados</li>
              <li>✔ Avatares + Logros</li>
            </ul>

            <Link
              to="/register"
              className="mt-8 block bg-yellow-400 px-6 py-3 rounded-full w-full font-semibold hover:bg-yellow-500 transition text-center"
            >
              Elegir plan
            </Link>
          </div>

          {/* PLAN PREMIUM */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow text-center">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-6">
              S/ 25<span className="text-lg">/mes</span>
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Niños ilimitados</li>
              <li>✔ Recompensas ilimitadas</li>
              <li>✔ Reportes avanzados + histórico</li>
              <li>✔ Soporte prioritario</li>
            </ul>

            <Link
              to="/register"
              className="mt-8 block bg-yellow-400 px-6 py-3 rounded-full w-full font-semibold hover:bg-yellow-500 transition text-center"
            >
              Seleccionar
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
