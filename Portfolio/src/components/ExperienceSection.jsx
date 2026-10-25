import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const internshipPhotos = [
  "/experience/image.png",
  "/experience/image%20copy.png",
  "/experience/image%20copy%202.png",
  "/experience/image%20copy%203.png",
  "/experience/WhatsApp%20Image%202026-10-25%20at%205.23.06%20PM.jpeg",
];

const technologies = [
  "React",
  "Python",
  "PyTorch",
  "TensorFlow",
  "OpenCV",
  "MediaPipe",
  "Git",
];

export const ExperienceSection = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const showPreviousPhoto = () => {
    setActivePhoto((current) =>
      current === 0 ? internshipPhotos.length - 1 : current - 1
    );
  };

  const showNextPhoto = () => {
    setActivePhoto((current) => (current + 1) % internshipPhotos.length);
  };

  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Experience <span className="text-primary">& Research</span>
        </h2>

        <article className="grid gap-8 overflow-hidden rounded-2xl border bg-card/80 p-6 shadow-lg md:grid-cols-2 md:p-8">
          <div className="space-y-6 text-left">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Research Internship
              </p>
              <h3 className="text-2xl font-bold md:text-3xl">
                Machine Learning Research Intern
              </h3>
              <p className="mt-2 text-lg font-medium text-muted-foreground">
                SWAN Lab · IIT Kharagpur
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                May – July 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Kharagpur, West Bengal
              </span>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                Independently designed and built a full-stack web platform to
                visualize pipeline outputs and manage research workflows.
              </li>
              <li>
                Developed reproducible computer vision and deep learning
                workflows, benchmarking model architectures and transfer
                learning approaches.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-br from-primary/15 via-background to-primary/5">
              <img
                src={internshipPhotos[activePhoto]}
                alt={`IIT Kharagpur internship photo ${activePhoto + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={showPreviousPhoto}
                aria-label="Show previous internship photo"
                className="absolute left-3 rounded-full bg-background/85 p-2 shadow transition hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNextPhoto}
                aria-label="Show next internship photo"
                className="absolute right-3 rounded-full bg-background/85 p-2 shadow transition hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="absolute bottom-3 right-3 rounded-full bg-background/85 px-3 py-1 text-xs">
                {activePhoto + 1} / {internshipPhotos.length}
              </span>
            </div>

            <a
              href="https://lnkd.in/p/dtUAgc2q"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border bg-background p-5 text-left transition-colors hover:border-primary/50"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-lg bg-[#0a66c2]/10 p-2 text-[#0a66c2]">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Kishlay Tejeswi</p>
                  <p className="text-xs text-muted-foreground">
                    LinkedIn · Summer Research Internship
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Completed a summer research internship at SWAN Lab, IIT
                Kharagpur, working on computer vision, facial image processing,
                and reproducible deep learning workflows.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read the post <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </article>

        
      </div>
    </section>
  );
};
