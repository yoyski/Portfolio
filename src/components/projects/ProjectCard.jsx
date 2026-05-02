import React from "react";
import StatusBadge from "./StatusBadge";
import AIContributionBadge from "./AIContributionBadge";
import TechTag from "./TechTag";

export default function ProjectCard({ project }) {
  return (
    <div
      className="rounded-xl overflow-hidden 
                 border border-gray-200 dark:border-gray-700 
                 bg-gray-50 dark:bg-gray-800/30 
                 hover:shadow-md transition-shadow"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-5">
        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>
        <AIContributionBadge percentage={project.aiContribution} />
        <p className="text-xs mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3.5">
          {project.tech.map((tech, idx) => (
            <TechTag key={idx} label={tech} />
          ))}
        </div>
        
        {/* Two Button Layout */}
        <div className="flex gap-2 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs 
                       border border-gray-600 dark:border-gray-400
                       text-gray-700 dark:text-gray-300
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       font-medium rounded-md transition-all"
          >
            <svg
              width="14"
              height="14"
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
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs 
                       bg-gradient-to-r from-emerald-600 to-teal-600 
                       hover:from-emerald-700 hover:to-teal-700
                       text-white font-medium rounded-md transition-all shadow-sm hover:shadow"
          >
            Visit Site
            <svg
              width="12"
              height="12"
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
  );
}