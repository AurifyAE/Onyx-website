import React from 'react';
import { Box, Container } from '@mui/material';

export default function Section({
  id,
  children,
  variant = 'plain', // plain | shaded
  borderTop = true,
  py = { xs: 5, sm: 6, md: 9, lg: 10 },
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py,
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '96px',
        borderTop: borderTop ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        ...(variant === 'shaded'
          ? {
              bgcolor: 'rgba(255,255,255,0.015)',
              '&:before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background:
                  'radial-gradient(760px 340px at 75% 35%, rgba(214,181,106,0.08), transparent 60%)',
              },
            }
          : {}),
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 2.5, md: 3 } }}>
        {children}
      </Container>
    </Box>
  );
}

