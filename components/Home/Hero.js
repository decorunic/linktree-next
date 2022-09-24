export default function Hero() {
  return (
    <section id="hero">
        <div className="bg-light w-full h-[30vh] relative md:h-[50vh]">
          <video
            className="w-full h-full object-cover object-center absolute top-0 left-0"
            src="/video/hero.mp4"
            autoPlay
            loop
            muted
          />
        </div>
    </section>
  );
}