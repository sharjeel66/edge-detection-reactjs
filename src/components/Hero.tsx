import "@/index.css";
export default function Hero() {
  return (
    <div className="hero-bg min-h-[90vh] relative overflow-hidden flex flex-col items-center bg-transparent justify-center text-primary-foreground">
      <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl md:max-w-2xl font-bold relative z-10 max-w-md text-center leading-12.5">
        Computer Vision Edge Detection Project
      </h1>
      <p className="absolute bottom-3 right-4 text-primary-foreground/70">
        Instructor: Ma'am Arbish Akram
        <br />
        Made by Sharjeel Ahmed
      </p>
    </div>
  );
}
