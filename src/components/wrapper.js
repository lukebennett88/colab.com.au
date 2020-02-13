import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
  return <article className="w-full max-w-4xl mx-auto">{children}</article>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
