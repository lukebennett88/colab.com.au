import React from 'react';
import PropTypes from 'prop-types';

const FacebookLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    clipRule="evenodd"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fillRule="nonzero"
      d="M11.99.001h.02c6.579 0 11.992 5.413 11.992 11.991l-.002.18c-.103 6.517-5.492 11.821-12.009 11.821-.081 0-.161 0-.241-.002C5.243 23.846-.024 18.44.002 11.932.035 5.378 5.436.003 11.99.001zm1.172 19.715v-7.747h2.151l.228-2.576h-2.38c0-.548-.003-1.061 0-1.574.003-.599.162-.76.756-.773.204-.005.408 0 .611 0h1v-2.68c-1.191.053-2.377-.132-3.538.177a2.411 2.411 0 00-1.9 2.381c-.032.716-.012 1.435-.016 2.152v.335H8.471v2.604h1.607v7.702l3.084-.001z"
    />
  </svg>
);

FacebookLogo.propTypes = {
  className: PropTypes.string,
};

export default FacebookLogo;
