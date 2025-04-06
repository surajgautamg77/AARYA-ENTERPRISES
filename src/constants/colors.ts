// Tailwind CSS color values for consistency across the site

export const COLORS = {
  // Primary brand colors - Nebi Blue Theme
  primary: {
    50: "#e6f1ff",
    100: "#cce3ff",
    200: "#99c7ff",
    300: "#66abff",
    400: "#338fff",
    500: "#0073ff", // Main Nebi Blue
    600: "#005cd9",
    700: "#0046b3",
    800: "#002f8c",
    900: "#001966",
  },

  // Semantic colors
  success: "#0e9f6e",
  warning: "#ff5a1f",
  error: "#e02424",
  info: "#0073ff",

  // Neutrals
  gray: {
    50: "#f9fafb",
    100: "#f4f5f7",
    200: "#e5e7eb",
    300: "#d2d6dc",
    400: "#9fa6b2",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#252f3f",
    900: "#161e2e",
  },
};

// Color theme object mapped to Tailwind classes
export const THEME = {
  background: {
    primary: "bg-blue-600",
    secondary: "bg-blue-500",
    light: "bg-white",
    gray: "bg-gray-100",
  },
  text: {
    primary: "text-blue-600",
    secondary: "text-blue-500",
    light: "text-white",
    dark: "text-gray-900",
    muted: "text-gray-600",
    light_muted: "text-blue-100",
  },
  border: {
    primary: "border-blue-600",
    secondary: "border-blue-500",
    light: "border-white",
    muted: "border-gray-300",
  },
  hover: {
    primary: "hover:bg-blue-700",
    secondary: "hover:bg-blue-600",
    light: "hover:bg-gray-100",
  },
  focus: {
    primary: "focus:ring-blue-500",
    secondary: "focus:ring-blue-400",
  },
};

export default COLORS;
