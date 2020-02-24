import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({
  id,
  children,
  isMobileOnly = false,
  isDesktopOnly = false,
}) => {
  return (
    <article
      id={id}
      className={`${isMobileOnly ? 'md:hidden ' : ''}${
        isDesktopOnly ? 'hidden md:block ' : ''
      }relative`}
    >
      <div className="w-full max-w-4xl mx-auto">{children}</div>
    </article>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMobileOnly: PropTypes.bool,
  isDesktopOnly: PropTypes.bool,
  id: PropTypes.string,
};

export default Wrapper;
