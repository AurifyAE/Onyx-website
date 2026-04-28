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
        bgcolor: '#803738',
        pt: { xs: 7, md: 9 },
        pb: { xs: 3.5, md: 4.5 },
        borderTop: '1px solid rgba(248,225,197,0.22)',
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: { xs: 4, md: 5 } }}>
          <Box
            component="img"
            src="/images/logo-white.svg"
            alt="Onyx Gold"
            sx={{
              width: { xs: 140, md: 190 },
              height: { xs: 28, md: 38 },
              objectFit: 'contain',
              objectPosition: 'left',
            }}
          />
          <Box sx={{ flex: 1, height: 1, bgcolor: 'rgba(248,225,197,0.22)' }} />
        </Box>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid item xs={12} md={5}>
            <Typography sx={{ color: '#F8E1C5', lineHeight: 1.9, fontSize: 14.5, maxWidth: 430 }}>
              A premium precious metals experience built for clarity — transparent
              execution, careful handling, and service that respects privacy.
            </Typography>
            <Box sx={{ mt: 2.2, p: 2, borderRadius: 2, border: '1px solid rgba(248,225,197,0.24)', bgcolor: 'rgba(248,225,197,0.08)' }}>
              <Typography sx={{ color: '#F8E1C5', fontSize: 12.5, lineHeight: 1.9 }}>
                License No: 1593385
                <br />
                Company: ONYX BULLION JEWELLERY TRADING LLC
                <br />
                Category: Department of Economy & Development
                <br />
                Legal Type: L.L.C - Single Owner
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography sx={{ color: '#F8E1C5', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', mb: 1.8 }}>
              Navigate
            </Typography>
            <Stack spacing={0.3}>
              {[
                { label: 'Home', action: () => scrollTo('home') },
                { label: 'Identity', action: () => scrollTo('identity') },
                { label: 'Services', action: () => scrollTo('services') },
                { label: 'Contact', action: () => scrollTo('contact') },
              ].map(({ label, action }) => (
                <Button
                  key={label}
                  onClick={action}
                  sx={{
                    justifyContent: 'flex-start',
                    px: 0,
                    py: 0.5,
                    color: 'rgba(248,225,197,0.84)',
                    fontSize: 13,
                    fontWeight: 400,
                    minWidth: 0,
                    '&:hover': {
                      color: '#F8E1C5',
                      bgcolor: 'transparent',
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4.5}>
            <Typography sx={{ color: '#F8E1C5', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', mb: 1.8 }}>
              Contact
            </Typography>
            <Stack spacing={1.1}>
              <Typography sx={{ color: 'rgba(248,225,197,0.86)', fontSize: 13.5, lineHeight: 1.8 }}>
                Office 103, 1st Floor, Aldallal Building
                <br />
                30B Street, Al Daghaya – Al Sabkha, Dubai
                <br />
                P.O Box: 113-6621
              </Typography>
              <Typography sx={{ color: 'rgba(248,225,197,0.9)', fontSize: 13.5 }}>
                Email: <Box component="a" href="mailto:prolinkdxb@gmail.com" sx={{ color: '#F8E1C5', textDecoration: 'none' }}>PROLINKDXB@GMAIL.COM</Box>
              </Typography>
              <Typography sx={{ color: 'rgba(248,225,197,0.9)', fontSize: 13.5 }}>
                Phone: <Box component="a" href="tel:043266577" sx={{ color: '#F8E1C5', textDecoration: 'none' }}>04 326 6577</Box>
              </Typography>
              <Typography sx={{ color: 'rgba(248,225,197,0.9)', fontSize: 13.5 }}>
                Mobile: <Box component="a" href="tel:+971554539941" sx={{ color: '#F8E1C5', textDecoration: 'none' }}>+971 55 453 9941</Box>
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            pt: 2.5,
            borderTop: '1px solid rgba(248,225,197,0.18)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1.2,
            justifyContent: 'space-between',
            alignItems: { sm: 'center' },
          }}
        >
          <Typography sx={{ color: 'rgba(248,225,197,0.62)', fontSize: 12 }}>
            © {new Date().getFullYear()} Onyx Gold. All rights reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(248,225,197,0.62)', fontSize: 12 }}>
            Powered by <Box component="span" sx={{ color: '#F8E1C5', fontWeight: 600 }}>Aurify</Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WebsiteFooter;