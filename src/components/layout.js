import React, { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import Popup from './popup';

const Layout = ({ home, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="font-sans antialiased text-gray-700 bg-gray-100">
        <div className="w-full mx-auto bg-white">
          <div className="shadow">
            <div className="relative flex">
              <Header home={home} isOpen={isOpen} setOpen={setOpen} />
              <main id="main" className="relative flex-1 w-full min-h-screen">
                <div className="px-6">
                  <div className="w-full max-w-3xl mx-auto">
                    <button
                      type="button"
                      onClick={() => setOpen(!isOpen)}
                      className={`absolute top-0 z-50 flex items-center mt-6 text-sm font-semibold tracking-widest ${
                        home || isOpen ? 'text-white' : ''
                      }
                    } uppercase transition-colors ease-in duration-250 lg:hidden`}
                    >
                      {isOpen ? (
                        <IoIosClose className="mr-1 text-3xl" />
                      ) : (
                        <IoIosMenu className="mr-1 text-3xl" />
                      )}
                      Menu
                    </button>
                  </div>
                </div>
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
      <Popup />
    </>
  );
};

Layout.propTypes = {
  home: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
