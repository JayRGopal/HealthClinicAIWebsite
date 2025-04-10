"use client";

import { useState, useEffect } from "react";

interface TextFormattingMenuProps {
  onBoldToggle: () => void;
  onFontSizeChange: (size: string) => void;
  isBold: boolean;
  currentFontSize: string;
}

export const TextFormattingMenu: React.FC<TextFormattingMenuProps> = ({
  onBoldToggle,
  onFontSizeChange,
  isBold,
  currentFontSize,
}) => {
  const fontSizes = ["small", "medium", "large", "x-large"];

  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={onBoldToggle}
        className={`rounded-md p-2 ${
          isBold
            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        }`}
        aria-label={isBold ? "Disable bold text" : "Enable bold text"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Font Size:
        </span>
        <select
          value={currentFontSize}
          onChange={(e) => onFontSizeChange(e.target.value)}
          className="rounded border border-gray-200 bg-gray-100 p-1 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        >
          {fontSizes.map((size) => (
            <option key={size} value={size}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
