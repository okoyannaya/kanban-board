export const theme = {
  screens: {
    tablet: "768px",
    desktop: "1024px",
    wide: "1440px",
  },
  extend: {
    colors: {
      text: "var(--text)",
      background: "var(--background)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
    },
  },
} as const;
