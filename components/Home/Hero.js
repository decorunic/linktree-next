export default function Hero() {
  return (
    <section id="hero">
        <div className="w-full h-[30vh] relative md:h-[50vh]">
          <div className="bg-dark w-full h-full absolute z-[1] opacity-20"></div>
          <video
            className="w-full h-full object-cover object-center absolute top-0 left-0"
            autoPlay
            loop
            muted
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        </div>
    </section>
  );
}