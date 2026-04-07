import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript"] },
  { title: "Frameworks & Libraries", skills: ["FastAPI", "Node.js", "Express", "React", "Redux"] },
  { title: "ORMs", skills: ["Sequelize", "SQLAlchemy"] },
  { title: "Databases", skills: ["MongoDB", "Redis", "MySQL", "ElasticSearch"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Docker"] },
  { title: "Tools & Others", skills: ["Git", "RabbitMQ", "Pytest"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
              <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                    {skill}
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

export default Skills;
