/**
 * Projects Component
 * Displays project cards from data/projects.js
 * 
 * Animation: 
 * - Staggered reveal on scroll
 * - Hover lift and glow effects
 * - Tech tags with spring animation
 */

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Tag from "./Tag";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 md:py-24 lg:py-32">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-60 md:w-96 h-60 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-60 md:w-80 h-60 md:h-80 bg-pink-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="PROJECTS" subtitle="Things I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              delay={index * 0.1}
              className={`
                p-4 md:p-6
                ${project.featured ? "md:col-span-2" : ""}
                ${project.isMore ? "flex flex-col items-center justify-center text-center" : ""}
              `}
            >
              {/* Project content */}
              <div className={project.featured ? "md:flex md:gap-6" : ""}>
                {/* Project image placeholder */}
                {!project.isMore && (
                  <div className={`
                    mb-4 rounded-xl overflow-hidden
                    bg-gradient-to-br from-purple-500/10 to-pink-500/10
                    border border-white/5
                    ${project.featured ? "md:w-1/3 md:mb-0" : ""}
                  `}>
                    <div className="aspect-video flex items-center justify-center">
                      <div className="text-4xl opacity-50">
                        {project.id === 1 && "🥔"}
                        {project.id === 2 && "🌱"}
                        {project.id === 3 && "📋"}
                        {project.id === 4 && "🏠"}
                      </div>
                    </div>
                  </div>
                )}

                {/* Project details */}
                <div className={project.featured ? "md:flex-1" : ""}>
                  {/* Featured badge */}
                  {project.featured && (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-4 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="text-purple-400 mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Tag key={tech} text={tech} variant="secondary" />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.codeUrl && (
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                          flex items-center gap-2 px-4 py-2
                          text-sm font-medium text-gray-300
                          bg-white/5 border border-white/10
                          rounded-full
                          hover:bg-white/10 hover:border-white/20
                          transition-all duration-300
                        "
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
