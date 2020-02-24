import Image from 'gatsby-image';
import React from 'react';
import PropTypes from 'prop-types';

const FullImage = ({ img, className, objectPosition = 'right' }) => {
  return (
    <article className={className || 'mt-20'}>
      <Image
        fluid={img.childImageSharp.fluid}
        imgStyle={{ objectPosition: `${objectPosition}` }}
        style={{ minHeight: `20rem`, maxHeight: `30rem` }}
        className="w-full"
      />
    </article>
  );
};

FullImage.propTypes = {
  img: PropTypes.object,
  className: PropTypes.string,
  objectPosition: PropTypes.string,
};

export default FullImage;
