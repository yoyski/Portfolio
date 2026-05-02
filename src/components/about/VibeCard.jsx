import React from "react";

export default function VibeCard({ icon, iconBg, iconColor, title, description, highlight }) {
  return (
    <div
      className="rounded-lg p-5 border border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-gray-800/40
                    hover:shadow-md hover:scale-[1.02] transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center mb-3`}>
        <span className={`text-lg font-bold ${iconColor}`}>{icon}</span>
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
          {highlight}
        </span>
      </p>
    </div>
  );
}