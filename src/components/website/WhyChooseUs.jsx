import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Section from './Section';

const STATS = [
  {
    num: '01',
    title: 'Transparent pricing',
    body: 'Clear quoting designed for confidence.',
    metric: '0%', metricLabel: 'Hidden fees',
  },
  {
    num: '02',
    title: 'Responsible sourcing',
    body: 'Certified supply standards and documentation.',
    metric: '100%', metricLabel: 'Verified supply chain',
  },
  {
    num: '03',
    title: 'Operational security',
    body: 'Disciplined handling and custody processes.',
    metric: '24/7', metricLabel: 'Secure custody',
  },
  {
    num: '04',
    title: 'Personal service',
    body: 'A dedicated team — fast, discreet, responsive.',
    metric: '1:1', metricLabel: 'Dedicated support',
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="trust" variant="plain">

      {/* ══════════════════════════════
          HEADER BAND
      ══════════════════════════════ */}
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          gap: { xs: 3, md: 6 },
          flexWrap: 'wrap',
          pb: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
        data-aos="fade-up"
      >
        <Box>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
            <Box sx={{ width: 24, height: 1, bgcolor: 'primary.main', opacity: 0.8 }} />
            <Typography
              sx={{
                color: 'primary.main',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                fontSize: 11,
              }}
            >
              Trust
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 28, md: 38, lg: 44 },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            A brand that stays{' '}
            <Box
              component="span"
              sx={{
                fontStyle: 'italic',
                background: 'linear-gradient(90deg,#D6B56A 0%,#F4E3B2 55%,#D6B56A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              out of the way.
            </Box>
          </Typography>
        </Box>

        <Typography
          sx={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: 14,
            lineHeight: 1.9,
            maxWidth: 360,
            alignSelf: 'flex-end',
          }}
        >
          Fewer gimmicks, more clarity. Everything you need to trade and
          store bullion with confidence — nothing you don't.
        </Typography>
      </Box>

      {/* ══════════════════════════════
          TWO-COLUMN SPLIT ROWS
          Each stat = full-width row
          split into left label + right body
      ══════════════════════════════ */}
      <Box>
        {STATS.map((s, i) => (
          <Box
            key={s.num}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 2fr' },
              alignItems: 'center',
              gap: { xs: 1.5, md: 0 },
              py: { xs: 3.5, md: 4 },
              borderBottom: i < STATS.length - 1
                ? '1px solid rgba(255,255,255,0.07)'
                : 'none',
              transition: 'background 220ms ease',
              px: { xs: 0, md: 1 },
              mx: { xs: 0, md: -1 },
              borderRadius: 2,
              '&:hover': { bgcolor: 'rgba(214,181,106,0.03)' },
            }}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            {/* LEFT — number + title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Typography
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: 10.5,
                  color: 'primary.main',
                  opacity: 0.5,
                  letterSpacing: '0.14em',
                  flexShrink: 0,
                  minWidth: 24,
                }}
              >
                {s.num}
              </Typography>

              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: { xs: 13.5, md: 15 },
                    fontWeight: 600,
                    letterSpacing: '0.07em',
                    color: 'rgba(255,255,255,0.92)',
                    mb: 0.5,
                  }}
                >
                  {s.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: 13,
                    lineHeight: 1.8,
                    display: { xs: 'block', md: 'none' }, // show inline on mobile
                  }}
                >
                  {s.body}
                </Typography>
              </Box>
            </Box>

            {/* CENTRE — large metric (desktop only) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                borderRight: '1px solid rgba(255,255,255,0.07)',
                py: 1.5,
                mx: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: 28,
                  fontWeight: 700,
                  background: 'linear-gradient(90deg,#D6B56A 0%,#F4E3B2 60%,#D6B56A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                  mb: 0.75,
                }}
              >
                {s.metric}
              </Typography>
              <Typography
                sx={{
                  fontSize: 10.5,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.30)',
                }}
              >
                {s.metricLabel}
              </Typography>
            </Box>

            {/* RIGHT — body (desktop only) */}
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: 14,
                lineHeight: 1.9,
                display: { xs: 'none', md: 'block' },
                pl: { md: 2 },
              }}
            >
              {s.body}
            </Typography>
          </Box>
        ))}
      </Box>

     

      {/* ══════════════════════════════
          FOOTER BAR
      ══════════════════════════════ */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          mt: 5,
          pt: 3.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.20)',
          }}
        >
          Onyx Gold Bullion — Est. Dubai
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {['Transparent pricing', 'Secure handling', 'Discreet service'].map((tag) => (
            <Typography
              key={tag}
              sx={{
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.20)',
              }}
            >
              {tag}
            </Typography>
          ))}
        </Stack>
      </Box>

    </Section>
  );
}