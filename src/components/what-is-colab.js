import React from 'react';

import Wrapper from './wrapper';

const WhatIsColab = () => {
  return (
    <Wrapper>
      <div className="relative p-6 mx-4 mt-8 border-2 border-gray-600 md:w-1/2">
        <div className="flex flex-wrap mx-4 mt-4">
          <div className="">
            <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
              What Is <br className="hidden md:inline" />
              Colab?
            </h2>
          </div>
          <div className="mt-2 md:mt-0">
            <p>
              CoLab is a community hub and workspace located at the Sovereign
              Place Town Centre. Join like-minded people in this unique working
              environment or hire out CoLab for your business needs.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WhatIsColab;
