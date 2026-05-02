import React, { useState } from "react";

export default function AIContributionBadge({ percentage }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getColor = () => {
    if (percentage >= 70)
      return "from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400";
    if (percentage >= 50)
      return "from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400";
    return "from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500";
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        {/* Robot/AI Icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600 dark:text-gray-400"
        >
          <path d="M12 8V4H8" />
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>

        <span className="text-xs text-gray-600 dark:text-gray-400">
          AI Contribution:
        </span>

        {/* Info Icon with Tooltip */}
        <div className="relative">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
            className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full 
                       border border-gray-400 dark:border-gray-500
                       text-gray-500 dark:text-gray-400
                       hover:border-gray-600 dark:hover:border-gray-300
                       hover:text-gray-700 dark:hover:text-gray-200
                       transition-colors cursor-help"
            aria-label="AI Contribution Info"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="6" r="5" />
              <path d="M6 8.5V6" />
              <circle cx="6" cy="4" r="0.5" fill="currentColor" />
            </svg>
          </button>

          {/* Tooltip */}
          {showTooltip && (
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                         w-72 px-3 py-2 rounded-lg
                         bg-gray-900 dark:bg-gray-800
                         border border-gray-700 dark:border-gray-600
                         shadow-xl z-10"
            >
              <p className="text-xs leading-relaxed text-gray-100 dark:text-gray-200">
                AI-assisted development percentage - shows how much AI tools handled repetitive tasks while I focused on architecture and logic.
              </p>
              {/* Tooltip Arrow */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full
                           w-0 h-0 border-l-4 border-r-4 border-t-4
                           border-l-transparent border-r-transparent
                           border-t-gray-900 dark:border-t-gray-800"
              />
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-1.5">
        <div className="w-16 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${getColor()}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span
          className={`text-xs font-mono font-semibold bg-gradient-to-r ${getColor()} bg-clip-text text-transparent`}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
}