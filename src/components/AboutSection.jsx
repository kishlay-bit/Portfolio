import { BrainCircuit, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer, a Tech Creator & AI/ML Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With research experience at IIT Kharagpur and recognition as a National Finalist at Smart India Hackathon 2025, I enjoy building intelligent systems and engineering scalable software solutions to real-world problems.
            </p>

            <p className="text-muted-foreground">
              My work spans Artificial Intelligence, Machine Learning, and Computer Vision, alongside Software Engineering and Full-Stack Development. I'm passionate about combining strong engineering principles with intelligent technologies to build impactful, reliable, and scalable products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1L3Xs9FzkM5XcK7eNkYGJSIyIGiAy2W9q/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                My Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Development</h4>
                  <p className="text-muted-foreground">
                    Builds responsive, scalable web applications with modern
                    frontend and backend technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Core Computer Science</h4>
                  <p className="text-muted-foreground">
                    Applies algorithms and systems fundamentals to solve
                    technical problems efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Develops computer vision and deep learning workflows for
                    practical, data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
