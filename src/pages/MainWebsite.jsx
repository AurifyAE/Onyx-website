import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import NavigationBar from '../components/website/NavigationBar';
import WebsiteHero from '../components/website/WebsiteHero';
import ServicesSection from '../components/website/ServicesSection';
import WebsiteFooter from '../components/website/WebsiteFooter';
import WhoWeAre from '../components/website/WhoWeAre';
import ProductListing from '../components/website/ProductListing';
import WhyChooseUs from '../components/website/WhyChooseUs';
import CTASection from '../components/website/CTASection';

const MainWebsite = () => {
  useEffect(() => {
    // Keep disabled by default; it can cause scroll offset issues
    // with section navigation and iframes.
    const locomotiveScroll = null;

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavigationBar />

      <WebsiteHero />
      <WhoWeAre />
      <ProductListing />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />

      <WebsiteFooter />
    </Box>
  );
};

export default MainWebsite;
