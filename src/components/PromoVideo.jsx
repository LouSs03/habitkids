export default function PromoVideo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Mira cómo funciona HabitKids
        </h2>

        <div className="flex justify-center">
          <video
            src="/video.mp4"
            controls
            className="w-[70%] md:w-[60%] lg:w-[50%] rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
