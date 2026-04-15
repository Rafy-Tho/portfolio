import { ExternalLink } from "lucide-react";
import Github from "../icon/Github";
import { project1 } from "../assets";
const projects = [
  {
    title: "Learning Management System",
    description:
      "A Learning Management System built to manage courses, track student progress, and provide a structured learning experience with a user-friendly interface.",
    image: project1,
    tags: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Tanstack Query",
      "NodeJS",
      "PostgreSQL",
    ],
    link: "https://learning-online-platform-pern.onrender.com",
    github: "https://github.com/Rafy-Tho/Learning_Online_Platform_Pern",
  },
  {
    title: "Learning Management System",
    description:
      "A Learning Management System built to manage courses, track student progress, and provide a structured learning experience with a user-friendly interface.",
    image: project1,
    tags: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Tanstack Query",
      "NodeJS",
      "PostgreSQL",
    ],
    link: "https://learning-online-platform-pern.onrender.com",
    github: "https://github.com/Rafy-Tho/Learning_Online_Platform_Pern",
  },
  {
    title: "Learning Management System",
    description:
      "A Learning Management System built to manage courses, track student progress, and provide a structured learning experience with a user-friendly interface.",
    image: project1,
    tags: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Tanstack Query",
      "NodeJS",
      "PostgreSQL",
    ],
    link: "https://learning-online-platform-pern.onrender.com",
    github: "https://github.com/Rafy-Tho/Learning_Online_Platform_Pern",
  },
  {
    title: "Learning Management System",
    description:
      "A Learning Management System built to manage courses, track student progress, and provide a structured learning experience with a user-friendly interface.",
    image: project1,
    tags: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Tanstack Query",
      "NodeJS",
      "PostgreSQL",
    ],
    link: "https://learning-online-platform-pern.onrender.com",
    github: "https://github.com/Rafy-Tho/Learning_Online_Platform_Pern",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-slate-900 dark:text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden aspect-video block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
              </a>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between flex-col sm:flex-row sm:items-center gap-5">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors ">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-surface hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-surface hover:bg-primary hover:text-primary-foreground transition-all  "
                      aria-label="Live preview"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
