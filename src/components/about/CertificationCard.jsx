import React from 'react'

export default function CertificationCard({ title, issuer, date, credentialId, link }) {

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
          {credentialId && (
            <p className="text-xs mt-1 font-mono text-gray-400 dark:text-gray-500">ID: {credentialId}</p>
          )}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            aria-label="View credential"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 13L13 1M13 1H4M13 1v9" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}