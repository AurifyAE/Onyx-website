import React from 'react';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import Section from './Section';

const activities = [
  { icon: '◉', title: 'Gold & Silver Trading' },
  { icon: '◆', title: 'Diamonds & Precious Stones' },
  { icon: '◎', title: 'Raw Gold & Precious Metals' },
];

export default function WhoWeAre() {
  return (
    <Section id="about" variant="plain">
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          gap: { xs: 3, md: 6 },
          flexWrap: 'wrap',
          pb: 5,
          borderBottom: '1px solid rgba(128,55,56,0.16)',
        }}
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
              About Company
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 30, sm: 38, md: 48 },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Verified, licensed,
            <Box
              component="span"
              sx={{
                fontStyle: 'italic',
                background: 'linear-gradient(90deg,#803738 0%,#AA6E57 55%,#803738 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              and trusted
            </Box>{' '}
            in Dubai.
          </Typography>
        </Box>
        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: 14.5,
            lineHeight: 1.9,
            maxWidth: 420,
            alignSelf: 'flex-end',
          }}
        >
          ONYX BULLION JEWELLERY TRADING LLC operates under a verified Dubai
          commercial license with a clear focus on precious metals and gemstones.
        </Typography>
      </Box>

      <Grid container spacing={2.25} sx={{ mt: 4, alignItems: 'stretch' }}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              p: { xs: 2.5, md: 3.25 },
              borderRadius: 4,
              border: '1px solid rgba(128,55,56,0.16)',
              bgcolor: 'rgba(255,255,255,0.45)',
              backdropFilter: 'blur(8px)',
              height: '100%',
              minHeight: 250,
            }}
            data-aos="fade-up"
          >
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 11, letterSpacing: '0.2em', color: 'primary.main', textTransform: 'uppercase' }}>
                Company details
              </Typography>
              <Typography sx={{ color: 'text.primary', fontWeight: 700, lineHeight: 1.8 }}>
                ONYX BULLION JEWELLERY TRADING LLC
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                License No: 1593385
                <br />
                Location: Dubai, UAE
                <br />
                Legal Type: Limited Liability Company - Single Owner (L.L.C - SO)
              </Typography>
            </Stack>
            <Chip
              label="Verified & Licensed in Dubai"
              sx={{
                mt: 2.5,
                bgcolor: 'primary.main',
                color: 'secondary.main',
                borderRadius: 999,
                px: 0.8,
                '& .MuiChip-label': { fontSize: 11, letterSpacing: '0.08em' },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              p: { xs: 2.5, md: 3.25 },
              borderRadius: 4,
              border: '1px solid rgba(128,55,56,0.16)',
              bgcolor: 'rgba(255,255,255,0.45)',
              backdropFilter: 'blur(8px)',
              height: '100%',
              minHeight: 250,
            }}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <Typography sx={{ fontSize: 11, letterSpacing: '0.2em', color: 'primary.main', textTransform: 'uppercase', mb: 1.4 }}>
              Licensed activities
            </Typography>
            <Stack spacing={1.3}>
              {activities.map((item) => (
                <Stack direction="row" spacing={1.25} alignItems="center" key={item.title}>
                  <Typography sx={{ color: 'primary.main', fontSize: 14 }}>{item.icon}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{item.title}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>

    </Section>
  );
}