import React, { useMemo, useRef, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import Section from "./Section";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PRODUCTS = [
  {
    id: 1,
    name: "Gold Coins",
    image: "/images/products/gold-coins.webp",
    category: "Coins",
  },
  {
    id: 2,
    name: "Cast Gold Bars",
    image: "/images/products/gold bars.webp",
    category: "Bullion",
  },
  {
    id: 3,
    name: "PAMP Suisse Bar",
    image: "/images/products/pamp-bar.webp",
    category: "Bullion",
  },
  {
    id: 4,
    name: "1 Kilo Gold Bar",
    image: "/images/products/kilo-bar.webp",
    category: "Bullion",
  },
  {
    id: 5,
    name: "Ten Tola (TT) Bar",
    image: "/images/products/tt-bar.webp",
    category: "Bullion",
  },
  {
    id: 6,
    name: "Premium Chains",
    image: "/images/products/chains.webp",
    category: "Jewelry",
  },
  {
    id: 7,
    name: "Crafted Bangles",
    image: "/images/products/bangles.webp",
    category: "Jewelry",
  },
  {
    id: 8,
    name: "Gold Rings",
    image: "/images/products/rings.webp",
    category: "Jewelry",
  },
];

/* ── Arrow button ── */
const NavArrow = ({ dir, onClick, size = 48 }) => (
  <Box
    onClick={onClick}
    sx={{
      width: size,
      height: size,
      borderRadius: "50%",
      border: "1px solid rgba(214,181,106,0.35)",
      bgcolor: "rgba(214,181,106,0.06)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flexShrink: 0,
      transition: "all 200ms ease",
      "&:hover": {
        bgcolor: "rgba(214,181,106,0.14)",
        borderColor: "rgba(214,181,106,0.7)",
      },
      "&:active": {
        transform: "scale(0.93)",
      },
    }}
  >
    {dir === "prev" ? (
      <ArrowBackIcon sx={{ fontSize: size * 0.38, color: "#D6B56A" }} />
    ) : (
      <ArrowForwardIcon sx={{ fontSize: size * 0.38, color: "#D6B56A" }} />
    )}
  </Box>
);

export default function ProductListing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // <900px

  const categories = useMemo(() => ["All", "Bullion", "Coins", "Jewelry"], []);
  const [active, setActive] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active],
  );

  /* slides visible per breakpoint */
  const slidesPerView = isMobile ? 1.15 : isTablet ? 2.2 : 4;

  return (
    <Section id="products" variant="plain">
      {/* ══════════════════════════════
          HEADER
      ══════════════════════════════ */}
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "flex-end" },
          justifyContent: "space-between",
          gap: { xs: 3, md: 2 },
          flexWrap: "wrap",
          pb: { xs: 4, md: 5 },
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        data-aos="fade-up"
      >
        {/* Left — title block */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 2.5 }}
          >
            <Box
              sx={{
                width: 24,
                height: 1,
                bgcolor: "primary.main",
                opacity: 0.8,
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                fontSize: 11,
              }}
            >
              Products
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 26, sm: 32, md: 38, lg: 44 },
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              mb: 1.5,
            }}
          >
            Bullion and fine gold{" "}
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                background:
                  "linear-gradient(90deg,#D6B56A 0%,#F4E3B2 55%,#D6B56A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              in standard sizes.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.45)",
              fontSize: { xs: 13, md: 14 },
              maxWidth: 480,
              lineHeight: 1.9,
            }}
          >
            A curated set of investment-grade bars, coins, and select jewelry.
            Contact us for latest inventory and pricing.
          </Typography>
        </Box>

        {/* Right — filters + arrows */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: 2.5,
            flexShrink: 0,
          }}
        >
          {/* Category filters */}
          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
            {categories.map((c) => (
              <Button
                key={c}
                onClick={() => {
                  setActive(c);
                  setActiveIndex(0);
                  swiperRef.current?.slideToLoop(0);
                }}
                variant={active === c ? "contained" : "outlined"}
                size="small"
                sx={{
                  py: { xs: 0.6, md: 0.75 },
                  px: { xs: 1.25, md: 1.75 },
                  fontSize: { xs: 11, md: 12 },
                  letterSpacing: "0.08em",
                  bgcolor: active === c ? "primary.main" : "transparent",
                  color: active === c ? "#0b0e10" : "rgba(255,255,255,0.70)",
                  borderColor: "rgba(255,255,255,0.12)",
                  "&:hover":
                    active === c
                      ? { bgcolor: "secondary.main" }
                      : {
                          bgcolor: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(214,181,106,0.4)",
                        },
                }}
              >
                {c}
              </Button>
            ))}
          </Stack>

          {/* Nav arrows */}
          <Stack direction="row" spacing={1.25}>
            <NavArrow
              dir="prev"
              size={isMobile ? 40 : 48}
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <NavArrow
              dir="next"
              size={isMobile ? 40 : 48}
              onClick={() => swiperRef.current?.slideNext()}
            />
          </Stack>
        </Box>
      </Box>

      {/* ══════════════════════════════
          SWIPER CAROUSEL
      ══════════════════════════════ */}
      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          /* bleed to section edges so side cards peek out */
          mx: { xs: -2, sm: -4, md: -6 },
          px: { xs: 2, sm: 4, md: 6 },
          overflow: "hidden",

          /* scale/opacity per slide state */
          "& .swiper": { overflow: "visible" },
          "& .swiper-slide": {
            transition:
              "transform 420ms cubic-bezier(0.4,0,0.2,1), opacity 420ms ease",
            transform: "scale(0.84)",
            opacity: 0.25,
          },
          "& .swiper-slide-active": {
            transform: "scale(1)",
            opacity: 1,
          },
          "& .swiper-slide-prev, & .swiper-slide-next": {
            transform: isMobile ? "scale(0.88)" : "scale(0.91)",
            opacity: isMobile ? 0.45 : 0.55,
          },
        }}
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <Swiper
          modules={[Navigation, Keyboard, Autoplay]}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          centeredSlides
          slidesPerView={slidesPerView}
          spaceBetween={isMobile ? 5 : 16}
          loop
          speed={700}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          initialSlide={0}
          style={{ paddingTop: 20, paddingBottom: 20, overflow: "hidden" }}
        >
          {filtered.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                sx={{
                  borderRadius: { xs: "16px", md: "20px" },
                  border: "1px solid rgba(255,255,255,0.09)",
                  bgcolor: "rgba(10,11,13,0.80)",
                  backdropFilter: "blur(16px)",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.50)",
                }}
              >
                {/* Gold top stripe */}
                <Box
                  sx={{
                    height: 2,
                    background:
                      "linear-gradient(90deg,transparent 0%,#D6B56A 35%,#F4E3B2 60%,#D6B56A 80%,transparent 100%)",
                    opacity: 0.7,
                  }}
                />

                {/* Image */}
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 180, sm: 210, md: 240 },
                    bgcolor: "rgba(0,0,0,0.30)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      maxWidth: "78%",
                      maxHeight: "78%",
                      objectFit: "contain",
                      opacity: 0.93,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg,transparent 40%,rgba(5,6,7,0.80) 100%)",
                    }}
                  />
                </Box>

                {/* Info */}
                <Box
                  sx={{
                    px: { xs: 2, md: 3 },
                    pt: { xs: 2, md: 2.5 },
                    pb: { xs: 2.5, md: 3 },
                  }}
                >
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      mb: 1.5,
                      bgcolor: "rgba(214,181,106,0.08)",
                      color: "primary.main",
                      border: "1px solid rgba(214,181,106,0.20)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      "& .MuiChip-label": { px: 1.25 },
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: '"Cinzel", serif',
                      fontSize: { xs: 13, md: 15 },
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: "rgba(255,255,255,0.92)",
                      mb: 0.75,
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.42)",
                      fontSize: { xs: 12, md: 13 },
                      lineHeight: 1.75,
                      mb: 2,
                    }}
                  >
                    Ask for availability, premiums, and delivery options.
                  </Typography>

                  <Box
                    sx={{
                      height: "1px",
                      bgcolor: "rgba(255,255,255,0.07)",
                      mb: 2,
                    }}
                  />

                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderColor: "rgba(214,181,106,0.25)",
                      color: "primary.main",
                      fontSize: { xs: 11, md: 12 },
                      letterSpacing: "0.1em",
                      py: { xs: 0.85, md: 1 },
                      "&:hover": {
                        bgcolor: "rgba(214,181,106,0.07)",
                        borderColor: "rgba(214,181,106,0.60)",
                      },
                    }}
                  >
                    Request details
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* ══════════════════════════════
          PROGRESS INDICATOR
      ══════════════════════════════ */}
      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.25)",
            fontFamily: '"Cinzel", serif',
            minWidth: 20,
            textAlign: "right",
          }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </Typography>

        <Box
          sx={{
            width: { xs: 80, md: 120 },
            height: 1.5,
            bgcolor: "rgba(255,255,255,0.10)",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              borderRadius: 1,
              bgcolor: "primary.main",
              width: `${filtered.length <= 1 ? 100 : (activeIndex / (filtered.length - 1)) * 100}%`,
              transition: "width 400ms cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.25)",
            fontFamily: '"Cinzel", serif',
            minWidth: 20,
          }}
        >
          {String(filtered.length).padStart(2, "0")}
        </Typography>
      </Box>

      {/* ══════════════════════════════
          FOOTER BAR
          hidden on mobile to save space
      ══════════════════════════════ */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          mt: { xs: 4, md: 5 },
          pt: { xs: 2.5, md: 3.5 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.20)",
          }}
        >
          Onyx Gold Bullion — Est. Dubai
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 1.5, md: 3 }}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {["Investment-grade", "Insured handling", "Discreet delivery"].map(
            (t) => (
              <Typography
                key={t}
                sx={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.20)",
                }}
              >
                {t}
              </Typography>
            ),
          )}
        </Stack>
      </Box>
    </Section>
  );
}
