import React from 'react';

import Wrapper from '../wrapper';

const MobileBooking = () => {
  return (
    <Wrapper isMobileOnly>
      <div className="relative p-6 mx-6 mt-20 border-2 border-gray-600">
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
          <button
            type="button"
            className="w-48 py-2 mt-6 text-center text-white uppercase bg-fuschia font-display"
          >
            Click to book
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

export default MobileBooking;
