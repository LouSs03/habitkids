import imagenFondo from "../assets/nino.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${imagenFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      {/* CONTENIDO */}
      <div className="relative pl-20 max-w-3xl">
        <h1 className="text-6xl font-extrabold text-black leading-tight drop-shadow-xl">
          ¡Formando Hábitos <br /> con Alegría!
        </h1>

        <p className="mt-6 text-xl text-black font-medium drop-shadow">
          Una plataforma divertida y efectiva para ayudar a tus hijos
          a desarrollar rutinas y habilidades importantes de manera lúdica
          y con recompensas.
        </p>

        <div className="flex gap-6 mt-10">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 transition">
            Registrarme
          </button>

          <button className="bg-white text-black px-8 py-3 rounded-full border-2 border-gray-300 font-semibold text-lg hover:bg-gray-100 transition shadow">
            Iniciar sesión
          </button>

          <button className="bg-white text-black px-8 py-3 rounded-full border-2 border-gray-300 font-semibold text-lg hover:bg-gray-100 transition shadow">
            Niño
          </button>
        </div>
      </div>
    </section>
  );
}
