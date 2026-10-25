import {
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    title: "TECH-A-THON 5.0 Winner",
    detail: "Built KisanConnect, a GovTech platform connecting farmers with welfare schemes.",
    year: "2026",
    icon: Trophy,
  },
  {
    title: "Smart India Hackathon Finalist",
    detail: "Earned a place among the top five teams nationally.",
    year: "2025",
    icon: Award,
  },
  {
    title: "Hackaway Hackathon Runner-Up",
    detail: "Created an ESP32-powered robot controlled through hand gestures.",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "350+ Coding Problems Solved",
    detail: "Practiced algorithms and data structures across LeetCode, GeeksforGeeks, and more.",
    year: "Ongoing",
    icon: Code2,
  },
];

const achievementImages = [
  "/achievement/image1.png",
  "/achievement/image2.png",
  "/achievement/image3.png",
  "/achievement/image4.png",
  "/achievement/image5.png",
  "/achievement/image6.png",
];

export const AchievementsSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? achievementImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % achievementImages.length);
  };

  return (
    <section id="achievements" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Achievements <span className="text-primary">& Milestones</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          A few highlights from building, competing, and growing as a computer
          science student.
        </p>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {achievements.map(({ title, detail, year, icon: Icon }) => (
              <article
                key={title}
                className="flex gap-4 rounded-xl border bg-card/80 p-5 text-left shadow-xs"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-sm text-muted-foreground">{year}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div
            className="relative overflow-hidden rounded-2xl border bg-card shadow-lg"
            aria-label="Achievement photo slideshow"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-secondary/30 p-3">
              <img
                src={achievementImages[activeImage]}
                alt={`Achievement gallery photo ${activeImage + 1} of ${achievementImages.length}`}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Show previous achievement photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow transition hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Show next achievement photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow transition hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <span className="text-sm text-muted-foreground">
                Achievement gallery
              </span>
              <div className="flex items-center gap-2">
                {achievementImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show achievement photo ${index + 1}`}
                    aria-current={activeImage === index ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all ${
                      activeImage === index
                        ? "w-6 bg-primary"
                        : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {activeImage + 1} / {achievementImages.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
