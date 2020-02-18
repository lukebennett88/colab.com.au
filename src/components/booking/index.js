import React from 'react';

import DesktopBooking from './desktop-booking';
import MobileBooking from './mobile-booking';
import Wrapper from '../wrapper';

const Booking = () => {
  return (
    <Wrapper id="booking">
      <DesktopBooking />
      <MobileBooking />
    </Wrapper>
  );
};

export default Booking;
