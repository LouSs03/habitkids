import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* GRID PRINCIPAL */}
                <div className="grid md:grid-cols-4 gap-8">

                    {/* LOGO + TEXTO */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="/logo.png"
                                    alt="happy face"
                                    className="w-7 h-7 object-contain invert"
                                />
                            </div>
                            <span className="text-xl font-bold text-yellow-400">Habit Kids</span>
                        </div>

                        <p className="text-gray-400 text-sm">
                            © 2025 Habit Kids. Todos los derechos reservados.
                        </p>
                    </div>

                    {/* PRODUCTO */}
                    <div>
                        <h4 className="font-semibold mb-4">Producto</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Características</a></li>
                            <li><a href="#" className="hover:text-white transition">Precios</a></li>
                            <li><a href="#" className="hover:text-white transition">Testimonios</a></li>
                        </ul>
                    </div>

                    {/* RECURSOS */}
                    <div>
                        <h4 className="font-semibold mb-4">Recursos</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Guías</a></li>
                            <li><a href="#" className="hover:text-white transition">Soporte</a></li>
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition">Términos de Servicio</a></li>
                        </ul>
                    </div>
                </div>

                {/* FOOTER FINAL */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>Grupo 19 – Dávalos & Bautista</p>
                </div>

            </div>
        </footer>
    );
}
