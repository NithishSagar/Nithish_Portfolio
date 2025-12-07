/**
 * Skills Component
 * Displays skills organized by category with animated chips and icons
 * 
 * Data: Imports from data/skills.js
 * Animation: Staggered grid reveal on scroll
 */

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import SkillIcon from "./SkillIcon";
import { skills } from "../data/skills";

const Skills = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-60 md:w-80 h-60 md:h-80 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="SKILLS" subtitle="Technologies I work with" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              className="
                p-4 md:p-5 rounded-2xl
                bg-white/[0.02] border border-white/[0.05]
                hover:bg-white/[0.04] hover:border-purple-500/20
                transition-all duration-300
              "
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">{skillGroup.icon}</span>
                <h3 className="text-white font-medium text-xs md:text-sm">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skill chips with icons */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: skillIndex * 0.03,
                      duration: 0.3 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                    }}
                    className="
                      inline-flex items-center gap-2 md:gap-2.5
                      px-3 md:px-4 py-1.5 md:py-2
                      text-xs md:text-sm font-medium
                      rounded-full border backdrop-blur-sm
                      bg-white/5 border-white/10 text-gray-300
                      hover:border-purple-500/50 hover:bg-white/10
                      transition-all duration-300
                      cursor-default
                    "
                  >
                    <SkillIcon 
                      icon={skill.icon} 
                      size={24}
                      className="opacity-90"
                      style={{ color: skill.color }}
                    />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
