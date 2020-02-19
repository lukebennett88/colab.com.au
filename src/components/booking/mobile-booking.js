import React from 'react';

import Wrapper from '../wrapper';
import chevronRight from '../../images/chevron-right.svg';

import { useGraphQL } from '../../hooks/use-graphql';

const MobileBooking = () => {
  const data = useGraphQL();

  return (
    <Wrapper isMobileOnly>
      <div className="relative p-6 mx-6 mt-20 border-2 border-gray-600">
        <img
          src={chevronRight}
          alt=""
          className="absolute top-0 left-0 h-16 mt-6 ml-3 transform -translate-x-full"
        />
        <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
          Book in 3 <br /> Easy Steps
        </h2>

        <div className="mt-4 bg-fuschia">
          <ul className="p-6 text-white">
            <li className="leading-none">
              <strong className="font-display">STEP 1.</strong> Click on the
              book button
            </li>
            <li className="mt-2 leading-none">
              <strong className="font-display">STEP 2.</strong> Select the
              membership you are after
            </li>
            <li className="mt-2 leading-none">
              <strong className="font-display">STEP 3.</strong> Make payment
            </li>
          </ul>
        </div>

        <p className="text-right">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.site.siteMetadata.booking}
            className="inline-block w-48 py-2 mt-6 text-center text-white uppercase bg-fuschia font-display"
          >
            Click to book
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default MobileBooking;
