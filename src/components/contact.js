import React from 'react';

import Wrapper from './wrapper';

const Contact = () => {
  return (
    <Wrapper>
      <div className="flex flex-wrap mx-4 mt-20">
        <div className="md:w-1/3">
          <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
            Got A <br className="hidden md:inline" />
            Question?
          </h2>
        </div>
        <div className="mt-2 md:mt-0 md:w-2/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus optio necessitatibus eos illo tempora dolorum eaque minus
            aspernatur rem.
          </p>
        </div>
      </div>

      <div className="relative p-6 mx-4 mt-8 border-2 border-gray-600">
        <form className="pt-6">
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-600 appearance-none placeholder-fuschia text-fuschia focus:outline-none focus:shadow-none"
              id="full-name"
              type="text"
              placeholder="FULL NAME"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-600 appearance-none placeholder-fuschia text-fuschia focus:outline-none focus:shadow-none"
              id="email"
              type="email"
              placeholder="EMAIL"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-600 appearance-none placeholder-fuschia text-fuschia focus:outline-none focus:shadow-none"
              id="phone"
              type="text"
              placeholder="PHONE"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-600 appearance-none placeholder-fuschia text-fuschia focus:outline-none focus:shadow-none"
              id="subject"
              type="text"
              placeholder="SUBJECT"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="6"
              className="w-full px-3 py-2 leading-tight border border-gray-600 appearance-none placeholder-fuschia text-fuschia focus:outline-none focus:shadow-none"
              id="message"
              placeholder="MESSAGE"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="px-4 py-2 text-white font-display bg-fuschia focus:outline-none focus:shadow-none"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
