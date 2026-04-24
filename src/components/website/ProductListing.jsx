import React, { useMemo, useState } from 'react';
import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import Section from './Section';
import SectionHeader from './SectionHeader';

const PRODUCTS = [
  { id: 1, name: 'Gold Coins', image: '/images/products/gold-coins.webp', category: 'Coins' },
  { id: 2, name: 'Cast Gold Bars', image: '/images/products/gold bars.webp', category: 'Bullion' },
  { id: 3, name: 'PAMP Suisse Bar', image: '/images/products/pamp-bar.webp', category: 'Bullion' },
  { id: 4, name: '1 Kilo Gold Bar', image: '/images/products/kilo-bar.webp', category: 'Bullion' },
  { id: 5, name: 'Ten Tola (TT) Bar', image: '/images/products/tt-bar.webp', category: 'Bullion' },
  { id: 6, name: 'Premium Chains', image: '/images/products/chains.webp', category: 'Jewelry' },
  { id: 7, name: 'Crafted Bangles', image: '/images/products/bangles.webp', category: 'Jewelry' },
  { id: 8, name: 'Gold Rings', image: '/images/products/rings.webp', category: 'Jewelry' },
];

function ProductTile({ item }) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        border: '1px solid rgba(255,255,255,0.10)',
        bgcolor: 'rgba(255,255,255,0.03)',
        overflow: 'hidden',
        transition: 'transform 200ms ease, border-color 200ms ease, background 200ms ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(214,181,106,0.40)',
          bgcolor: 'rgba(214,181,106,0.05)',
        },
      }}
    >
      <Box sx={{ position: 'relative', height: 210, bgcolor: 'rgba(0,0,0,0.25)' }}>
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{ position: 'absolute', inset: 0, m: 'auto', maxWidth: '82%', maxHeight: '82%', objectFit: 'contain', opacity: 0.92 }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, transparent 0%, rgba(5,6,7,0.30) 40%, rgba(5,6,7,0.85) 100%)',
          }}
        />
      </Box>
      <Box sx={{ p: 2.25 }}>
        <Chip
          label={item.category}
          size="small"
          sx={{
            mb: 1.25,
            bgcolor: 'rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        />
        <Typography sx={{ fontWeight: 600, letterSpacing: '0.01em' }}>{item.name}</Typography>
        <Typography sx={{ mt: 0.75, color: 'text.secondary', fontSize: 13, lineHeight: 1.7 }}>
          Ask for availability, premiums, and delivery options.
        </Typography>
        <Button
          variant="text"
          sx={{ mt: 1, px: 0, color: 'secondary.main', '&:hover': { bgcolor: 'transparent', color: 'primary.main' } }}
        >
          Request details
        </Button>
      </Box>
    </Box>
  );
}

export default function ProductListing() {
  const categories = useMemo(() => ['All', 'Bullion', 'Coins', 'Jewelry'], []);
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <Section id="products" variant="plain">
      <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', md: 'flex-end' }, justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
        <SectionHeader
          eyebrow="Products"
          title={
            <>
              Bullion and fine gold
              <br />
              in standard sizes.
            </>
          }
          description="A curated set of investment-grade bars and coins, plus select jewelry. Product availability can vary—contact us for the latest inventory."
        />

        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'flex-end' }, mb: { xs: 2, md: 5 } }}>
          {categories.map((c) => (
            <Button
              key={c}
              onClick={() => setActive(c)}
              variant={active === c ? 'contained' : 'outlined'}
              sx={{
                py: 0.9,
                px: 1.75,
                bgcolor: active === c ? 'primary.main' : 'transparent',
                color: active === c ? '#0b0e10' : 'rgba(255,255,255,0.78)',
                borderColor: 'rgba(255,255,255,0.14)',
                '&:hover': active === c ? { bgcolor: 'secondary.main' } : { bgcolor: 'rgba(255,255,255,0.04)' },
              }}
            >
              {c}
            </Button>
          ))}
        </Stack>
      </Box>

      <Grid container spacing={2.5}>
        {filtered.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductTile item={item} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
