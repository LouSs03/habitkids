import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParentNavbar from "./ParentNavbar";

export default function RegisterChildPage() {
    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState(0);

    const avatars = [
        { id: 0, img: "/src/assets/caritafeliz.png" },
        { id: 1, img: "/src/assets/nube.webp" },
        { id: 2, img: "/src/assets/corazon.png" },
        { id: 3, img: "/src/assets/start.png" },
        { id: 4, img: "/src/assets/pez.png" },
        { id: 5, img: "/src/assets/apple.png" },
        { id: 6, img: "/src/assets/coche.png" },
        { id: 7, img: "/src/assets/flor.png" },
    ];

    return (
        <div className="min-h-screen bg-[#FFFBEF]">

            {/* NAVBAR ESTÁNDAR */}
            <ParentNavbar />

            {/* CONTENIDO PRINCIPAL */}
            <div className="flex flex-col items-center py-12 px-4">

                <div className="bg-white w-full max-w-xl rounded-3xl shadow-lg p-10 border border-gray-200">

                    <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
                        Registrar Nuevo Hijo
                    </h1>

                    <p className="text-gray-700 font-medium mb-3">Seleccionar Avatar</p>

                    {/* AVATARES */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        {avatars.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedAvatar(item.id)}
                                className={`w-20 h-20 flex items-center justify-center rounded-xl border transition
                                    ${
                                        selectedAvatar === item.id
                                            ? "bg-yellow-200 border-yellow-400 shadow-md"
                                            : "bg-white border-gray-300 hover:bg-gray-100"
                                    }
                                `}
                            >
                                <img
                                    src={item.img}
                                    alt="avatar"
                                    className="w-10 h-10 object-contain pointer-events-none"
                                />
                            </button>
                        ))}
                    </div>

                    {/* FORMULARIO */}
                    <form
                        className="space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            navigate("/parent/dashboard/register/success");
                        }}
                    >

                        <div>
                            <label className="text-sm font-medium text-gray-700">Nombre del niño</label>
                            <input
                                type="text"
                                placeholder="Ej. Sofía"
                                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Edad del niño</label>
                            <input
                                type="number"
                                placeholder="Ej. 7"
                                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Usuario del niño</label>
                            <input
                                type="text"
                                placeholder="Ej. sofia.habits"
                                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Contraseña del niño</label>
                            <input
                                type="password"
                                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 shadow transition"
                        >
                            Guardar hijo
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}
