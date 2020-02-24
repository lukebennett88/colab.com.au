import React from 'react';

import Wrapper from '../wrapper';
import { useGraphQL } from '../../hooks/use-graphql';
import chevronLeft from '../../images/chevron-left.svg';

const DesktopBooking = () => {
  const { site } = useGraphQL();
  return (
    <Wrapper isDesktopOnly>
      <div className="flex flex-wrap items-center pt-20 mx-6">
        <div className="w-1/2 px-12 py-10 border-2 border-gray-600">
          <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
            It only takes <br /> 3 Easy Steps <br />
            To book any <br /> Space
          </h2>
          <p>
            <a
              href={site.siteMetadata.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-48 py-2 mt-6 text-center text-white uppercase bg-fuschia font-display"
            >
              Click to book
            </a>
          </p>
        </div>
        <div className="relative w-1/2 py-4 my-auto -ml-6 bg-fuschia">
          <img
            src={chevronLeft}
            alt=""
            className="absolute inset-y-0 left-0 h-12 my-auto ml-px transform -translate-x-full"
          />
          <ol className="px-12 py-6 text-xl text-white">
            <li className="mt-3 leading-none first:mt-0">
              <strong className="uppercase font-display">Step 1.</strong> Click
              on the <br /> book button
            </li>
            <li className="mt-3 leading-none first:mt-0">
              <strong className="uppercase font-display">Step 2.</strong> Click
              on the
              <br />
              green plus (+) button, and enter
              <br /> your email address
            </li>
            <li className="mt-3 leading-none first:mt-0">
              <strong className="uppercase font-display">Step 3.</strong> Fill
              in the booking form
            </li>
          </ol>
        </div>
      </div>
    </Wrapper>
  );
};

export default DesktopBooking;
