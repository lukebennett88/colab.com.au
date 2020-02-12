import React from 'react';
import PropTypes from 'prop-types';

import siteNavigation from '../data/site-navigation.json';

const SiteContext = React.createContext({ navItems: siteNavigation });

const SiteProvider = ({ children }) => {
  const [navItems, setNavItems] = React.useState(siteNavigation);
  const setNavIndicator = (index, forceActive) => {
    if (forceActive === true) {
      // make a shallow copy
      const updatedNav = [...siteNavigation];

      // uncheck all active links
      navItems.forEach(item => {
        item.isActive = false;
      });

      // get item and set the active to true and replace the array
      const navItem = siteNavigation[index];
      navItem.isActive = true;

      updatedNav[index] = navItem;

      // update it so array.map execute for re-rendering
      setNavItems(updatedNav);
    }
  };

  return (
    <SiteContext.Provider
      value={{
        navItems,
        setNavIndicator,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

SiteProvider.propTypes = {
  children: PropTypes.node,
};

export default SiteContext;
export { SiteProvider };
