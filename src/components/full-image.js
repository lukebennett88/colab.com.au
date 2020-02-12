import Image from 'gatsby-image';
import React from 'react';
import PropTypes from 'prop-types';

const FullImage = ({ img }) => {
  return (
    <article className="mt-20">
      <Image fluid={img.childImageSharp.fluid} className="w-full" />
    </article>
  );
};

FullImage.propTypes = {
  img: PropTypes.object,
};

export default FullImage;
