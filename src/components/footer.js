import React from 'react';

import useGraphql from '../hooks/use-graphql';
import FacebookLogo from './facebook-logo';
import Map from './map';

const Footer = () => {
  const { site } = useGraphql();
  return (
    <footer className="mt-64 md:mt-32 bg-purpbrown">
      <div className="w-full max-w-4xl py-6 mx-auto">
        <div className="relative flex flex-wrap-reverse -mt-64 md:-mt-16">
          <div className="px-6 mt-auto md:w-1/2">
            <div className="flex items-end justify-between flex-1">
              <div className="mt-auto md:text-right">
                <hr className="w-32 pb-6 mt-8 border-t-4 md:ml-auto" />
                <p>
                  <strong className="mr-1 text-white uppercase">
                    Location
                    <br className="hidden md:inline" />{' '}
                  </strong>
                  <span className="font-thin text-white">
                    {site.siteMetadata.addressFirstLine}
                    <br />
                    {site.siteMetadata.addressSecondLine}
                    <br />
                    {site.siteMetadata.addressThirdLine}
                  </span>
                </p>
                <p className="mt-2">
                  <strong className="mr-1 text-white uppercase">
                    Hours
                    <br className="hidden md:inline" />{' '}
                  </strong>
                  <span className="font-thin text-white">
                    {site.siteMetadata.hours}
                  </span>
                </p>
              </div>
              <a
                href={site.siteMetadata.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 md:ml-0 md:order-first"
              >
                <FacebookLogo
                  className="flex-shrink-0 w-8"
                  pathClass="fill-current text-fuschia"
                />
              </a>
            </div>
          </div>
          <Map />
        </div>
      </div>
      <div className="px-12 pt-2 pb-6 text-center">
        <a
          href="https://www.phirannodesigns.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold uppercase text-fuschia"
        >
          Website by Phiranno Designs
        </a>
      </div>
    </footer>
  );
};

export default Footer;
