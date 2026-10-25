const skillGroups = [
  {
    title: "Development",
    description:
      "Languages, frameworks, databases, and tools for building and shipping applications.",
    categories: [
      {
        name: "Languages",
        skills: [
          "Python",
          "JavaScript",
          "TypeScript",
          "C",
          "C++",
          "Java",
          "HTML5",
          "CSS3",
          "Markdown",
          "Bash",
        ],
      },
      {
        name: "Frameworks & Libraries",
        skills: [
          "React",
          "Next.js",
          "Express.js",
          "Node.js",
          "Redux",
          "React Router",
          "Tailwind CSS",
          "Bootstrap",
          "Axios",
          "Clerk",
        ],
      },
      {
        name: "Databases",
        skills: ["MongoDB", "PostgreSQL", "Cassandra", "Redis", "MySQL", "SQLite"],
      },
      {
        name: "Tools & DevOps",
        skills: [
          "Git",
          "GitHub",
          "VS Code",
          "Postman",
          "Nodemon",
          "Docker",
          "Kubernetes",
          "ESLint",
          "GitHub Actions",
          "Vite",
          "NPM",
          "Vercel",
          "Render",
          "Netlify",
          "Gunicorn",
          "Nginx",
          "Poetry",
        ],
      },
    ],
  },
  {
    title: "Machine Learning & Deployment",
    description:
      "Machine learning, deep learning, and computer vision tools from experimentation to deployment.",
    categories: [
      {
        name: "ML & Computer Vision",
        skills: [
          "PyTorch",
          "TensorFlow",
          "Keras",
          "Scikit-learn",
          "OpenCV",
          "MediaPipe",
          "Pandas",
          "Transformers",
          "Hugging Face",
          "SciPy",
          "NumPy",
          "Matplotlib",
        ],
      },
      {
        name: "Model Deployment",
        skills: ["ONNX", "TensorFlow Lite", "Flask", "Streamlit"],
      },
    ],
  },
  {
    title: "Core Computer Science",
    description:
      "Foundational concepts for designing efficient software and understanding computer systems.",
    categories: [
      {
        name: "Coursework",
        skills: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming",
          "DBMS",
          "Operating Systems",
          "Computer Networks",
          "Computer Architecture",
          "Design & Analysis of Algorithms",
        ],
      },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-secondary/30 px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Skills & <span className="text-primary">Coursework</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          A practical toolkit spanning software development, machine learning,
          and core computer science.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`rounded-xl border bg-card p-6 shadow-xs ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {group.description}
              </p>

              <div
                className={`mt-6 grid gap-5 ${
                  index === 0 ? "sm:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {group.categories.map((category) => (
                  <div key={category.name}>
                    <h4 className="mb-3 text-sm font-medium text-foreground/80">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border bg-background px-3 py-1.5 text-sm text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
