import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#d1d5db",
      dark: "#d1d5db",
      light: "#e5e7eb",
    },
    secondary: {
      main: "#16a34a",
      yellow: "#f59e0b",
      blue: "#60a5fa",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.TopHeadLine": {
            color: "#000000",
            fontWeight: "900",
            fontSize: "15px",
            textTransform: "capitalize",
          },
          "&.PlaceHolder": {
            color: "#6b7280",
            fontWeight: "600",
            fontSize: "10px",
            textTransform: "capitalize",
            // padding: "0 0 0 5px",
          },
          "&.Value": {
            color: "#000000",
            fontWeight: "600",
            fontSize: "12px",
            textTransform: "capitalize",
          },
          "&.TabNavTitle": {
            color: "#000000",
            fontWeight: "900",
            fontSize: "16px",
            textTransform: "capitalize",
          },
        },
      },
    },
  },
});
