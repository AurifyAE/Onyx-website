import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Section from "./Section";

const TRUST_ITEMS = [
  { label: "Dubai Economy License", value: "1593385" },
  { label: "Share Ownership", value: "100% Shareholder" },
  { label: "Operational Credibility", value: "Verified & Licensed" },
];

export default function WhyChooseUs() {
  return (
    <Section id="trust" variant="soft">
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "flex-end" },
          justifyContent: "space-between",
          gap: { xs: 3, md: 6 },
          flexWrap: "wrap",
          pb: 5,
          borderBottom: "1px solid rgba(128,55,56,0.16)",
        }}
        data-aos="fade-up"
      >
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
              Trust & Credibility
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 30, md: 46 },
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Authenticity you can{" "}
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                background:
                  "linear-gradient(90deg,#803738 0%,#AA6E57 55%,#803738 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              verify instantly.
            </Box>
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 14.5,
            lineHeight: 1.9,
            maxWidth: 420,
            alignSelf: "flex-end",
          }}
        >
          License-backed operations, transparent ownership, and clear
          documentation built for confident high-value transactions.
        </Typography>
      </Box>

      <Grid container spacing={2.2} sx={{ mt: 1.5, alignItems: "stretch" }}>
        {TRUST_ITEMS.map((item, i) => (
          <Grid item xs={12} md={4} key={item.label}>
            <Box
              data-aos="fade-up"
              data-aos-delay={i * 90}
              sx={{
                p: 2.6,
                borderRadius: { xs: 2, md: 3 },
                border: "1px solid rgba(128,55,56,0.16)",
                bgcolor: "rgba(255,255,255,0.55)",
                minHeight: { xs: "auto", md: 160 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "primary.main",
                  mb: 0.8,
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: 1.5,
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
