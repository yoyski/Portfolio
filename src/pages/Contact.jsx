import React from "react";
import { motion } from "framer-motion";
import {
  ContactInfo,
  ContactForm,
  AvailabilityCard,
} from "../components/contact";
import { contactInfo } from "../data/contactData";
import { pageVariants, slideFromLeftVariants, slideFromRightVariants } from "../utils/animations";

const MotionDiv = motion.div;


export default function Contact() {
  return (
    <MotionDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-7xl mx-auto md:px-8 py-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Contact
            </span>
          </div>
          <h1
            className="text-4xl font-bold text-gray-900 dark:text-gray-100"
            style={{ letterSpacing: "-0.02em" }}
          >
            Get in Touch
          </h1>
          <p
            className="text-base leading-relaxed mt-4 mb-12 text-gray-700 dark:text-gray-300"
            style={{ maxWidth: "480px" }}
          >
            Have a project in mind or just want to say hi? Feel free to reach out
            — I'd love to hear from you.
          </p>
        </MotionDiv>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Left — Contact Info */}
          <MotionDiv
            variants={slideFromLeftVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-6 xl:w-80 shrink-0"
          >
            <div className="flex flex-col gap-3">
              {contactInfo.map((info, index) => (
                <MotionDiv
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <ContactInfo info={info} />
                </MotionDiv>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700" />

            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <AvailabilityCard />
            </MotionDiv>
          </MotionDiv>

          {/* Right — Form */}
          <motion.div
            variants={slideFromRightVariants}
            initial="initial"
            animate="animate"
            className="flex-1"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </MotionDiv>
  );
}