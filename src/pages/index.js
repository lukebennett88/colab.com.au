import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Booking from '../components/booking';
import Pricing from '../components/pricing';
import Contact from '../components/contact';
import WhatIsColab from '../components/what-is-colab';
import FullImage from '../components/full-image';

import { useGraphQL } from '../hooks/use-graphql';

const IndexPage = () => {
  const data = useGraphQL();

  return (
    <Layout home>
      <SEO title="CoLab" />
      <Hero />
      <WhatIsColab />
      <FullImage
        img={data.whatIsColabImage}
        className="mt-40 md:mt-20"
        objectPosition="bottom"
      />
      <Booking />
      <Pricing />
      <FullImage img={data.contactUsImage} />
      <Contact />
      <FullImage img={data.pricingImage} />
    </Layout>
  );
};

export default IndexPage;
