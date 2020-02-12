import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Booking from '../components/booking';

const IndexPage = () => {
  return (
    <Layout home>
      <SEO title="Custom Braille &amp; Tactile Signage" />
      <Hero />
      <Booking />
    </Layout>
  );
};

export default IndexPage;
