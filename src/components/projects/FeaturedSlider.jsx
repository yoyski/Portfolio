import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import AIContributionBadge from "./AIContributionBadge";
import TechTag from "./TechTag";

export default function FeaturedSlider({
  projects,
  sliderRef,
  currentIndex,
  onScroll,
  onSlideChange,
  onPrev,
  onNext,
}) {
  const [expandedSlides, setExpandedSlides] = useState({});

  if (projects.length === 0) return null;

  const toggleExpand = (index) => {
    setExpandedSlides((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Reset expanded state when sliding
  const handleSlideChange = (index) => {
    setExpandedSlides({});
    onSlideChange(index);
  };

  const handlePrev = () => {
    setExpandedSlides({});
    onPrev();
  };

  const handleNext = () => {
    setExpandedSlides({});
    onNext();
  };

  const handleScroll = (e) => {
    // Collapse all when manually scrolling
    setExpandedSlides({});
    onScroll(e);
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-5 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Featured
        </h2>
      </div>

      <div className="relative">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div key={i} className="min-w-full snap-center">
              <div
                className="rounded-xl overflow-hidden 
                          border border-gray-200 dark:border-gray-700 
                          bg-gray-50 dark:bg-gray-800/30 
                          shadow-sm hover:shadow-md transition-shadow
                          flex flex-col h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover object-top flex-shrink-0"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div className="flex-1 min-h-[100px]">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h3>
                      <div className="mt-1.5">
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {expandedSlides[i]
                            ? project.description
                            : truncateText(project.description)}
                        </p>
                        {project.description.length > 120 && (
                          <button
                            onClick={() => toggleExpand(i)}
                            className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 
                                     hover:text-emerald-700 dark:hover:text-emerald-300 
                                     transition-colors"
                          >
                            {expandedSlides[i] ? "Show less" : "Show more"}
                          </button>
                        )}
                      </div>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <div className="mt-auto space-y-4">
                    <AIContributionBadge percentage={project.aiContribution} />
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <TechTag key={idx} label={tech} />
                      ))}
                    </div>

                    {/* Two Button Layout */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm 
                                   border-2 border-gray-600 dark:border-gray-400
                                   text-gray-700 dark:text-gray-300
                                   hover:bg-gray-100 dark:hover:bg-gray-700
                                   font-medium rounded-md transition-all"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                      </a>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm 
                                   bg-gradient-to-r from-emerald-600 to-teal-600 
                                   hover:from-emerald-700 hover:to-teal-700 
                                   text-white font-medium rounded-md transition-all shadow-sm hover:shadow"
                      >
                        Visit Site
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 11L11 1M11 1H3M11 1v8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-1.5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSlideChange(i)}
                className={
                  i === currentIndex
                    ? "rounded-full w-6 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400"
                    : "rounded-full w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                }
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-9 h-9 rounded-lg 
                         border border-gray-200 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-800/50 
                         text-gray-700 dark:text-gray-300 
                         hover:bg-gray-100 dark:hover:bg-gray-700/50 
                         transition-colors"
              aria-label="Previous"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-9 h-9 rounded-lg 
                         border border-gray-200 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-800/50 
                         text-gray-700 dark:text-gray-300 
                         hover:bg-gray-100 dark:hover:bg-gray-700/50 
                         transition-colors"
              aria-label="Next"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
