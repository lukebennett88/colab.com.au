import React from 'react';

import Wrapper from './wrapper';
import chevronRight from '../images/chevron-right.svg';

const Pricing = () => {
  return (
    <Wrapper id="pricing">
      <div className="px-6 pt-20">
        <div className="absolute top-0 left-0 z-10 hidden mt-24 md:block">
          <img src={chevronRight} alt="" className="h-20 -mt-24" />
        </div>
        <div className="relative px-6 py-12 border-2 border-gray-600">
          <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
            CoLab <br className="md:hidden" />
            Pricing
          </h2>

          <div className="flex flex-wrap mt-12 -mx-6 md:justify-between">
            <div className="w-full px-6 mt-4 md:border-l-2 md:border-gray-600 md:first:border-0 md:mt-0 md:w-1/3">
              <h3 className="text-xl leading-none uppercase md:text-2xl text-fuschia font-display">
                Day <br className="hidden md:inline" />
                Rates
                <span className="ml-2 md:block md:text-lg md:ml-0">
                  (Mon - Fri)
                </span>
              </h3>
              <div className="flex text-xs text-gray-800 md:text-base md:block">
                <p className="ml-2 md:ml-0 first:ml-0 md:mt-2">
                  <strong className="text-gray-800">Half Day</strong> $19
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong className="text-gray-800">One Day</strong> $29
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong className="text-gray-800">5 Full Days</strong> $79
                </p>
              </div>
            </div>
            <div className="w-full px-6 mt-4 md:border-l-2 md:border-gray-600 md:first:border-0 md:mt-0 md:w-1/3">
              <h3 className="text-xl leading-none uppercase md:text-2xl text-fuschia font-display">
                Monthly <br className="hidden md:inline" />
                Rates
                <span className="ml-2 md:block md:text-lg md:ml-0">
                  (Mon - Fri)
                </span>
              </h3>
              <div className="flex text-xs text-gray-800 md:text-base md:block">
                <p className="ml-2 md:ml-0 first:ml-0 md:mt-2">
                  <strong className="text-gray-800">
                    Part Time (8 Days <sup>pm*</sup>)
                  </strong>{' '}
                  $79
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong className="text-gray-800">
                    Full Time (20 Days <sup>pm*</sup>)
                  </strong>{' '}
                  $179
                </p>
              </div>
              <br className="md:hidden" />
              <p className="-mt-4 font-light leading-none md:mt-2">
                <small>*Per month</small>
              </p>
            </div>
            <div className="w-full px-6 mt-4 md:border-l-2 md:border-gray-600 md:first:border-0 md:mt-0 md:w-1/3">
              <h3 className="text-xl leading-none uppercase md:text-2xl text-fuschia font-display">
                Venue <br className="hidden md:inline" />
                Hire
                <span className="ml-2 md:block md:text-lg md:ml-0">
                  (After hours)
                </span>
              </h3>
              <div className="flex text-xs text-gray-800 md:text-base md:block">
                <p className="ml-2 md:ml-0 first:ml-0 md:mt-2">
                  <strong className="text-gray-800">Weekdays</strong> $29{' '}
                  <sup>ph*</sup>
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong className="text-gray-800">Weekends</strong> $49{' '}
                  <sup>ph*</sup>
                </p>
              </div>
              <br className="md:hidden" />
              <p className="-mt-4 font-light leading-none md:mt-2">
                <small>*Per hour</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
