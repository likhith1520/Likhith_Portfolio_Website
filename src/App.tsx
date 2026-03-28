import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Contact />
    <Footer />
  </div>
);

export default App;
