import React from 'react'

export default function CertificationCard({ title, issuer, date }) {

  return (
    <div className="rounded-lg p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{issuer}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}