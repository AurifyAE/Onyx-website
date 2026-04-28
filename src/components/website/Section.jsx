import React from 'react';
import { Box, Container } from '@mui/material';

export default function Section({
  id,
  children,
  variant = 'plain', // plain | soft | maroon
  borderTop = true,
  py = { xs: 5, sm: 6, md: 9, lg: 10 },
}) {
  const variantStyles = {
    plain: { bgcolor: '#FFFFFF' },
    soft: { bgcolor: '#F8E1C5' },
    maroon: {
      bgcolor: '#803738',
      '&:before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background:
          'radial-gradient(760px 340px at 75% 35%, rgba(248,225,197,0.16), transparent 60%)',
      },
    },
  };

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py,
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '96px',
        borderTop: borderTop ? '1px solid rgba(128,55,56,0.12)' : '1px solid transparent',
        ...(variantStyles[variant] || variantStyles.plain),
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 2.5, md: 3 } }}>
        {children}
      </Container>
    </Box>
  );
}

