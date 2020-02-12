import React from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../tailwind.config.js';
import useMediaQuery from '../../hooks/use-media-query';

import DesktopBooking from './desktop-booking';
import MobileBooking from './mobile-booking';

const Booking = () => {
  const fullConfig = resolveConfig(tailwindConfig);

  const screenSize = useMediaQuery(
    `(min-width: ${fullConfig.theme.screens.md})`,
    <DesktopBooking />,
    <MobileBooking />
  );

  return <>{screenSize}</>;
};

export default Booking;
