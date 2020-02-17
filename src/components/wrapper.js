import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children, isMobileOnly = false, isDesktopOnly = false }) => {
  return (
    <article
      className={`${isMobileOnly ? 'md:hidden ' : ''}w-full max-w-4xl mx-auto${
        isDesktopOnly ? ' hidden md:block' : ''
      }`}
    >
      {children}
    </article>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMobileOnly: PropTypes.bool.isRequired,
  isDesktopOnly: PropTypes.bool.isRequired,
};

export default Wrapper;
