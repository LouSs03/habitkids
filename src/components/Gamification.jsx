import React from 'react';

export default function Gamification() {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Aprende Jugando! Gamificación para Niños
          </h2>
          <p className="text-lg text-gray-600">
            Misiones emocionantes, recompensas divertidas y un seguimiento visual para mantener la motivación.
          </p>
        </div>

        {/* CONTENIDO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/felicidad.jpg"
              alt="Gamificación"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXTO */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Misiones Diarias y Recompensas Fantásticas
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Tus hijos se embarcarán en misiones diseñadas para completar sus hábitos. Cada tarea es un paso hacia una recompensa, incentivando la
              consistencia y el esfuerzo. Desde cepillarse los dientes hasta ordenar su habitación, cada hábito cuenta como una misión cumplida.
            </p>

            {/* BOTONES/BADGES */}
            <div className="flex flex-wrap gap-3">

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-medium">
                Misión: Cepillarse los Dientes
              </span>

              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                Recompensa: Una Hora Extra de Juego
              </span>

              <span className="bg-red-500 text-white px-4 py-2 rounded-full font-medium">
                Nivel Alcanzado: Explorador de Hábitos
              </span>

              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                Comienza la Aventura
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
