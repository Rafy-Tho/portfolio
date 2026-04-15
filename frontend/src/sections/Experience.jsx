const experiences = [
  {
    period: "2024",
    role: "Web Development Fundamentals",
    company: "Learning Phase",
    description:
      "Started learning the basics of web development, including HTML, CSS, and JavaScript, and built simple static websites.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "JavaScript & DOM",
    company: "Practice & Projects",
    description:
      "Strengthened JavaScript fundamentals, worked with DOM manipulation, and built interactive projects to improve problem-solving skills.",
    technologies: ["JavaScript", "DOM", "Git", "GitHub"],
    current: false,
  },
  {
    period: "2025",
    role: "Frontend Development",
    company: "Project-Based Learning",
    description:
      "Built dynamic and responsive user interfaces using modern tools and frameworks, focusing on user experience and clean design.",
    technologies: ["React", "Tailwind CSS", "Redux"],
    current: false,
  },
  {
    period: "2025 — 2026",
    role: "Backend & Databases",
    company: "Full Stack Learning",
    description:
      "Learned backend development with Node.js and PHP, and worked with databases like PostgreSQL and MongoDB to handle data and APIs.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
    current: false,
  },
  {
    period: "2026 — Present",
    role: "Full Stack Projects",
    company: "Real-World Applications",
    description:
      "Building full stack applications such as food ordering systems with authentication, cart functionality, and database integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "JavaScript"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-slate-900 dark:text-white">
              {" "}
              showcase my growth.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A journey of my growth as a developer, from learning the
            fundamentals to building real-world full stack applications and
            continuously improving my skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(59,130,246,0.55)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
