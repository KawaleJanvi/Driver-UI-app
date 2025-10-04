import React from "react";

export function LoginWrapper({ children }) {
  return (
    <div className="max-w-md mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      {children}
    </div>
  );
}