/**
 * Experience Component
 * Work experience timeline from data/experience.js
 * 
 * Animation:
 * - Timeline cards fade/slide in on scroll
 * - Staggered reveal for highlights
 */

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 right-1/4 w-60 md:w-96 h-60 md:h-96 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="EXPERIENCE" subtitle="Where I've worked" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="
            hidden md:block absolute left-1/2 top-0 bottom-0 w-px 
            bg-gradient-to-b from-purple-500 via-pink-500 to-transparent
            -translate-x-1/2
          " />

          <div className="space-y-6 md:space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`
                  md:flex md:items-center md:gap-8
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Timeline dot - desktop only */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ring-4 ring-black" />
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Experience card */}
                <div className="md:w-1/2">
                  <GlassCard className="p-4 md:p-6" hover={true}>
                    {/* Mobile timeline indicator */}
                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      <span className="text-sm text-gray-500">{job.duration}</span>
                    </div>

                    {/* Job type badge */}
                    <span className={`
                      inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-2 md:mb-3
                      ${job.type === "Full-time" 
                        ? "bg-green-500/10 text-green-400" 
                        : "bg-blue-500/10 text-blue-400"
                      }
                    `}>
                      {job.type}
                    </span>

                    {/* Role & Company */}
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm md:text-base mb-1">
                      {job.company}
                    </p>
                    
                    {/* Location & Duration */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="hidden md:flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {job.duration}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
