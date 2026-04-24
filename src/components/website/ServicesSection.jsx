import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Section from "./Section";

const CAPABILITIES = [
  {
    num: "01",
    title: "Trade",
    body: "Real-time pricing and clean quoting for bullion transactions.",
  },
  {
    num: "02",
    title: "Source",
    body: "Responsible sourcing with verifiable supply-chain standards.",
  },
  {
    num: "03",
    title: "Store",
    body: "Secure custody workflows designed for reliability and privacy.",
  },
  {
    num: "04",
    title: "Deliver",
    body: "Insured delivery options with careful handling and tracking.",
  },
  {
    num: "05",
    title: "Advise",
    body: "Consultation for allocation, sizing, and portfolio considerations.",
  },
  {
    num: "06",
    title: "Support",
    body: "A dedicated team to help with execution, logistics, and onboarding.",
  },
];

export default function ServicesSection() {
  return (
    <Section id="capabilities" variant="shaded">
      {/* ══════════════════════════════
          HEADER BAND
      ══════════════════════════════ */}
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "flex-end" },
          justifyContent: "space-between",
          gap: { xs: 3, md: 6 },
          flexWrap: "wrap",
          pb: 5,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        data-aos="fade-up"
      >
        {/* Left */}
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 2.5 }}
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
                fontSize: 11,
              }}
            >
              Capabilities
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 28, md: 38, lg: 44 },
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            End-to-end{" "}
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                background:
                  "linear-gradient(90deg,#D6B56A 0%,#F4E3B2 55%,#D6B56A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              bullion
            </Box>{" "}
            services.
          </Typography>
        </Box>

        {/* Right */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 14,
            lineHeight: 1.9,
            maxWidth: 360,
            alignSelf: "flex-end",
          }}
        >
          A focused set of services for investors and traders — built to reduce
          friction and increase confidence at every step.
        </Typography>
      </Box>

      {/* ══════════════════════════════
          6-CELL GRID — no blank gaps
      ══════════════════════════════ */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          /* every cell shares the same border so edges merge cleanly */
          "& > *": {
            borderRight: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          },
          /* kill right border on last column */
          "& > *:nth-of-type(3n)": { borderRight: { md: "none" } },
          "& > *:nth-of-type(2n)": {
            borderRight: {
              xs: "none",
              sm: "none",
              md: "1px solid rgba(255,255,255,0.07)",
            },
          },
          "& > *:nth-of-type(2n)": { borderRight: { sm: "none" } },
          /* kill bottom border on last row */
          "& > *:nth-of-type(n+4)": { borderBottom: { md: "none" } },
          "& > *:nth-of-type(n+5)": {
            borderBottom: {
              sm: "none",
              md: "1px solid rgba(255,255,255,0.07)",
            },
          },
          "& > *:nth-of-type(6)": { borderBottom: "none" },
        }}
      >
        {CAPABILITIES.map((c, i) => (
          <Box
            key={c.title}
            sx={{
              p: { xs: 3, md: 3.5 },
              position: "relative",
              overflow: "hidden",
              transition: "background 220ms ease",
              "&:hover": { bgcolor: "rgba(214,181,106,0.04)" },
              /* gold left accent on hover */
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: "20%",
                height: "60%",
                width: 2,
                bgcolor: "primary.main",
                borderRadius: 1,
                opacity: 0,
                transition: "opacity 220ms ease",
              },
              "&:hover::before": { opacity: 0.7 },
            }}
            data-aos="fade-up"
            data-aos-delay={i * 70}
          >
            {/* Number */}
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: 10.5,
                color: "primary.main",
                opacity: 0.55,
                letterSpacing: "0.14em",
                mb: 2.5,
              }}
            >
              {c.num}
            </Typography>

            {/* Gold rule */}
            <Box
              sx={{
                width: 24,
                height: 1.5,
                bgcolor: "primary.main",
                borderRadius: 1,
                opacity: 0.45,
                mb: 2,
              }}
            />

            {/* Title */}
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: { xs: 14, md: 15 },
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.92)",
                mb: 1.25,
              }}
            >
              {c.title}
            </Typography>

            {/* Body */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.48)",
                fontSize: 13.5,
                lineHeight: 1.85,
              }}
            >
              {c.body}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ══════════════════════════════
          FOOTER BAR
      ══════════════════════════════ */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          pt: 3.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.20)",
          }}
        >
          Onyx Gold Bullion — Est. Dubai
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {["Transparent pricing", "Secure handling", "Discreet service"].map(
            (tag) => (
              <Typography
                key={tag}
                sx={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.20)",
                }}
              >
                {tag}
              </Typography>
            ),
          )}
        </Stack>
      </Box>
    </Section>
  );
}
