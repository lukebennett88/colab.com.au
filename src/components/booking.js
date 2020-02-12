import React from 'react';

import chevronRight from '../images/chevron-right.svg';

const Booking = () => {
  return (
    <article className="mt-24">
      <img src={chevronRight} alt="right chevron" className="inline h-24" />

      <h1 className="inline-block pl-4 text-4xl uppercase text-fuschia">
        Book in 3 <br />
        Easy Steps
      </h1>
    </article>
  );
};

export default Booking;
