import React from 'react';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WebsiteFooter = () => {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        pt: { xs: 6, md: 8 },
        pb: 4,
        bgcolor: '#050607',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <Box component="img" src="/images/logo.svg" alt="Onyx Gold" sx={{ width: 40, height: 40, objectFit: 'contain' }} />
                <Box sx={{ lineHeight: 1 }}>
                  <Typography sx={{ fontFamily: '"Cinzel", serif', letterSpacing: '0.10em', fontWeight: 600 }}>
                    ONYX GOLD
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>
                    Bullion • Trading • Custody
                  </Typography>
                </Box>
              </Stack>

              <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, maxWidth: 520 }}>
                A premium precious metals experience built for clarity—transparent execution, careful handling, and service that respects privacy.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontFamily: '"Cinzel", serif', letterSpacing: '0.06em', fontWeight: 600, mb: 2 }}>
              Navigate
            </Typography>
            <Stack spacing={1}>
              <Button onClick={() => scrollTo('home')} sx={{ justifyContent: 'flex-start', px: 0, color: 'rgba(255,255,255,0.72)' }}>
                Home
              </Button>
              <Button onClick={() => scrollTo('products')} sx={{ justifyContent: 'flex-start', px: 0, color: 'rgba(255,255,255,0.72)' }}>
                Products
              </Button>
              <Button onClick={() => navigate('/liverates')} sx={{ justifyContent: 'flex-start', px: 0, color: 'rgba(255,255,255,0.72)' }}>
                Live rates
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontFamily: '"Cinzel", serif', letterSpacing: '0.06em', fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Stack spacing={1.25}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Office 103, 1st Floor, Aldallal Building,
                <br />
                30B Street, Al Daghaya – Al Sabkha, Dubai
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Email:{' '}
                <Box component="a" href="mailto:info@onyxgold.com" sx={{ color: 'secondary.main', textDecoration: 'none' }}>
                  info@onyxgold.com
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Phone:{' '}
                <Box component="a" href="tel:043266577" sx={{ color: 'secondary.main', textDecoration: 'none' }}>
                  043266577
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                WhatsApp:{' '}
                <Box component="a" href="tel:0552231986" sx={{ color: 'secondary.main', textDecoration: 'none' }}>
                  0552231986
                </Box>
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="space-between" alignItems={{ sm: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
            © {new Date().getFullYear()} Onyx Gold. All rights reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
            Powered by <Box component="span" sx={{ color: 'secondary.main' }}>Aurify</Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default WebsiteFooter;
