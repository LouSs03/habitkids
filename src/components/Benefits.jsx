import React from 'react';
import { Zap, Shield, Heart, Star } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Beneficios para Toda la Familia
          </h2>
          <p className="text-lg text-gray-600">
            Descubre cómo Hábito Feliz mejora la vida diaria de padres e hijos.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Desarrollo Positivo</h3>
            <p className="text-gray-600 text-sm">
              Fomenta la responsabilidad, autoestima y ayudan hábitos saludables desde una edad temprana.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Autonomía y Confianza</h3>
            <p className="text-gray-600 text-sm">
              Empoderes a tus hijos completar tareas solos con autonomía y lograr metas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Comunicación Mejorada</h3>
            <p className="text-gray-600 text-sm">
              Crea un canal abierto para hablar sobre responsabilidades y logros familiares.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Motivación Constante</h3>
            <p className="text-gray-600 text-sm">
              El sistema de gamificación mantiene a los niños motivados y entusiasmados por cumplir sus metas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}