import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "likhith.kumar2903@gmail.com", href: "mailto:likhith.kumar2903@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9515956730", href: "tel:9515956730" },
  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/likhith-kumar123" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-display font-bold mb-6">
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground mb-12 max-w-md mx-auto">
          I'm currently open to new opportunities. Feel free to reach out!
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {contactItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors group">
                  <item.icon size={18} className="text-primary shrink-0" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <item.icon size={18} className="text-primary shrink-0" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
