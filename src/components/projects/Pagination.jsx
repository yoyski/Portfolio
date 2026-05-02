import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-9 h-9 rounded-lg 
                   border border-gray-200 dark:border-gray-700 
                   bg-gray-50 dark:bg-gray-800/50 
                   text-gray-700 dark:text-gray-300 
                   hover:bg-gray-100 dark:hover:bg-gray-700/50 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
        aria-label="Previous page"
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

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
            currentPage === page
              ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-lg 
                   border border-gray-200 dark:border-gray-700 
                   bg-gray-50 dark:bg-gray-800/50 
                   text-gray-700 dark:text-gray-300 
                   hover:bg-gray-100 dark:hover:bg-gray-700/50 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
        aria-label="Next page"
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
  );
}