import React from 'react';
import { IoIosClose } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SiteContext from '../context/site-context';
import logo from '../images/logo.svg';

const Header = ({ home, isOpen, setOpen }) => {
  const { navItems } = React.useContext(SiteContext);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={
          isOpen
            ? 'fixed inset-0 transition-colors w-full h-full bg-transparent-black z-50 duration-200'
            : 'bg-transparent pointer-events-none'
        }
      >
        <span className="sr-only">Close Menu</span>
      </button>
      <header
        className={`fixed min-h-screen z-50 py-20 text-white bg-blue-600 transform transition ease-in duration-200 lg:sticky lg:top-0 lg:bottom-0 lg:left-0 w-80 bg-fuschia lg:translate-x-0${
          isOpen ? ' translate-x-0' : ' -translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={
            isOpen
              ? 'absolute top-0 right-0 z-50 mt-3 -mr-3 text-4xl transform translate-x-full'
              : 'hidden'
          }
        >
          <IoIosClose aria-label="Close menu" />
        </button>
        <nav>
          <img
            src={logo}
            alt="CoLab logo."
            className="hidden w-full px-8 lg:block"
          />
          <ul className="w-full mt-3 leading-tight uppercase lg:mt-12">
            {navItems.map(navItem => (
              <li key={navItem.id} className="flex text-2xl font-display">
                {home ? (
                  <AnchorLink
                    href={navItem.href}
                    onClick={() => setOpen(false)}
                    className={`${
                      navItem.isActive ? 'active ' : ''
                    }relative mt-4 px-8 hover:underline w-full`}
                  >
                    {navItem.label}
                  </AnchorLink>
                ) : (
                  <Link
                    to={`/${navItem.href}`}
                    className={`${
                      navItem.isActive ? 'active ' : ''
                    }relative mt-4 px-12 hover:underline w-full`}
                  >
                    {navItem.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  home: PropTypes.bool,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Header;
