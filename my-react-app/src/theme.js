import { createTheme } from "@mui/material/styles";

// Define a custom blue theme
export const theme = createTheme({
  palette: {
    mode: "light", // Change to 'dark' for dark mode if needed
    primary: {
      main: "#007bff", // Primary blue color
      light: "#3399ff", // Lighter shade of blue
      dark: "#0056b3", // Darker shade of blue
      contrastText: "#ffffff", // White text for contrast on blue
    },
    secondary: {
      main: "#0056b3", // Another blue for secondary elements
      light: "#3399ff",
      dark: "#003f7f",
      contrastText: "#ffffff",
    },
    background: {
      default: "#e3f2fd", // Light blue background
      paper: "#bbdefb", // Paper elements will have a light blue background
    },
    text: {
      primary: "#003366", // Dark blue text
      secondary: "#0056b3", // Lighter blue for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Default fonts
    button: {
      textTransform: "none", // Keep button text case as written (no uppercase by default)
    },
  },
});

export const tokens = (mode) => ({
  primary: "#007bff", // Same blue color token for primary usage
  secondary: "#0056b3", // Same blue for secondary usage
});
