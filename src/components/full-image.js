import Image from 'gatsby-image';
import React from 'react';
import PropTypes from 'prop-types';

const FullImage = ({ img, className }) => {
  return (
    <article className={className || 'mt-20'}>
      <Image
        fluid={img.childImageSharp.fluid}
        imgStyle={{ objectPosition: `right` }}
        style={{ minHeight: `20rem` }}
        className="w-full"
      />
    </article>
  );
};

FullImage.propTypes = {
  img: PropTypes.object,
  className: PropTypes.string,
};

export default FullImage;
