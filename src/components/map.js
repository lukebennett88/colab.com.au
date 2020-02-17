import React from 'react';

import useGraphql from '../hooks/use-graphql';

const Map = () => {
  const { site } = useGraphql();

  return (
    <div className="w-full px-6 md:w-1/2">
      <iframe
        src={site.siteMetadata.googleMapsEmbedUrl}
        title="location"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        className="w-full h-64"
      />
    </div>
  );
};

export default Map;
