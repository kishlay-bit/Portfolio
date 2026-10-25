import { ArrowRight, ExternalLink, FilePlus2, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Development",
    title: "Kissan Connect",
    description:
      "A farmer-first platform for discovering agricultural government schemes, understanding profile-based matching, and tracking applications.",
    image: "/projects/proj1.png",
    demoUrl: "https://kissanconnect-sepia.vercel.app/",
    githubUrl: "https://github.com/kishlay-bit/KISSANCONNECT",
  },
  {
    id: 2,
    category: "Development",
    title: "Dhansetu",
    description:
      "A Credit scoring platform to evaluate 40,000+ beneficiary records through automated income verification and applicant profiling.",
    image: "/projects/proj2.png",
    githubUrl: "https://github.com/Madhurtandon1/Dhansetu",
  },
  {
    id: 3,
    category: "Machine Learning",
    title: "Placement Predictor",
    description:
      "A two-stage supervised machine-learning system that estimates a student's model-estimated placement probability, salary if placed, 10th-to-90th-percentile salary interval, and derived expected LPA.",
    image: "/projects/proj3.png",
    githubUrl: "https://github.com/kishlay-bit/PlacementPredictor",
  },
  {
    id: 4,
    category: "Machine Learning",
    title: "Next Word Prediction",
    description:
      "A deep learning NLP project that predicts the next word in a sequence using an LSTM recurrent neural network trained on a quotes dataset.",
    image: "/projects/proj4.png",
    githubUrl: "https://github.com/kishlay-bit/Next_word_prediction",
  },
  {
    id: 5,
    category: "Research",
    title: "Facial Puffiness Classification",
    description:
      "Multi-label classification of three CelebA facial attributes using late fusion of a CNN image embedding with geometric feature vector from MediaPipe.",
    image: "/projects/proj5.png",
    githubUrl: "https://github.com/kishlay-bit/Facial-Puffiness-Classification",
  },
  {
    id: 6,
    category: "Research",
    title: "Facial Image BMI Prediction",
    description:
      "Designed an end-to-end facial BMI estimation pipeline on the Kaggle face2bmi-alignedimgs dataset (67,000+ images) with automated preprocessing, augmentation, and evaluation.",
    image: "/projects/proj6.png",
    githubUrl: "https://github.com/kishlay-bit/Facial-Image-Based-BMI-Prediction",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-xs card-hover"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-secondary/40">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FilePlus2 className="h-8 w-8 text-primary" />
                    <span className="text-sm">Add project image</span>
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex gap-4 pt-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kishlay-bit"
          >
            Show more on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};