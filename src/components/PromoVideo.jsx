export default function PromoVideo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Mira cómo funciona HabitKids
        </h2>

        {/* Contenedor centrado */}
        <div className="flex justify-center">
          <video
            src="/video.mp4"
            controls
            className="
              w-[350px] 
              sm:w-[380px] 
              md:w-[420px] 
              lg:w-[450px]
              rounded-3xl 
              shadow-2xl 
              border
            "
          />
        </div>

      </div>
    </section>
  );
}
