import { motion } from "framer-motion";

const projects = [
  {
    title: "Taxmann Search Engine",
    description: "Premium cross-platform search with auto-suggestions, spell check, root word management, and semantic search POC for intent-based querying.",
    tech: ["Python", "FastAPI", "ElasticSearch", "MySQL", "Redis", "React"],
    color: "from-primary/20 to-emerald-500/10",
  },
  {
    title: "Research Box",
    description: "Feature for users to maintain favourite documents, sticky notes, and personalized collections across the Taxmann platform.",
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    color: "from-sky-500/20 to-primary/10",
  },
  {
    title: "API Dashboards",
    description: "Client-facing dashboards for Taxmann APIs with rate limiting per org/user, usage reports, and caching for high performance.",
    tech: ["Python", "FastAPI", "Redis", "MongoDB", "React"],
    color: "from-amber-500/20 to-primary/10",
  },
  {
    title: "Origins HMS",
    description: "End-to-end Hospital Management System for a fertility hospital — auto report generation, patient tracking, bills, RBAC for doctors, nurses, admins.",
    tech: ["Node.js", "MySQL", "Docker", "Redis", "React"],
    color: "from-rose-500/20 to-primary/10",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-16 text-center"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative bg-gradient-to-br ${project.color} border border-border rounded-xl p-6 md:p-8 group hover:border-primary/30 transition-all`}
            >
              <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
