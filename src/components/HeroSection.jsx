import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* Flex container: row on md+ screens, column on small screens */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0 md:space-x-12">
          {/* Text Section */}
          <div className="flex-1 space-y-6 ">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Kishlay
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Tejeswi
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I am a Computer Science undergraduate passionate about exploring Web Development,
               Data Structures, and emerging technologies like AI and Machine Learning.<br></br> Continuously learning and building projects to grow my skills and knowledge.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>

          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-50 md:w-70 lg:w-80 opacity-0 animate-fade-in-delay-3">
            <img
              src="/projects/profile101.png" 
              alt="Kishlay Tejeswi"
              className="rounded-xl shadow-lg mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};