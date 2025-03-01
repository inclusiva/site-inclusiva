import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e60c5c",
    },
    secondary: {
      main: "#f3911f",
    },
    error: {
      main: "#dc2626",
    },
    success: {
      main: "#10b981",
    },
    grey: {
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
    background: {
      default: "#f8f8f8",
      paper: "#eef1f5",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
      disabled: "#9fa6b2",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.4rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 600,
    },
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

export default theme;
