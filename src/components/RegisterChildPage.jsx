import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function RegisterChildPage() {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const avatars = [
  { id: 0, img: "/avatars/caritafeliz.png" },
  { id: 1, img: "/avatars/nube.webp" },
  { id: 2, img: "/avatars/corazon.png" },
  { id: 3, img: "/avatars/start.png" },
  { id: 4, img: "/avatars/pez.png" },
  { id: 5, img: "/avatars/apple.png" },
  { id: 6, img: "/avatars/coche.png" },
  { id: 7, img: "/avatars/flor.png" },
];


  const handleSubmit = async (e) => {
    e.preventDefault();

    const parent = (await supabase.auth.getUser()).data.user;
    if (!parent) {
      alert("Debes iniciar sesión como padre.");
      return;
    }

    const name = e.target.name.value;
    const age = e.target.age.value;
    const username = e.target.username.value;
    const password = e.target.password.value;

    const { error } = await supabase.from("profiles").insert({
      role: "child",
      parent_id: parent.id,
      name,
      age,
      username,
      password,
      avatar: avatars[selectedAvatar].img,
    });

    if (error) {
      alert("Error al registrar hijo: " + error.message);
      return;
    }

    navigate("/parent/dashboard/register/success");
  };

  return (
    <div className="min-h-screen bg-[#FFFBEF]">
      <div className="flex flex-col items-center py-12 px-4">
        <div className="bg-white w-full max-w-xl rounded-3xl shadow-lg p-10 border border-gray-200">
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Registrar Nuevo Hijo
          </h1>

          <p className="text-gray-700 font-medium mb-3">Seleccionar Avatar</p>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {avatars.map((a) => (
              <button
                key={a.id}
                onClick={() => setSelectedAvatar(a.id)}
                className={`w-20 h-20 flex items-center justify-center rounded-xl border transition
                  ${
                    selectedAvatar === a.id
                      ? "bg-yellow-200 border-yellow-400 shadow-md"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                <img
                  src={a.img}
                  className="w-10 h-10 object-contain pointer-events-none"
                />
              </button>
            ))}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Nombre del niño
              </label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 w-full px-4 py-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Edad del niño
              </label>
              <input
                name="age"
                type="number"
                required
                className="mt-1 w-full px-4 py-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Usuario del niño
              </label>
              <input
                name="username"
                type="text"
                required
                className="mt-1 w-full px-4 py-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Contraseña del niño
              </label>
              <input
                name="password"
                type="password"
                required
                className="mt-1 w-full px-4 py-3 rounded-xl border"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-full shadow hover:bg-yellow-500 transition"
            >
              Guardar Hijo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
