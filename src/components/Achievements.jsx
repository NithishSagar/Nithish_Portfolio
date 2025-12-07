/**
 * Achievements Component
 * Badge-style cards for notable accomplishments
 * 
 * Data: Imports from data/achievements.js
 * Animation: Staggered reveal with hover effects
 */

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { achievements } from "../data/achievements";

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-16 md:py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 w-60 md:w-96 h-60 md:h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="ACHIEVEMENTS" subtitle="Milestones & Recognition" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="
                relative p-4 md:p-6 rounded-2xl text-center
                bg-gradient-to-br from-white/[0.05] to-white/[0.02]
                border border-white/[0.08]
                hover:border-purple-500/30
                transition-colors duration-300
                group
              "
            >
              {/* Trophy icon with glow */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="
                  inline-flex items-center justify-center
                  w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 rounded-full
                  bg-gradient-to-br from-purple-500/20 to-pink-500/20
                  text-3xl md:text-4xl
                  group-hover:shadow-lg group-hover:shadow-purple-500/20
                  transition-shadow duration-300
                "
              >
                {achievement.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                {achievement.title}
              </h3>

              {/* Highlight tag */}
              <span className="
                inline-block px-2 md:px-3 py-1 mb-2 md:mb-3
                text-xs font-medium
                bg-purple-500/10 text-purple-400
                rounded-full
              ">
                {achievement.highlight}
              </span>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {achievement.description}
              </p>

              {/* Decorative corner accent */}
              <div className="
                absolute top-0 right-0 w-20 h-20
                bg-gradient-to-br from-purple-500/10 to-transparent
                rounded-tr-2xl rounded-bl-full
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              " />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
