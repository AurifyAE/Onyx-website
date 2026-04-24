import React from 'react';
import { Box, Grid } from '@mui/material';
import Section from './Section';
import SectionHeader from './SectionHeader';

const STATS = [
  { k: 'Transparent pricing', v: 'Clear quoting designed for confidence.' },
  { k: 'Responsible sourcing', v: 'Certified supply standards and documentation.' },
  { k: 'Operational security', v: 'Disciplined handling and custody processes.' },
  { k: 'Personal service', v: 'A dedicated team—fast, discreet, responsive.' },
];

export default function WhyChooseUs() {
  return (
    <Section id="trust" variant="plain">
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={5}>
          <SectionHeader
            eyebrow="Trust"
            title={
              <>
                A brand that
                <br />
                stays out of the way.
              </>
            }
            description="The experience is designed to feel calm: fewer gimmicks, more clarity. Everything you need to trade and store bullion with confidence."
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={2.25}>
            {STATS.map((s) => (
              <Grid key={s.k} item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.10)',
                    bgcolor: 'rgba(255,255,255,0.03)',
                    height: '100%',
                    '&:hover': { borderColor: 'rgba(214,181,106,0.35)', bgcolor: 'rgba(214,181,106,0.05)' },
                    transition: 'border-color 180ms ease, background 180ms ease',
                  }}
                >
                  <Box sx={{ fontFamily: '"Cinzel", serif', letterSpacing: '0.06em', fontWeight: 600 }}>
                    {s.k}
                  </Box>
                  <Box sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.85 }}>
                    {s.v}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
