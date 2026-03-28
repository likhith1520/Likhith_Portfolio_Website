import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Taxmann Technologies",
    role: "Associate Software Developer",
    period: "May 2023 – Present",
    location: "India",
    points: [
      "Worked on a centralized search platform integrating products like Research & Practice, enabling users to discover content seamlessly across multiple platforms",
      "Built Research Box for personalized content management, including favorites, bookmarks, and collections",
      "Developed admin and client dashboards for API consumers with usage visibility, access monitoring, rate limiting, and access control",
      "Implemented plan-based concurrent session control to restrict simultaneous content access based on subscriptions",
      "Built bookstore search and autocomplete with optimized relevance using multi-field querying and boosting",
      "Developed content indexing and reindexing workflows with admin-triggered updates and async background processing.",
      "Improved system performance using caching, query optimization, and efficient indexing",
      "Built a Semantic Search POC using Elasticsearch for intent-based search",
      "Developed admin modules for tracking purchases and subscriptions with filters and pagination",
      "Implemented RBAC for admin users, reports, and operational modules.",
      "Built AWS Lambda jobs to improve search ranking using user engagement signals like views and references",
      "Collaborated with frontend, QA, product, and business teams to deliver reliable product features"
    ],
  },
  {
    company: "Airis Data",
    role: "Trainee Engineer",
    period: "June 2022 – April 2023",
    location: "Onsite",
    points: [
      "Assisted in the maintenance, debugging, and enhancement of existing React and Node.js applications, contributing to sprint-based development tasks and code reviews",
      "Worked on implementing business-driven change requests and incremental feature enhancements for existing modules",
      "Participated in API integration, database operations, and data validation to support smooth application workflows and backend functionality",
      "Contributed to implementing authentication and pagination features in backend modules",
      "Performed local API performance validation and load testing to ensure reliability and functional stability during development"
    ],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    period: "2022 – 2023",
    location: "Remote",
    points: [
      "Built Origins HMS — an end-to-end Hospital Management System for a fertility hospital",
      "Developed automatic report generation for multiple scans and lab reports",
      "Implemented patient payment tracking system with multi-stage workflow for daily patient tracking",
      "Created bills generation with downloadable reports for patients and hospital records",
      "Built multiple reports to track expenses, costs, bills, patient reports, and donor reports",
      "Implemented authentication and authorization with RBAC for multiple user types — Patient, Doctor, Nurse, Admin, and Managers",
    ],
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
          Work <span className="text-gradient">Experience</span>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
          {experiences.map((exp, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.2 }} className="relative pl-8 md:pl-20 mb-12">
              <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 ring-4 ring-background" />
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium flex items-center gap-1.5 mt-1">
                      <Briefcase size={14} /> {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col text-sm text-muted-foreground gap-1">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
