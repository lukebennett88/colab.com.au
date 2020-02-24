import React from 'react';

import { useGraphQL } from '../hooks/use-graphql';

const MobileMenuFooter = () => {
  const { site } = useGraphQL();
  return (
    <div className="flex flex-col mt-auto ml-8 lg:hidden">
      <hr className="w-32 pb-6 mt-8 border-t-4" />
      <p>
        <strong className="mr-1 text-white uppercase">
          Location
          <br />
        </strong>
        <span className="font-thin text-white">
          {site.siteMetadata.addressFirstLine}
          <br />
          {site.siteMetadata.addressSecondLine}
          <br />
          {site.siteMetadata.addressThirdLine}
          <br />
          {site.siteMetadata.addressFourthLine}
        </span>
      </p>
      <p className="mt-2">
        <strong className="mr-1 text-white uppercase">
          Hours
          <br />
        </strong>
        <span className="font-thin text-white">{site.siteMetadata.hours}</span>
      </p>
    </div>
  );
};

export default MobileMenuFooter;
