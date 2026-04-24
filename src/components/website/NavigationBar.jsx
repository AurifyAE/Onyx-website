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
  Typography,
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
      { label: "Products", id: "products" },
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
        bgcolor: scrolled ? "rgba(5,6,7,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition: "all 220ms ease",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Logo container — fixed size, clips overflow so logos slide behind edges */}
        <Box
          onClick={handleLogoClick}
          sx={{
            position: "relative",
            height: 70,
            width: !scrolled ? 70 : 90,
            cursor: "pointer",
            overflow: "hidden", // hides logos as they exit/enter
            flexShrink: 0,
            // background: "red",
            transition: "ALL 420ms ease",
          }}
        >
          {/* logo.svg — visible by default, slides OUT to the left on scroll */}
          <Box
            component="img"
            src="/images/logo.svg"
            alt="Onyx Gold"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              top: "50%",
              transform: !scrolled
                ? "translateX(-110%) translateY(-50%)"
                : "translateX(0%) translateY(-50%)",
              opacity: !scrolled ? 0 : 1,
              transition: "all 420ms cubic-bezier(0.4,0,0.2,1)",
            }}
          />

          {/* logo1.svg — hidden off-left by default, slides IN from the left on scroll */}
          <Box
            component="img"
            src="/images/logo1.svg"
            alt="Onyx Gold"
            sx={{
              position: "absolute",
              inset: 0,
              height: "60%",
              top: "50%",
              objectFit: "contain",
              transform: !scrolled
                ? "translateX(0%)  translateY(-50%)"
                : "translateX(-110%)  translateY(-50%)",
              opacity: !scrolled ? 1 : 0,
              transition: "all 420ms cubic-bezier(0.4,0,0.2,1) ",
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
                color: "rgba(255,255,255,0.78)",
                px: 1.5,
                "&:hover": {
                  color: "secondary.main",
                  bgcolor: "rgba(255,255,255,0.04)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="contained"
            onClick={() => navigate("/liverates")}
            sx={{
              ml: 1,
              bgcolor: "primary.main",
              color: "#0b0e10",
              px: 2.25,
              "&:hover": { bgcolor: "secondary.main" },
            }}
          >
            Live rates
          </Button>
        </Box>

        {/* Mobile hamburger */}
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            ml: 1,
            color: "secondary.main",
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
            bgcolor: "#050607",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cinzel", serif',
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            ONYX GOLD
          </Typography>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "rgba(255,255,255,0.78)" }}
            aria-label="Close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
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
                "&:hover": { bgcolor: "rgba(255,255,255,0.04)" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
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
              navigate("/liverates");
            }}
            sx={{
              bgcolor: "primary.main",
              color: "#0b0e10",
              py: 1.25,
              "&:hover": { bgcolor: "secondary.main" },
            }}
          >
            Open live rates
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavigationBar;
