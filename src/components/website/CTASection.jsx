import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <Section id="cta" variant="shaded">
      <SectionHeader
        eyebrow="Enquiries"
        title="Want a quote or availability today?"
        description="Tell us what you need (bar/coin, weight, quantity). We’ll respond with pricing guidance and the next steps."
        align="center"
      />

      <Box
        sx={{
          borderRadius: 5,
          border: '1px solid rgba(255,255,255,0.10)',
          bgcolor: 'rgba(255,255,255,0.03)',
          overflow: 'hidden',
          position: 'relative',
          p: { xs: 3, md: 5 },
        }}
        data-aos="fade-up"
      >
        <Box
          sx={{
            position: 'absolute',
            inset: -120,
            pointerEvents: 'none',
            background:
              'radial-gradient(520px 260px at 20% 30%, rgba(214,181,106,0.16), transparent 60%), radial-gradient(620px 320px at 85% 60%, rgba(244,227,178,0.12), transparent 60%)',
          }}
        />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.25}
          justifyContent="center"
          sx={{ position: 'relative' }}
        >
          <Button
            variant="contained"
            onClick={() => {
              const el = document.getElementById('contact');
              if (!el) return;
              const y = el.getBoundingClientRect().top + window.scrollY - 84;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }}
            sx={{ bgcolor: 'primary.main', color: '#0b0e10', px: 3, py: 1.2, '&:hover': { bgcolor: 'secondary.main' } }}
          >
            Contact us
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/liverates')}
            sx={{
              borderColor: 'rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.86)',
              px: 3,
              py: 1.2,
              '&:hover': { borderColor: 'rgba(214,181,106,0.7)', bgcolor: 'rgba(255,255,255,0.04)' },
            }}
          >
            Open live rates
          </Button>
        </Stack>
      </Box>
    </Section>
  );
}
