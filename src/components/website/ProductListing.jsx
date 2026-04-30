import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Section from "./Section";

const BRAND_STEPS = [
  {
    number: "01",
    title: "Sketch Concept",
    body: "The circular emblem starts as a hand-drawn ring form inspired by precious-metal craftsmanship.",
    label: "Origin",
  },
  {
    number: "02",
    title: "Final Identity",
    body: "A refined monogram built for clarity, trust, and premium recognition across all trading touchpoints.",
    label: "Mark",
  },
  {
    number: "03",
    title: "Real-World Applications",
    body: "From flags and packaging to uniforms and branded stationery, the identity remains minimal and elegant.",
    label: "Applied",
  },
];

export default function ProductListing() {
  return (
    <Section id="identity" variant="soft">
      {/* ── Header ── */}
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "flex-end" },
          justifyContent: "space-between",
          gap: { xs: 3, md: 6 },
          flexWrap: "wrap",
          pb: { xs: 5, md: 6 },
          borderBottom: "1px solid rgba(128,55,56,0.14)",
        }}
      >
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 3 }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                transform: "rotate(45deg)",
                bgcolor: "primary.main",
                opacity: 0.85,
              }}
            />
            <Typography
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                fontSize: 10.5,
                fontWeight: 500,
              }}
            >
              Brand Identity
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 32, sm: 40, md: 50 },
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 500,
            }}
          >
            From concept ring{" "}
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            to{" "}
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                background:
                  "linear-gradient(100deg,#803738 0%,#B87050 50%,#803738 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              luxury applications.
            </Box>
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 380, alignSelf: "flex-end" }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 14.5,
              lineHeight: 1.95,
              mb: 2.5,
            }}
          >
            Clean logo storytelling across sketch, final mark, and premium
            mockup applications for corporate presence.
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {BRAND_STEPS.map((s) => (
              <Box
                key={s.number}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.5,
                  py: 0.55,
                  borderRadius: 20,
                  border: "1px solid rgba(128,55,56,0.2)",
                  bgcolor: "rgba(128,55,56,0.05)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: "rgba(128,55,56,0.55)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(63,31,36,0.5)",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* ── Cards — CSS Grid (reliable, no MUI breakpoint dependency) ── */}
      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 column on mobile
            sm: "1fr 1fr", // 2 columns on tablet
            md: "1fr 1fr 1fr", // 3 columns on desktop
          },
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        {BRAND_STEPS.map((item, i) => (
          <Box
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={i * 90}
            sx={{
              position: "relative",
              borderRadius: 3,
              border: "1px solid rgba(128,55,56,0.16)",
              bgcolor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              transition: "transform 280ms ease, box-shadow 280ms ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 24px 48px rgba(128,55,56,0.14)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 20,
                right: 20,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(128,55,56,0.3), transparent)",
              },
            }}
          >
            {/* ── Image zone ── */}
            <Box
              sx={{
                position: "relative",
                bgcolor: "rgba(248,225,197,0.38)",
                borderBottom: "1px solid rgba(128,55,56,0.1)",
                borderRadius: "12px 12px 0 0",
                height: { xs: 150, md: 210 },

                flexShrink: 0,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at center, transparent 55%, rgba(128,55,56,0.07) 100%)",
                  pointerEvents: "none",
                },
              }}
            >
              {/* Label badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  zIndex: 2,
                  px: 1.25,
                  py: 0.4,
                  borderRadius: 20,
                  border: "1px solid rgba(128,55,56,0.22)",
                  bgcolor: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 9.5,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(128,55,56,0.7)",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>

              {/* Watermark number */}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: -16,
                  right: 12,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: 70, md: 96 },
                  fontWeight: 700,
                  color: "rgba(128,55,56,0.06)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                {item.number}
              </Typography>

              {/* Logo */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "70%",
                  maxWidth: { xs: 150, md: 260 },
                }}
              >
                <Box
                  component="img"
                  src="/images/logo.svg"
                  alt="Brand identity"
                  sx={{ width: "100%", objectFit: "contain", display: "block" }}
                />
              </Box>
            </Box>

            {/* ── Content zone ── */}
            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 2 }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "rgba(128,55,56,0.4)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Step {item.number}
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(128,55,56,0.18), transparent)",
                  }}
                />
              </Stack>

              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: 25, md: 32 },
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  color: "text.primary",
                  mb: 1.5,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(63,31,36,0.6)",
                  fontSize: 13.5,
                  lineHeight: 1.9,
                  flex: 1,
                }}
              >
                {item.body}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── Footer Strip ── */}
      <Box
        data-aos="fade-up"
        sx={{
          mt: 5,
          pt: 3.5,
          borderTop: "1px solid rgba(128,55,56,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              bgcolor: "primary.main",
              opacity: 0.45,
            }}
          />
          <Typography
            sx={{
              fontSize: 10.5,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(63,31,36,0.45)",
            }}
          >
            A mark built for legacy
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={0}
          divider={
            <Box
              sx={{
                mx: 2,
                width: "1px",
                height: 12,
                bgcolor: "rgba(128,55,56,0.2)",
                alignSelf: "center",
              }}
            />
          }
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {["Concept", "Identity", "Application"].map((t) => (
            <Typography
              key={t}
              sx={{
                fontSize: 10.5,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(63,31,36,0.4)",
              }}
            >
              {t}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}
