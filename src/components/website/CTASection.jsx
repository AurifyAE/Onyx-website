import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function CTASection() {
  const items = [
    {
      title: "Gold & Silver Trading",
      desc: "High-purity bullion trading with trusted sourcing and transparent pricing.",
    },
    {
      title: "Diamonds & Precious Stones",
      desc: "Certified stones sourced and traded with international quality standards.",
    },
    {
      title: "Raw Gold & Precious Metals",
      desc: "Bulk trading and supply of raw gold and refined precious materials.",
    },
    {
      title: "Wholesale Supply",
      desc: "Reliable supply chain for businesses, retailers, and global partners.",
    },
  ];

  return (
    <Section id="services" variant="plain">
      {/* 🔥 FIX: controlled spacing below header */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <SectionHeader
          eyebrow="Core Services"
          title="Trusted trading across gold and precious assets."
          description="We operate across bullion, diamonds, and raw precious metals with a focus on reliability and long-term partnerships."
          align="center"
        />
      </Box>

      {/* 🔥 FIX: alignItems stretch ensures equal height */}
      <Grid container spacing={3} alignItems="stretch">
        {items.map((item, i) => (
          <Grid item xs={12} sm={6} key={i} sx={{ display: "flex" }}>
            {/* 🔥 FIX: flex ensures full height cards */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "20px",
                p: 3,
                width: "100%",
                backgroundColor: "#FFF8EE",
                border: "1px solid rgba(128,55,56,0.12)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                },
              }}
            >
              {/* 🔥 FIX: better spacing rhythm */}
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#2A0F13",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(50,20,25,0.75)",
                  }}
                >
                  {item.desc}
                </Typography>
              </Stack>

              {/* 🔥 FIX: push accent to bottom for alignment */}
              <Box
                sx={{
                  mt: 3,
                  height: 3,
                  width: 50,
                  borderRadius: 999,
                  backgroundColor: "#803738",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
