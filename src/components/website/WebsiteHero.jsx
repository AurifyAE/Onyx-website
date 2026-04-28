import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WebsiteHero = () => {
  const navigate = useNavigate();
  const scrollToId = (id) => {
    const el = document.getElementById(id);
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
        minHeight: { md: "100dvh" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F8E1C5",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          background:
            "radial-gradient(ellipse 60% 40% at 20% 15%, rgba(128,55,56,0.10) 0%, transparent 70%)," +
            "radial-gradient(ellipse 55% 38% at 85% 75%, rgba(128,55,56,0.16) 0%, transparent 72%)," +
            "linear-gradient(120deg, #F8E1C5 0%, #FFF6E7 100%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "linear-gradient(110deg, rgba(248,225,197,0) 0%, rgba(255,255,255,0.55) 48%, rgba(248,225,197,0) 100%)",
          animation: "fadeIn 1.6s ease-out",
        }}
      />

      <Container maxWidth="lg">
        <Box data-aos="fade-up">
          <Grid
            container
            spacing={{ xs: 4.5, md: 8 }}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={0}>
                <Stack spacing={1.5} sx={{ mb: { xs: 2, md: 3 } }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 1.5,
                      bgcolor: "primary.main",
                      opacity: 0.75,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "primary.main",
                      textTransform: "uppercase",
                      letterSpacing: "0.28em",
                      fontSize: { xs: 10, md: 11 },
                      fontWeight: 600,
                    }}
                  >
                    Onyx Bullion Jewellery Trading LLC
                  </Typography>
                </Stack>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 42, sm: 56, md: 74, lg: 84 },
                    lineHeight: { xs: 0.98, md: 0.95 },
                    letterSpacing: "-0.02em",
                    color: "#5A262D",
                    mb: { xs: 2, md: 3 },
                  }}
                >
                  Refined Gold.
                  <br />
                  <Box
                    component="span"
                    sx={{
                      fontStyle: "italic",
                      background:
                        "linear-gradient(90deg, #803738 0%, #A86A55 50%, #803738 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Defined Luxury.
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(63,31,36,0.78)",
                    fontSize: { xs: 14.5, md: 18 },
                    lineHeight: { xs: 1.75, md: 1.9 },
                    mb: { xs: 3, md: 4.5 },
                    maxWidth: 560,
                  }}
                >
                  Trusted bullion and precious metals trading from Dubai, built
                  on purity, transparency, and global-grade execution.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mb: { xs: 2.5, md: 4 } }}
                >
                  <Button
                    variant="contained"
                    onClick={() => scrollToId("services")}
                    sx={{
                      bgcolor: "primary.main",
                      color: "secondary.main",
                      px: { xs: 2.5, md: 3.5 },
                      py: { xs: 1.2, md: 1.35 },
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      boxShadow: "0 12px 30px rgba(128,55,56,0.16)",
                      "&:hover": { bgcolor: "#6E3038" },
                    }}
                  >
                    Explore Services
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => scrollToId("about")}
                    sx={{
                      borderColor: "rgba(128,55,56,0.35)",
                      color: "primary.main",
                      px: { xs: 2.5, md: 3.5 },
                      py: { xs: 1.2, md: 1.35 },
                      letterSpacing: "0.04em",
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(128,55,56,0.06)",
                      },
                    }}
                  >
                    View License
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: { xs: "20px", md: "28px" },
                  p: { xs: 3, md: 4 },
                  border: "1px solid rgba(128,55,56,0.16)",
                  bgcolor: "rgba(255,245,232,0.62)",
                  backdropFilter: "blur(10px)",
                  boxShadow:
                    "0 24px 60px rgba(128,55,56,0.14), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
                data-aos="fade-left"
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 460,
                    aspectRatio: "5 / 1",
                    mx: "auto",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/logo.svg"
                    alt="Onyx Gold logo"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      opacity: 0.98,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    mt: 3,
                    borderRadius: 3,
                    p: { xs: 2.5, md: 3 },
                    border: "1px solid rgba(128,55,56,0.12)",
                    bgcolor: "rgba(255,255,255,0.45)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "primary.main",
                      mb: 1.1,
                    }}
                  >
                    Premium trading identity
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}
                  >
                    Gold & Silver Trading
                    <br />
                    Diamonds & Precious Stones
                    <br />
                    Raw Gold & Precious Metals
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 3,
                    height: 6,
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, rgba(128,55,56,0.10) 0%, rgba(128,55,56,0.38) 50%, rgba(128,55,56,0.10) 100%)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WebsiteHero;
