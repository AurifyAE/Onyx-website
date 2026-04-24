import React, { useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MainWebsite from "./pages/MainWebsite";
import LiveRatesPage from "./pages/LiveRatesPage";
import "./index.css";
import LocomotiveScroll from 'locomotive-scroll';

const onyxTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d6b56a",
    },
    secondary: {
      main: "#f4e3b2",
    },
    background: {
      default: "#050607",
      paper: "rgba(255,255,255,0.03)",
    },
    text: {
      primary: "rgba(255,255,255,0.92)",
      secondary: "rgba(255,255,255,0.62)",
    },
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: '"Cinzel", serif',
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      letterSpacing: "-0.02em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#050607",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
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

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
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
