import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured, readable code with a focus on scalability and best practices.",
  },
  {
    icon: Rocket,
    title: "Real Projects",
    description:
      "Building practical applications like quiz apps, expense trackers, and food ordering systems.",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "Creating intuitive and interactive interfaces that are easy and enjoyable to use.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always improving by exploring new tools, solving problems, and building better solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into reality,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate full stack developer who enjoys building modern
                web applications from scratch. I started by learning how the web
                works, and quickly moved into creating real-world projects like
                quiz apps, expense trackers, and full food ordering systems.
              </p>
              <p>
                I work mainly with JavaScript, React, and Node.js, along with
                databases like PostgreSQL and MongoDB. I focus on building
                clean, scalable, and interactive applications with tools like
                Tailwind CSS, Redux, and TanStack Query.
              </p>
              <p>
                I'm constantly improving my skills by building projects,
                exploring new technologies, and solving real problems. My goal
                is to become an advanced developer who can create powerful and
                user-friendly applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I focus on building applications that are not only functional,
                but clean, scalable, and enjoyable to use."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
