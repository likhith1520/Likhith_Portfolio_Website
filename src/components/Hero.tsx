import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
           Full Stack Developer | Problem Solver
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Hi! I'm{" "}
            <span className="text-gradient">Ameti Likhith</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
            Passionate software developer with expertise in building scalable backend systems, RESTful APIs, and full-stack applications. I thrive on solving complex problems, writing clean code, and delivering solutions that make a real impact.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Contact Me
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
              View Work
            </a>
            <a href="https://drive.google.com/file/d/1iImh9UCa_g7-aCQ4u2liS59u8CSl1snL/view" target="_blank" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
              Download Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Hyderabad, India</span>
            <span className="flex items-center gap-1.5"><Mail size={14} /> likhith.kuma2903@gmail.com</span>
            <span className="flex items-center gap-1.5"><Phone size={14} /> +91 9515956730</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center glow">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-display font-bold text-gradient">AL</div>
                <div className="mt-2 px-4 py-1.5 bg-secondary rounded-full text-xs font-medium text-foreground tracking-wider uppercase">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="text-muted-foreground animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
