import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Section from './Section';
import SectionHeader from './SectionHeader';

const CAPABILITIES = [
  { title: 'Trade', body: 'Real-time pricing and clean quoting for bullion transactions.' },
  { title: 'Source', body: 'Responsible sourcing with verifiable supply-chain standards.' },
  { title: 'Store', body: 'Secure custody workflows designed for reliability and privacy.' },
  { title: 'Deliver', body: 'Insured delivery options with careful handling and tracking.' },
  { title: 'Advise', body: 'Consultation for allocation, sizing, and portfolio considerations.' },
  { title: 'Support', body: 'A dedicated team to help with execution, logistics, and onboarding.' },
];

export default function ServicesSection() {
  return (
    <Section id="capabilities" variant="shaded">
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={4}>
          <SectionHeader
            eyebrow="Capabilities"
            title={
              <>
                End-to-end
                <br />
                bullion services.
              </>
            }
            description="A focused set of services for investors and traders—built to reduce friction and increase confidence."
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={2.25}>
            {CAPABILITIES.map((c) => (
              <Grid key={c.title} item xs={12} sm={6}>
                <Box
                  sx={{
                    height: '100%',
                    p: 2.5,
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.10)',
                    bgcolor: 'rgba(255,255,255,0.03)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': { borderColor: 'rgba(214,181,106,0.35)', bgcolor: 'rgba(214,181,106,0.05)' },
                    transition: 'border-color 180ms ease, background 180ms ease',
                  }}
                >
                  <Typography sx={{ fontFamily: '"Cinzel", serif', letterSpacing: '0.06em', fontWeight: 600 }}>
                    {c.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.85 }}>
                    {c.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}