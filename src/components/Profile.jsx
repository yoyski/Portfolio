import React from "react";
import profilePic from "../images/profile.png";
import resumePdf from "../assets/Ferdinand_Samarro_Resume.pdf";

export default function Profile() {
  return (
    <div>
      {/* SIDEBAR */}
      <aside
        className="mx-auto w-full rounded-xl p-6 shadow-sm
              bg-gray-50 dark:bg-gray-800/40
              border border-gray-200 dark:border-gray-700
              lg:sticky lg:top-30 lg:max-w-sm xl:max-w-xl space-y-5"
      >
        <div className="text-center">
          <div
            className="mx-auto mb-4 h-24 w-24 rounded-full
                  bg-gradient-to-br from-emerald-100 to-teal-100 
                  dark:from-emerald-900/30 dark:to-teal-900/30
                  border-2 border-emerald-200 dark:border-emerald-800
                  overflow-hidden"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Samarro, Ferdinand Jr. A.
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Software Developer
          </p>
        </div>

        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          Passionate about building clean, accessible, and modern interfaces.
        </p>

        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-600 dark:text-emerald-400 flex-shrink-0"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>ferdinandasjr@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-600 dark:text-emerald-400 flex-shrink-0"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Philippines</span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-600 dark:text-emerald-400 flex-shrink-0"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>9 Projects</span>
          </li>
        </ul>

        <div className="flex justify-center gap-4 pt-2">
          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/ferdinandarriegasamarrojr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full
               border border-gray-200 dark:border-gray-700
               bg-gray-50 dark:bg-gray-800
               hover:bg-emerald-100 dark:hover:bg-emerald-900/30
               hover:border-emerald-300 dark:hover:border-emerald-700
               transition-colors group"
            aria-label="Facebook"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* MESSENGER */}
          <a
            href="https://m.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full
               border border-gray-200 dark:border-gray-700
               bg-gray-50 dark:bg-gray-800
               hover:bg-teal-100 dark:hover:bg-teal-900/30
               hover:border-teal-300 dark:hover:border-teal-700
               transition-colors group"
            aria-label="Messenger"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400"
            >
              <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
            </svg>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full
            border border-gray-200 dark:border-gray-700
            bg-gray-50 dark:bg-gray-800
            hover:bg-emerald-100 dark:hover:bg-emerald-900/30
            hover:border-emerald-300 dark:hover:border-emerald-700
            transition-colors group"
            aria-label="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.366-1.85 3.6 0 4.27 2.368 4.27 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
            </svg>
          </a>
        </div>

        {/* DOWNLOAD RESUME BUTTON */}
        <a
          href={resumePdf}
          download="Ferdinand_Samarro_Resume.pdf"
          className="w-full rounded-lg p-3 font-medium transition-all
                bg-gradient-to-r from-emerald-600 to-teal-600 
                hover:from-emerald-700 hover:to-teal-700
                text-white shadow-md hover:shadow-lg
                dark:from-emerald-500 dark:to-teal-500
                dark:hover:from-emerald-600 dark:hover:to-teal-600
                flex items-center justify-center gap-2"
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </aside>
    </div>
  );
}