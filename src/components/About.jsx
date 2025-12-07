/**
 * About Component
 * Personal introduction and education timeline
 * 
 * Animation: Scroll-triggered fade-in for text blocks and education cards
 */

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";

const education = [
  {
    degree: "MSc in Advanced Artificial Intelligence",
    institution: "University of York",
    location: "York, UK",
    period: "2025 – 2026",
    current: true,
  },
  {
    degree: "Bachelor of Engineering in Information Science",
    institution: "Malnad College of Engineering",
    location: "India",
    period: "2020 – 2024",
    current: false,
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-60 md:w-96 h-60 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="ABOUT" subtitle="Get to know me" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hello! I'm <span className="text-white font-medium">Nithish Sagar Dharmappa</span>, 
              a passionate developer based in <span className="text-purple-400">Leeds, UK</span>. 
              I specialize in creating elegant, user-friendly web applications with a 
              focus on clean code and exceptional user experiences.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              My journey in tech has taken me from building full-stack applications to 
              training the next generation of developers. I've worked on diverse projects 
              ranging from AI-powered agricultural solutions to IoT applications, always 
              pushing the boundaries of what's possible with technology.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              Currently, I'm deepening my expertise in Artificial Intelligence through 
              my Master's program, combining my practical development skills with 
              cutting-edge AI research. When I'm not coding, you'll find me exploring 
              new technologies, contributing to open source, or mentoring aspiring developers.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "60+", label: "Interns Trained" },
                { value: "5+", label: "Projects Built" },
                { value: "3+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-sm text-purple-400 mb-6"
            >
              {"// Education"}
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />
              
              {education.map((edu, index) => (
                <GlassCard
                  key={edu.degree}
                  delay={index * 0.15}
                  className="ml-10 mb-4 p-5"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[1.65rem] top-6 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  
                  {/* Current badge */}
                  {edu.current && (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-green-500/10 text-green-400 rounded-full mb-2">
                      Current
                    </span>
                  )}
                  
                  <h4 className="text-white font-semibold mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-300 text-sm mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{edu.location}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.period}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
