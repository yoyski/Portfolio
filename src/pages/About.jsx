import React from "react";
import { motion } from "framer-motion";
import EducationCard from "../components/about/EducationCard";
import VibeCard from "../components/about/VibeCard";
import CertificationCard from "../components/about/CertificationCard";
import SectionHeader from "../components/common/SectionHeader";
import { education, vibeCoding, certifications } from "../data/aboutData";
import {
  pageVariants,
  containerVariants,
  itemVariants,
} from "../utils/animations";

const MotionDiv = motion.div;


export default function About() {
  return (
    <MotionDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto md:px-8 py-10"
    >
      <div className="">
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          <div className="flex-1">
            {/* Header */}
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-2"
            >
              <div className="w-6 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                About Me
              </span>
            </MotionDiv>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base leading-relaxed mt-4 mb-10 text-gray-700 dark:text-gray-300"
              style={{ maxWidth: "800px" }}
            >
              Hello! <b>I'm Ferdinand A. Samarro Jr.</b>, a passionate learner with a keen interest in web development and technology. I enjoy
              building projects that solve real-world problems and exploring new
              frameworks and tools.
            </motion.p>

            <div className="w-full mb-10 border-t border-gray-200 dark:border-gray-700" />

            {/* How I Actually Code Section */}
            <section className="mb-10">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <SectionHeader
                  label="How I Actually Code"
                  gradientFrom="from-teal-600"
                  gradientTo="to-cyan-600 dark:from-teal-400 dark:to-cyan-400"
                />
              </MotionDiv>
              <MotionDiv
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {vibeCoding.map((vibe, idx) => (
                  <MotionDiv key={idx} variants={itemVariants}>
                    <VibeCard {...vibe} />
                  </MotionDiv>
                ))}
              </MotionDiv>
            </section>

            <div className="w-full mb-10 border-t border-gray-200 dark:border-gray-700" />

            {/* Education */}
            <section className="mb-10">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <SectionHeader
                  label="Education"
                  gradientFrom="from-emerald-600"
                  gradientTo="to-teal-600 dark:from-emerald-400 dark:to-teal-400"
                />
              </MotionDiv>
              <MotionDiv
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-5"
              >
                {education.map((e, i) => (
                  <MotionDiv key={e.school} variants={itemVariants}>
                    <EducationCard {...e} isLast={i === education.length - 1} />
                  </MotionDiv>
                ))}
              </MotionDiv>
            </section>

            <div className="w-full mb-10 border-t border-gray-200 dark:border-gray-700" />

            {/* Certifications & Achievements */}
            <section>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <SectionHeader
                  label="Certifications & Achievements"
                  gradientFrom="from-emerald-600"
                  gradientTo="to-teal-600 dark:from-emerald-400 dark:to-teal-400"
                />
              </MotionDiv>
              <MotionDiv
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {certifications.map((cert, idx) => (
                  <MotionDiv key={idx} variants={itemVariants}>
                    <CertificationCard {...cert} />
                  </MotionDiv>
                ))}
              </MotionDiv>
            </section>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}