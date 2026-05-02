import React from "react";
import { motion } from "framer-motion";
import { CategoryCard, LegendItem } from "../components/skills";
import { skillCategories } from "../data/skillsData";
import {
  pageVariants,
  containerVariants,
  itemVariants,
} from "../utils/animations";

export default function Skills() {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto md:px-8 py-10"
    >
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Expertise
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-gray-900 dark:text-gray-100"
          style={{ letterSpacing: "-0.02em" }}
        >
          Skills
        </h1>

        <p
          className="text-base leading-relaxed mt-4 mb-10 text-gray-700 dark:text-gray-300"
          style={{ maxWidth: "480px" }}
        >
          A snapshot of my technical skills and proficiency built through
          projects, coursework, and hands-on practice.
        </p>
      </MotionDiv>

      {/* Legend */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap gap-4 mb-10 px-1"
      >
        <LegendItem label="Beginner (< 50%)" range="Beginner" />
        <LegendItem label="Intermediate (50–75%)" range="Intermediate" />
        <LegendItem label="Advanced (75%+)" range="Advanced" />
      </MotionDiv>

      {/* Skill Categories */}
      <MotionDiv
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-6"
      >
        {skillCategories.map((cat) => (
          <MotionDiv key={cat.label} variants={itemVariants}>
            <CategoryCard label={cat.label} skills={cat.skills} />
          </MotionDiv>
        ))}
      </MotionDiv>

      {/* Divider */}
      <div className="w-full mt-12 mb-10 border-t border-gray-200 dark:border-gray-700" />

      {/* All Skills as Tags */}
      <section>
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center gap-2 mb-5"
        >
          <div className="w-5 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
            All Skills
          </h2>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {skillCategories
            .flatMap((cat) => cat.skills)
            .map((s, index) => (
              <motion.span
                key={s.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.03, duration: 0.3 }}
                className="px-3 py-1.5 rounded-full 
                           border border-emerald-200 dark:border-emerald-800 
                           bg-emerald-50 dark:bg-emerald-900/20 
                           text-sm text-emerald-700 dark:text-emerald-300
                           hover:bg-emerald-100 dark:hover:bg-emerald-900/30
                           transition-colors"
              >
                {s.name}
              </motion.span>
            ))}
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}
