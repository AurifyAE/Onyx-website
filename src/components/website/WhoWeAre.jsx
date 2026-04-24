import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Section from './Section';

const pillars = [
  {
    num: '01',
    title: 'Mission',
    body: 'Deliver premium bullion access through dependable execution, responsible sourcing, and secure custody.',
  },
  {
    num: '02',
    title: 'Vision',
    body: 'Make modern bullion investing simple — globally accessible, transparent, and operationally sound.',
  },
  {
    num: '03',
    title: 'Approach',
    body: 'We prioritize accuracy, consistency, and privacy — so your decisions stay yours.',
  },
];

const stats = [
  { value: '15+', label: 'Years active' },
  { value: '50+', label: 'Countries served' },
  { value: '1:1', label: 'Dedicated service' },
];

export default function WhoWeAre() {
  return (
    <Section id="about" variant="shaded">

      {/* ══════════════════════════════
          HEADER BAND
      ══════════════════════════════ */}
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          gap: { xs: 3, md: 6 },
          flexWrap: 'wrap',
          pb: 5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Left */}
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
              About
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 26, sm: 32, md: 38, lg: 46 },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Built around trust,{' '}
            <Box
              component="span"
              sx={{
                fontStyle: 'italic',
                background: 'linear-gradient(90deg,#D6B56A 0%,#F4E3B2 55%,#D6B56A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              engineered
            </Box>{' '}
            for clarity.
          </Typography>
        </Box>

        {/* Right */}
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: 14,
            lineHeight: 1.9,
            maxWidth: 360,
            alignSelf: 'flex-end',
          }}
        >
          Onyx Gold brings a disciplined approach to precious metals — clear
          quoting, careful handling, and service designed for long-term investors.
        </Typography>
      </Box>

      {/* ══════════════════════════════
          STAT ROW
      ══════════════════════════════ */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' },
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
        data-aos="fade-up"
      >
        {stats.map((s, i) => (
          <Box
            key={s.label}
            sx={{
              py: { xs: 3, md: 4 },
              px: { xs: 0, md: 0 },
              pl: { md: i === 0 ? 0 : 5 },
              pr: { md: i === 2 ? 0 : 5 },
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: i === 0 ? 'flex-start' : i === 2 ? 'flex-end' : 'center' },
              transition: 'transform 260ms ease, background 260ms ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                bgcolor: 'rgba(214,181,106,0.03)',
              },
            }}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: { xs: 30, md: 38 },
                fontWeight: 700,
                background: 'linear-gradient(90deg,#D6B56A 0%,#F4E3B2 60%,#D6B56A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                mb: 0.75,
              }}
            >
              {s.value}
            </Typography>
            <Typography
              sx={{
                fontSize: 10.5,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.30)',
              }}
            >
              {s.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ══════════════════════════════
          THREE PILLARS — full-width rows
      ══════════════════════════════ */}
      <Box>
        {pillars.map((p, i) => (
          <Box
            key={p.num}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '200px 1fr 1.6fr' },
              alignItems: 'start',
              gap: { xs: 1.5, md: 0 },
              py: { xs: 3.5, md: 4.5 },
              borderBottom: i < pillars.length - 1
                ? '1px solid rgba(255,255,255,0.07)'
                : 'none',
              px: { xs: 0, md: 1 },
              mx: { xs: 0, md: -1 },
              borderRadius: 2,
              transition: 'background 260ms ease, transform 260ms ease, box-shadow 260ms ease',
              '&:hover': {
                bgcolor: 'rgba(214,181,106,0.03)',
                transform: 'translateY(-2px)',
                boxShadow: '0 14px 28px rgba(0,0,0,0.18)',
              },
            }}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Number + rule */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: { md: 0.5 } }}>
              <Typography
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: 11,
                  color: 'primary.main',
                  opacity: 0.5,
                  letterSpacing: '0.14em',
                  flexShrink: 0,
                }}
              >
                {p.num}
              </Typography>
              <Box
                sx={{
                  height: 1,
                  flex: 1,
                  maxWidth: 40,
                  bgcolor: 'primary.main',
                  opacity: 0.25,
                  borderRadius: 1,
                  display: { xs: 'none', md: 'block' },
                }}
              />
            </Box>

            {/* Title */}
            <Box sx={{ pt: { md: 0.4 }, pr: { md: 4 } }}>
              <Typography
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.92)',
                }}
              >
                {p.title}
              </Typography>
              {/* show body here on mobile */}
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: 13,
                  lineHeight: 1.85,
                  mt: 0.75,
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {p.body}
              </Typography>
            </Box>

            {/* Body — desktop only */}
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: 14,
                lineHeight: 1.9,
                display: { xs: 'none', md: 'block' },
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                pl: 4,
              }}
            >
              {p.body}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ══════════════════════════════
          GOLD HIGHLIGHT CARD
      ══════════════════════════════ */}
      <Box
        sx={{
          mt: 5,
          p: { xs: 3, md: 4 },
          borderRadius: '16px',
          border: '1px solid rgba(214,181,106,0.15)',
          background:
            'linear-gradient(135deg,rgba(214,181,106,0.07) 0%,rgba(214,181,106,0.02) 100%)',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr auto 1fr' },
          gap: { xs: 3, sm: 0 },
          alignItems: 'center',
          transition: 'transform 280ms ease, box-shadow 280ms ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 20px 44px rgba(0,0,0,0.22)',
          },
        }}
        data-aos="zoom-in-up"
      >
        {/* Left */}
        <Box>
          <Box
            sx={{ width: 28, height: 1.5, bgcolor: 'primary.main', opacity: 0.6, borderRadius: 1, mb: 2 }}
          />
          <Typography
            sx={{
              fontFamily: '"Cinzel", serif',
              fontSize: { xs: 14, md: 16 },
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.90)',
              mb: 0.75,
            }}
          >
            Dubai headquarters
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.42)', fontSize: 13.5, lineHeight: 1.85 }}>
            Office 103, 1st Floor, Aldallal Building
            <br />
            30B Street, Al Daghaya – Al Sabkha, Dubai
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            width: { xs: '100%', sm: 1 },
            height: { xs: 1, sm: 56 },
            bgcolor: 'rgba(214,181,106,0.18)',
            borderTopRightRadius: 150,
            borderBottomLeftRadius: 140,
            mx: { sm: 5 },
            flexShrink: 0,
          }}
        />

        {/* Right */}
        <Box>
          <Typography
            sx={{
              fontSize: 10.5,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'primary.main',
              opacity: 0.75,
              mb: 1,
            }}
          >
            Established in Dubai
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.42)', fontSize: 13.5, lineHeight: 1.85 }}>
            Serving investors across the Middle East,
            <br />
            Asia, and Europe since 2009.
          </Typography>
        </Box>
      </Box>

      {/* ══════════════════════════════
          FOOTER BAR
      ══════════════════════════════ */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          mt: 5,
          pt: 3.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.20)',
          }}
        >
          Onyx Gold Bullion — Est. Dubai
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {['Transparent pricing', 'Secure handling', 'Discreet service'].map((tag) => (
            <Typography
              key={tag}
              sx={{
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.20)',
              }}
            >
              {tag}
            </Typography>
          ))}
        </Stack>
      </Box>

    </Section>
  );
}