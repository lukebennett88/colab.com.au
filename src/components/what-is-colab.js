import React from 'react';
import Image from 'gatsby-image';
import useGraphql from '../hooks/use-graphql';

import Wrapper from './wrapper';

const WhatIsColab = () => {
  const data = useGraphql();

  return (
    <Wrapper>
      <div className="relative flex flex-wrap mx-6 mt-12 border-2 border-gray-600 md:pr-12 md:w-1/2">
        <div className="inset-0 w-full px-6 py-12 md:py-24 md:absolute md:pr-24">
          <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
            What Is <br className="hidden md:inline" />
            Colab?
          </h2>
          <p className="mt-8 mb-16 md:text-xl">
            CoLab is a community hub and workspace located at the Sovereign
            Place Town Centre. Join like-minded people in this unique working
            environment or hire out CoLab for your business needs.
          </p>
        </div>
        <div className="relative inset-y-0 right-0 w-full px-6 py-8 -mt-24 -mb-32 transform md:translate-x-full md:my-0 md:min-h-48rem md:min-w-125pc">
          <Image
            fluid={data.whatIsColabInnerImage.childImageSharp.fluid}
            className="w-full h-64 md:-ml-32 md:h-full"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default WhatIsColab;
