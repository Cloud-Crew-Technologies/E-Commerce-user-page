import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./Page/Home";
import Products from "./Page/Product";
import Cart from "./Page/Cart";
import Checkout from "./Page/Checkout";
import PaymentSuccess from "./Page/PaymentSucces";
import Footer from "./components/Footer";
import ProductCarousel from "./Page/carousel";
import SignUpCard from "./Page/signup";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#2563eb",
      light: "#3b82f6",
      dark: "#1d4ed8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
    grey: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    success: {
      main: "#10b981",
      light: "#34d399",
      dark: "#059669",
    },
    error: {
      main: "#ef4444",
      light: "#f87171",
      dark: "#dc2626",
    },
    warning: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
    },
    info: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.25rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: "0.025em",
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "10px 24px",
          fontWeight: 500,
          boxShadow: "none",
          fontSize: "0.875rem",
          letterSpacing: "0.025em",
          '@media (max-width:600px)': {
            padding: '8px 16px',
            fontSize: '0.875rem',
          },
          "&:hover": {
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15)",
            transform: "translateY(-1px)",
            transition: "all 0.2s ease-in-out",
          },
          "&:focus": {
            boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 6px 20px rgba(37, 99, 235, 0.25)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
        sizeLarge: {
          padding: "12px 32px",
          fontSize: "1rem",
          '@media (max-width:600px)': {
            padding: '10px 24px',
            fontSize: '0.875rem',
          },
        },
        sizeSmall: {
          padding: "8px 16px",
          fontSize: "0.75rem",
          '@media (max-width:600px)': {
            padding: '6px 12px',
            fontSize: '0.75rem',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          transition: "all 0.3s ease-in-out",
          '@media (max-width:600px)': {
            borderRadius: 12,
          },
          "&:hover": {
            boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          '@media (max-width:600px)': {
            borderRadius: 8,
          },
        },
        elevation1: {
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        },
        elevation2: {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
        elevation3: {
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            '@media (max-width:600px)': {
              borderRadius: 6,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3b82f6",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2563eb",
              borderWidth: "2px",
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease-in-out",
          '@media (max-width:600px)': {
            padding: 8,
          },
          "&:hover": {
            transform: "scale(1.05)",
          },
          "&:focus": {
            boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "0.75rem",
          '@media (max-width:600px)': {
            fontSize: '0.7rem',
            height: 24,
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: "0.75rem",
          fontWeight: 600,
          '@media (max-width:600px)': {
            fontSize: '0.7rem',
            minWidth: 16,
            height: 16,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(37, 99, 235, 0.04)",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            '&.MuiGrid-item': {
              paddingTop: 8,
              paddingBottom: 8,
            },
          },
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/carousel" element={<ProductCarousel />} />
              <Route path="/signup" element={<SignUpCard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
