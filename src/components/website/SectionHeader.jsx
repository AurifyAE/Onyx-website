import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <Stack spacing={{ xs: 1.1, sm: 1.35, md: 1.5 }} sx={{ mb: { xs: 2.5, sm: 3, md: 5 }, textAlign: isCenter ? 'center' : 'left' }}>
      {eyebrow ? (
        <Typography sx={{ color: 'secondary.main', textTransform: 'uppercase', letterSpacing: { xs: '0.2em', md: '0.26em' }, fontSize: { xs: 10.5, sm: 11, md: 12 } }}>
          {eyebrow}
        </Typography>
      ) : null}

      <Typography variant="h2" sx={{ fontSize: { xs: 26, sm: 30, md: 40, lg: 44 }, lineHeight: { xs: 1.15, md: 1.08 }, letterSpacing: { xs: '-0.015em', md: '-0.02em' } }}>
        {title}
      </Typography>

      {description ? (
        <Typography sx={{ color: 'text.secondary', lineHeight: { xs: 1.75, md: 1.9 }, fontSize: { xs: 13.5, md: 16 }, maxWidth: isCenter ? 820 : 760, mx: isCenter ? 'auto' : 0 }}>
          {description}
        </Typography>
      ) : null}

      <Box
        sx={{
          mt: { xs: 0.75, md: 1 },
          height: 1,
          width: { xs: 52, md: 72 },
          mx: isCenter ? 'auto' : 0,
          background: 'linear-gradient(to right, transparent, rgba(214,181,106,0.9), transparent)',
          opacity: 0.55,
        }}
      />
    </Stack>
  );
}

