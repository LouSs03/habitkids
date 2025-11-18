import React from 'react';

export default function ParentControl() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Control Total para los Padres
                    </h2>
                    <p className="text-lg text-gray-600">
                        Herramientas intuitivas para establecer, monitorear y recompensar los hábitos de tus hijos.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Panel de Control Intuitivo
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Como padre, tendrás acceso a un panel completo desde el cual podrás personalizar tareas, asignar recompensas, y ver el progreso de tus hijos en tiempo real. Todo desde una interfaz fácil de usar y adaptada a tus necesidades y prioridades.
                        </p>
                        {/* LISTA DE BENEFICIOS */}
                        <ul className="space-y-4 mt-4">

                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="text-indigo-500 text-xl">🗓️</span>
                                <span>Establece horarios y rutinas</span>
                            </li>

                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="text-indigo-500 text-xl">👨‍👧</span>
                                <span>Gestiona perfiles de niños</span>
                            </li>

                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="text-indigo-500 text-xl">📘</span>
                                <span>Accede a recursos educativos</span>
                            </li>

                        </ul>

                        {/* BOTÓN */}
                        <button className="mt-8 flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-xl font-medium text-gray-800 shadow-sm hover:bg-gray-100 transition">
                            <span className="text-lg">↗</span>
                            Explorar como Padre
                        </button>

                    </div>
                    <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl p-8 shadow-2xl">
                        <img
                            src="/src/assets/padre-hijo.avif"
                            alt="Control parental"
                            className="rounded-2xl w-full h-80 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}