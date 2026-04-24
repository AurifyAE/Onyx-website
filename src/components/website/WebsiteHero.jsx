import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* ─── Thin decorative divider used in the card ─── */
const GoldRule = () => (
  <Box
    sx={{
      width: 32,
      height: 1.5,
      bgcolor: "primary.main",
      borderRadius: 1,
      opacity: 0.8,
    }}
  />
);

/* ─── Single metric row inside the card ─── */
const FeatureRow = ({ label, desc, index }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 2,
      py: 1.75,
      borderBottom: index < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
    }}
  >
    {/* Index number */}
    <Typography
      sx={{
        fontFamily: '"Cinzel", serif',
        fontSize: 11,
        color: "primary.main",
        opacity: 0.7,
        lineHeight: 1,
        mt: "3px",
        minWidth: 18,
      }}
    >
      0{index + 1}
    </Typography>

    <Box>
      <Typography
        sx={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "rgba(255,255,255,0.92)",
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: 12.5,
          color: "rgba(255,255,255,0.52)",
          mt: 0.3,
          lineHeight: 1.65,
        }}
      >
        {desc}
      </Typography>
    </Box>
  </Box>
);

const WebsiteHero = () => {
  const navigate = useNavigate();

  const features = [
    { label: "Live Rates", desc: "A clean, full-screen rate TV view." },
    {
      label: "Execution Clarity",
      desc: "Straightforward quoting and spreads.",
    },
    { label: "Secure Workflows", desc: "Handling designed for reliability." },
  ];

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 84,
      behavior: "smooth",
    });
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        pt: { xs: 11, sm: 12, md: 18 },
        pb: { xs: 7, sm: 8, md: 14 },
        overflow: "hidden",
        minHeight: { md: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Backgrounds ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          background:
            "radial-gradient(ellipse 80% 60% at 12% 20%, rgba(214,181,106,0.10) 0%, transparent 65%)," +
            "radial-gradient(ellipse 60% 50% at 88% 60%, rgba(244,227,178,0.07) 0%, transparent 60%)," +
            "linear-gradient(180deg, #050607 0%, #070809 100%)",
        }}
      />
      {/* Subtle grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 55% 55% at 20% 30%, black 0%, transparent 70%)",
        }}
      />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4.5, md: 8 }}
          sx={{
            alignItems: "center",
            justifyContent: "space-between", // ✅ works when columns don't sum to 12
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <Grid item xs={12} md={6}>
            <Stack spacing={0}>
              {/* Eyebrow */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: { xs: 2, md: 3 } }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 1,
                    bgcolor: "primary.main",
                    opacity: 0.8,
                  }}
                />
                <Typography
                  sx={{
                    color: "primary.main",
                    textTransform: "uppercase",
                    letterSpacing: "0.3em",
                    fontSize: { xs: 10, md: 11 },
                    fontWeight: 500,
                  }}
                >
                  Onyx Gold Bullion
                </Typography>
              </Stack>

              {/* Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: 30, sm: 40, md: 60, lg: 68 },
                  lineHeight: { xs: 1.12, md: 1.06 },
                  letterSpacing: "-0.02em",
                  mb: { xs: 2, md: 3 },
                }}
              >
                A quieter kind
                <br />
                of{" "}
                <Box
                  component="span"
                  sx={{
                    fontStyle: "italic",
                    background:
                      "linear-gradient(90deg, #D6B56A 0%, #F4E3B2 60%, #D6B56A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  wealth.
                </Box>
              </Typography>

              {/* Body */}
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.56)",
                  fontSize: { xs: 13.5, md: 16 },
                  lineHeight: { xs: 1.75, md: 1.9 },
                  mb: { xs: 3, md: 4.5 },
                  maxWidth: 520,
                }}
              >
                Buy and trade precious metals with institutional‑grade
                execution, transparent pricing, and secure custody — built for
                investors who value precision over noise.
              </Typography>

              {/* CTAs */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mb: { xs: 2.5, md: 4 } }}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate("/liverates")}
                  endIcon={
                    <ArrowForwardIcon sx={{ fontSize: "15px !important" }} />
                  }
                  sx={{
                    bgcolor: "primary.main",
                    color: "#0b0e10",
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 1.15, md: 1.3 },
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    "&:hover": { bgcolor: "secondary.main" },
                  }}
                >
                  View live rates
                </Button>
                <Button
                  variant="outlined"
                  onClick={scrollToProducts}
                  sx={{
                    borderColor: "rgba(255,255,255,0.14)",
                    color: "rgba(255,255,255,0.78)",
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 1.15, md: 1.3 },
                    letterSpacing: "0.04em",
                    "&:hover": {
                      borderColor: "rgba(214,181,106,0.5)",
                      bgcolor: "rgba(214,181,106,0.04)",
                    },
                  }}
                >
                  Explore products
                </Button>
              </Stack>

              {/* Trust chips */}
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {[
                  "Transparent pricing",
                  "Secure handling",
                  "Discreet service",
                ].map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.50)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: { xs: 10.5, md: 11.5 },
                      letterSpacing: "0.06em",
                      "& .MuiChip-label": { px: { xs: 1, md: 1.25 } },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* ── RIGHT COLUMN — Premium Card ── */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                borderRadius: { xs: "16px", md: "20px" },
                border: "1px solid rgba(255,255,255,0.09)",
                bgcolor: "rgba(10,11,13,0.80)",
                backdropFilter: "blur(20px)",
                overflow: "hidden",
                /* Outer glow */
                boxShadow:
                  "0 0 0 1px rgba(214,181,106,0.06), 0 32px 80px rgba(0,0,0,0.55)",
              }}
            >
              {/* Gold gradient top stripe */}
              <Box
                sx={{
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent 0%, #D6B56A 35%, #F4E3B2 60%, #D6B56A 80%, transparent 100%)",
                  opacity: 0.7,
                }}
              />

              {/* Card header */}
              <Box
                sx={{
                  px: { xs: 2.25, md: 3.5 },
                  pt: { xs: 2.2, md: 3 },
                  pb: { xs: 1.75, md: 2.5 },
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10.5,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "primary.main",
                    mb: 0.85,
                    opacity: 0.85,
                  }}
                >
                  Today's focus
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.35,
                  }}
                >
                  Live market view &amp; fast quotes
                </Typography>
              </Box>

              {/* Feature rows */}
              <Box sx={{ px: { xs: 2.25, md: 3.5 }, pt: 0.25, pb: 0.5 }}>
                {features.map((f, i) => (
                  <FeatureRow
                    key={f.label}
                    label={f.label}
                    desc={f.desc}
                    index={i}
                  />
                ))}
              </Box>

              {/* Address block */}
              <Box
                sx={{
                  mx: { xs: 2.25, md: 3.5 },
                  mb: { xs: 2.25, md: 3.5 },
                  mt: 1,
                  p: { xs: 2, md: 2.5 },
                  borderRadius: "12px",
                  border: "1px solid rgba(214,181,106,0.15)",
                  background:
                    "linear-gradient(135deg, rgba(214,181,106,0.07) 0%, rgba(214,181,106,0.02) 100%)",
                }}
              >
                <GoldRule />
                <Typography
                  sx={{
                    fontSize: 10.5,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "primary.main",
                    mt: 1.5,
                    mb: 1,
                    opacity: 0.85,
                  }}
                >
                  Dubai office
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 13,
                    lineHeight: 1.85,
                  }}
                >
                  Office 103, 1st Floor, Aldallal Building
                  <br />
                  30B Street, Al Daghaya – Al Sabkha, Dubai
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebsiteHero;
