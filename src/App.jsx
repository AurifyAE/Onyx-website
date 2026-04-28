import React, { useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MainWebsite from "./pages/MainWebsite";
import LiveRatesPage from "./pages/LiveRatesPage";
import "./index.css";

const onyxTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#803738",
    },
    secondary: {
      main: "#F8E1C5",
    },
    background: {
      default: "#F8E1C5",
      paper: "#FFF5E8",
    },
    text: {
      primary: "#3F1F24",
      secondary: "rgba(63,31,36,0.72)",
    },
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    allVariants: {
      fontFeatureSettings: '"liga" 1, "kern" 1',
    },
    h1: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      letterSpacing: "-0.015em",
    },
    h4: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      letterSpacing: "-0.01em",
    },
    h5: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F8E1C5",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 14,
          letterSpacing: "0.02em",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1400px !important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <ThemeProvider theme={onyxTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/liverates" element={<LiveRatesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
