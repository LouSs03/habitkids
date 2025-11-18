import React from 'react';
import { Trophy, Target, Award } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona Habit Kids?
          </h2>
          <p className="text-lg text-gray-600">
            Transforma las tareas diarias en aventuras emocionantes para tus hijos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Establece Hábitos</h3>
            <p className="text-gray-600">
              Define tareas diarias y objetivos. Las hijos las completan de forma divertida y estructurada.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sigue el Progreso</h3>
            <p className="text-gray-600">
              Visualiza el progreso en tiempo real y brinda retroalimentación positiva y motivación.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gana Recompensas</h3>
            <p className="text-gray-600">
              Los niños obtienen monedas y ganan puntos para desbloquear sus premios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}