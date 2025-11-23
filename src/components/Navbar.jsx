export default function Navbar() {
    return (
        <nav className="bg-white w-full h-20 shadow-sm fixed top-0 left-0 z-50 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="happy face"
                            className="w-7 h-7 object-contain invert"
                        />
                    </div>

                    <span className="text-2xl font-bold" style={{ color: "#FACC15" }}>
                        HabitKids
                    </span>
                </div>


                {/* MENÚ */}
                <div className="flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6 text-base font-medium">

                        <a className="text-black hover:text-yellow-500 transition cursor-pointer">Inicio</a>
                        <a className="text-black hover:text-yellow-500 transition cursor-pointer">Cómo funciona</a>
                        <a className="text-black hover:text-yellow-500 transition cursor-pointer">Beneficios</a>
                        <a className="text-black hover:text-yellow-500 transition cursor-pointer">Padres</a>
                        <a className="text-black hover:text-yellow-500 transition cursor-pointer">Niños</a>

                    </div>

                    {/* BOTÓN LOGIN */}
                    <a
                        href="/login"
                        className="bg-white text-black border border-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                    >
                        Login
                    </a>


                    {/* BOTÓN REGISTRO */}
                    <button
                        onClick={() => window.location.href = "/register"}
                        className="bg-yellow-400 px-5 py-2 font-semibold rounded-full hover:bg-yellow-500 transition"
                    >
                        Registro
                    </button>

                </div>

            </div>
        </nav>
    );
}
