import React from "react";

export default function EducationCard({ degree, school, period, desc, isLast }) {
  return (
    <div className="relative pl-6">
      <div
        className="absolute w-3 h-3 rounded-full border-2 
                   border-emerald-600 dark:border-emerald-400 
                   bg-white dark:bg-[#1e1e2e]"
        style={{ left: 0, top: "6px" }}
      />
      {!isLast && (
        <div
          className="absolute bg-emerald-300 dark:bg-emerald-700"
          style={{ left: "10px", top: "16px", width: "2px", bottom: "-20px" }}
        />
      )}
      <div
        className="rounded-lg p-4 border border-gray-200 dark:border-gray-700 
                      bg-gray-50 dark:bg-gray-800/30 
                      hover:bg-gray-100 dark:hover:bg-gray-800/50 
                      transition-colors"
      >
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {degree}
        </h3>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {school}
          </span>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
            {period}
          </span>
        </div>
        <p className="text-sm mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
}