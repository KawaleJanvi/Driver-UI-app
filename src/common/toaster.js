import { toaster } from "baseui/toast";

/**
 * Centralized Toast Utility for BaseWeb
 * @param {string} message - The toast message
 * @param {'success' | 'error' | 'warning' | 'info'} type - The type of toast
 * @param {number} duration - Optional auto-hide duration in ms
 */
export const showToast = (message, type = "info", theme, duration = 3000) => {
  const colorMap = {
    success: {bg: theme.colors.green300, color: theme.colors.green800},   // green
    error: {bg: theme.colors.red300, color: theme.colors.red800},       // red
    warning: {bg: theme.colors.yellow300, color: theme.colors.yellow800},  // yellow
    info: {bg: theme.colors.blue300, color: theme.colors.blue800},      // dark green (your custom brand)
  };

  const toastOptions = {
    autoHideDuration: duration,
    overrides: {
      Body: {
        style: {
          backgroundColor: colorMap[type].bg || colorMap.info.bg,
          color: colorMap[type].color || colorMap.info.color,
        },
      },
    },
  };

  switch (type) {
    case "success":
      toaster.positive(message, toastOptions);
      break;
    case "error":
      toaster.negative(message, toastOptions);
      break;
    case "warning":
      toaster.warning(message, toastOptions);
      break;
    default:
      toaster.info(message, toastOptions);
      break;
  }
};
