import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
          <span className="text-gradient">Education</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground">Bachelor of Technology in Computer Science</h3>
              <p className="text-primary font-medium mt-1">CVR College of Engineering</p>
              <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-2"><Calendar size={14} /> 2018-2022</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">Comprehensive program covering data structures and algorithms, and database management systems.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
