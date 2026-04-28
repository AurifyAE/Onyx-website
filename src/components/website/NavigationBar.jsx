import React, { useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Services", id: "services" },
      { label: "Showcase", id: "showcase" },
      { label: "Contact", id: "contact" },
    ],
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    window.location.pathname === "/" ? scrollToId("home") : navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(248,225,197,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(128,55,56,0.16)"
          : "1px solid transparent",
        transition: "all 220ms ease",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1400,
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Logo container — fixed size, clips overflow so logos slide behind edges */}
        <Box
          onClick={handleLogoClick}
          sx={{
            height: { xs: 28, md: 36 },
            width: { xs: 140, md: 180 },
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="/images/logo.svg"
            alt="Onyx Gold"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "left",
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }} />

        {/* Desktop nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1.5,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              sx={{
                color: "rgba(63,31,36,0.86)",
                px: 1.5,
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "rgba(128,55,56,0.08)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="contained"
              onClick={() => scrollToId("services")}
            sx={{
              ml: 1,
              bgcolor: "primary.main",
              color: "secondary.main",
              px: 2.25,
                "&:hover": { bgcolor: "#6E3038", boxShadow: "0 10px 24px rgba(128,55,56,0.2)" },
            }}
          >
            Explore services
          </Button>
        </Box>

        {/* Mobile hamburger */}
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            ml: 1,
            color: "primary.main",
          }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile drawer — unchanged */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            bgcolor: "#F8E1C5",
            borderLeft: "1px solid rgba(128,55,56,0.2)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 2,
            py: 1.5,
          }}
        >
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "primary.main" }}
            aria-label="Close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(128,55,56,0.2)" }} />
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => {
                setMobileOpen(false);
                scrollToId(item.id);
              }}
              sx={{
                borderRadius: 2,
                my: 0.5,
                "&:hover": { bgcolor: "rgba(128,55,56,0.1)" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "text.primary",
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: "auto", p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              setMobileOpen(false);
              scrollToId("about");
            }}
            sx={{
              bgcolor: "primary.main",
              color: "secondary.main",
              py: 1.25,
              "&:hover": { bgcolor: "#6E3038" },
            }}
          >
            View license
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavigationBar;
