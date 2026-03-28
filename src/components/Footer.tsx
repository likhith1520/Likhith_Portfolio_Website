import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ameti Likhith. Built with passion.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:likhith.kumar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
          <a href="tel:6589500000" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={18} /></a>
          <a href="https://www.linkedin.com/in/likhith-kumar123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
