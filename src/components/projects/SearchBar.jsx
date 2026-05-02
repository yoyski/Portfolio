import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search by name, description, or tech..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2.5 rounded-lg 
                   border border-gray-200 dark:border-gray-700 
                   bg-gray-50 dark:bg-gray-800/50 
                   text-gray-900 dark:text-gray-100 
                   placeholder:text-gray-500 dark:placeholder:text-gray-400 
                   text-sm outline-none 
                   focus:border-blue-500 dark:focus:border-blue-400 
                   focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 
                   transition-all"
      />
    </div>
  );
}