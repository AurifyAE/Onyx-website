import React from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import Section from './Section';

/* ── Reusable label style ── */
const Label = ({ children }) => (
  <Typography
    sx={{
      fontSize: 10.5,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'primary.main',
      opacity: 0.85,
    }}
  >
    {children}
  </Typography>
);

const pillars = [
  {
    num: '01',
    title: 'Mission',
    body: 'Deliver premium bullion access through dependable execution, responsible sourcing, and secure custody.',
  },
  {
    num: '02',
    title: 'Vision',
    body: 'Make modern bullion investing simple — globally accessible, transparent, and operationally sound.',
  },
  {
    num: '03',
    title: 'Approach',
    body: 'We prioritize accuracy, consistency, and privacy — so your decisions stay yours.',
  },
];

export default function WhoWeAre() {
  return (
    <Section id="about" variant="shaded">

      {/* ════════════════════════════════
          ROW 1 — Section header band
      ════════════════════════════════ */}
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 2.25, md: 6 },
          pb: { xs: 3, md: 5 },
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left — eyebrow + headline */}
        <Box sx={{ maxWidth: 520 }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: { xs: 1.5, md: 2.5 } }}>
            <Box sx={{ width: 24, height: 1, bgcolor: 'primary.main', opacity: 0.8 }} />
            <Label>About</Label>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 24, sm: 28, md: 38, lg: 46 },
              lineHeight: { xs: 1.18, md: 1.1 },
              letterSpacing: '-0.02em',
            }}
          >
            Built around trust,{' '}
            <Box
              component="span"
              sx={{
                fontStyle: 'italic',
                background: 'linear-gradient(90deg, #D6B56A 0%, #F4E3B2 55%, #D6B56A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              engineered
            </Box>{' '}
            for clarity.
          </Typography>
        </Box>

        {/* Right — description + stat row */}
        <Box
          sx={{
            flexShrink: 0,
            maxWidth: { xs: '100%', md: 360 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 3 },
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.50)', fontSize: { xs: 13.5, md: 14.5 }, lineHeight: { xs: 1.75, md: 1.9 } }}>
            Onyx Gold brings a disciplined approach to precious metals — clear
            quoting, careful handling, and service designed for long-term investors.
          </Typography>

          {/* Inline stats */}
          <Stack
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: 'rgba(255,255,255,0.08)' }}
              />
            }
            spacing={{ xs: 2, md: 3 }}
          >
            {[
              { value: '15+', label: 'Years active' },
              { value: '50+', label: 'Countries served' },
            ].map((s) => (
              <Box key={s.label}>
                <Typography
                  sx={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: { xs: 22, md: 26 },
                    fontWeight: 700,
                    background: 'linear-gradient(90deg, #D6B56A 0%, #F4E3B2 60%, #D6B56A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography sx={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* ════════════════════════════════
          ROW 2 — Three-column pillars
      ════════════════════════════════ */}
      <Grid
        container
        sx={{ mt: 0 }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: 'rgba(255,255,255,0.07)', display: { xs: 'none', md: 'block' } }}
          />
        }
      >
        {pillars.map((p, i) => (
          <Grid
            key={p.num}
            item
            xs={12}
            md
            sx={{
              pt: { xs: 3, md: 5 },
              pb: { xs: 3, md: 5 },
              px: { xs: 0, md: i === 0 ? '0 3.5rem 0 0' : i === 2 ? '0 0 0 3.5rem' : '0 3.5rem' },
              pl: { md: i === 0 ? 0 : 5 },
              pr: { md: i === 2 ? 0 : 5 },
              borderBottom: {
                xs: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                md: 'none',
              },
            }}
          >
            {/* Number */}
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: 11,
                color: 'primary.main',
                opacity: 0.6,
                letterSpacing: '0.12em',
                mb: { xs: 2, md: 3 },
              }}
            >
              {p.num}
            </Typography>

            {/* Thin gold rule */}
            <Box
              sx={{
                width: 28,
                height: 1.5,
                bgcolor: 'primary.main',
                borderRadius: 1,
                opacity: 0.5,
                mb: { xs: 1.75, md: 2.5 },
              }}
            />

            {/* Title */}
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: { xs: 14, md: 15 },
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.92)',
                mb: { xs: 1, md: 1.5 },
              }}
            >
              {p.title}
            </Typography>

            {/* Body */}
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.48)',
                fontSize: { xs: 13.25, md: 14 },
                lineHeight: { xs: 1.75, md: 1.9 },
              }}
            >
              {p.body}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* ════════════════════════════════
          ROW 3 — Bottom rule + tag line
      ════════════════════════════════ */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          pt: { xs: 2.25, md: 3.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: { xs: 1.5, md: 2 },
        }}
      >
        <Typography sx={{ fontSize: { xs: 10.5, md: 11.5 }, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
          Onyx Gold Bullion — Est. Dubai
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }}>
          {['Transparent pricing', 'Secure handling', 'Discreet service'].map((tag) => (
            <Typography
              key={tag}
              sx={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}
            >
              {tag}
            </Typography>
          ))}
        </Stack>
      </Box>

    </Section>
  );
}