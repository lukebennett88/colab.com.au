import Image from 'gatsby-image';
import React from 'react';

import { useGraphQL } from '../hooks/use-graphql';
import Logo from './logo';

import bookHere from '../images/book-here-button.svg';

const Hero = () => {
  const data = useGraphQL();

  return (
    <article
      id="home"
      className="relative flex items-end justify-end min-h-screen"
    >
      <div className="absolute inset-0">
        <Image
          fluid={data.heroImage.childImageSharp.fluid}
          className="h-full overlay"
        />
      </div>
      <Logo
        className="absolute top-0 left-0 px-6 pt-24 w-72 md:hidden"
        pathClass="fill-current text-fuschia"
      />
      <div className="relative px-6 py-4 md:py-16 md:px-24">
        <h1 className="text-4xl font-bold leading-none text-right text-white uppercase md:text-5xl font-display">
          Port Macquarie's
          <br /> Fresh Community Hub
          <br /> and Work Space
        </h1>
      </div>
      <div className="fixed bottom-0 right-0 z-20 mb-56 mr-5 md:mr-12 md:pr-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.site.siteMetadata.booking}
          className="flex w-20 h-20 border-2 rounded-full border-fuschia"
        >
          <img
            src={bookHere}
            alt="Book here button"
            className="flex-shrink-0 w-full border-2 border-white rounded-full"
          />
        </a>
      </div>
    </article>
  );
};

export default Hero;
