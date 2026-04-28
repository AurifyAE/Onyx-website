import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Section from "./Section";

const SERVICES = [
  {
    title: 'Gold & Silver Trading',
    body: 'High-purity bullion trading with trusted sourcing and transparent pricing.',
    number: '01',
    icon: '◆',
  },
  {
    title: 'Diamonds & Precious Stones',
    body: 'Certified stones sourced and traded with international quality standards.',
    number: '02',
    icon: '✦',
  },
  {
    title: 'Raw Gold & Precious Metals',
    body: 'Bulk trading and supply of raw gold and refined precious materials.',
    number: '03',
    icon: '◈',
  },
  {
    title: 'Wholesale Supply',
    body: 'Reliable supply chain for businesses, retailers, and global partners.',
    number: '04',
    icon: '◇',
  },
];

const TAGS = ['Transparent Pricing', 'Licensed Operations', 'Premium Support'];

export default function ServicesSection() {
  return (
    <Section id="services" variant="plain">

      {/* HEADER (UNCHANGED STRUCTURE) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          gap: { xs: 3, md: 6 },
          flexWrap: 'wrap',
          pb: { xs: 5, md: 6 },
          borderBottom: '1px solid rgba(128,55,56,0.14)',
        }}
      >
        <Box>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                transform: 'rotate(45deg)',
                bgcolor: '#803738',
                opacity: 0.85,
              }}
            />
            <Typography
              sx={{
                color: '#803738',
                textTransform: 'uppercase',
                letterSpacing: '0.28em',
                fontSize: 10.5,
                fontWeight: 500,
              }}
            >
              What We Offer
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 32, md: 50 },
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              maxWidth: 520,
              color: '#2A0F13',
            }}
          >
            Premium bullion and{' '}
            <Box
              component="span"
              sx={{
                fontStyle: 'italic',
                color: '#803738', // removed gradient
              }}
            >
              trading services.
            </Box>
          </Typography>
        </Box>

        <Box sx={{ maxWidth:700, alignSelf: 'flex-end' }}>
          <Typography
            sx={{
              color: 'rgba(50,20,25,0.7)',
              fontSize: 14.5,
              lineHeight: 1.95,
              mb: 2.5,
            }}
          >
            Designed for investors, retailers, and institutional clients seeking
            trust, precision, and high-touch service.
          </Typography>

          <Stack direction="row"  flex={1} alignItems="flex-end" spacing={1} flexWrap="wrap" useFlexGap>
            {TAGS.map((tag) => (
              <Box
                key={tag}
                sx={{
                  px: 1.5,
                  py: .5,
                  borderRadius: 20,
                  border: '1px solid rgba(128,55,56,0.22)',
                  bgcolor: 'rgba(128,55,56,0.06)',
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10.5,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(63,31,36,0.6)',
                  }}
                >
                  {tag}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* CARDS (INVERTED) */}
      <Grid container spacing={2.25} sx={{ mt: 4 }}>
        {SERVICES.map((service, i) => (
          <Grid item xs={12} sm={6} key={service.title}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 2.75, md: 3.25 },
                borderRadius: 2.5,
                border: '1px solid rgba(128,55,56,0.18)',
                bgcolor: '#FFF9F1',
                color: '#2A0F13',
                height: '100%',
                minHeight: 250,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 18px 34px rgba(128,55,56,0.12)',
                },
              }}
            >
              {/* TOP */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(128,55,56,0.5)',
                  }}
                >
                  Service {service.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,
                    color: 'rgba(128,55,56,0.4)',
                  }}
                >
                  {service.icon}
                </Typography>
              </Box>

              {/* TITLE */}
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 30, md: 34 },
                  lineHeight: 1,
                  mb: 1.6,
                  color: '#2A0F13',
                }}
              >
                {service.title}
              </Typography>

              {/* BODY */}
              <Typography
                sx={{
                  color: 'rgba(50,20,25,0.7)',
                  fontSize: 14,
                  lineHeight: 1.85,
                  flex: 1,
                }}
              >
                {service.body}
              </Typography>

              {/* ACCENT */}
              <Box
                sx={{
                  mt: 2.5,
                  height: 3,
                  width: 34,
                  borderRadius: 999,
                  background: '#803738',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

    </Section>
  );
}
