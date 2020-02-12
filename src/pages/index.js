import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Booking from '../components/booking';
import FullImage from '../components/full-image';

import useGraphql from '../hooks/use-graphql';

const IndexPage = () => {
  const data = useGraphql();

  return (
    <Layout home>
      <SEO title="Custom Braille &amp; Tactile Signage" />
      <Hero />
      <Booking />
      <FullImage img={data.bookingImage} />
    </Layout>
  );
};

export default IndexPage;
