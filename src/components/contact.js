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
        <form className="pt-6" data-netlify="true">
          <label htmlFor="full-name" className="flex flex-col mt-4 first:mt-0">
            <div className="uppercase font-display text-fuschia font-bold">
              Full name
            </div>
            <input
              className="w-full px-3 py-2 border border-gray-600 appearance-none text-gray-700 focus:outline-none focus:shadow-none focus:border-fuschia"
              id="full-name"
              type="text"
            />
          </label>
          <label htmlFor="email" className="flex flex-col mt-4 first:mt-0">
            <div className="uppercase font-display text-fuschia font-bold">
              Email
            </div>
            <input
              className="w-full px-3 py-2 border border-gray-600 appearance-none text-gray-700 focus:outline-none focus:shadow-none focus:border-fuschia"
              id="email"
              type="email"
            />
          </label>
          <label htmlFor="phone" className="flex flex-col mt-4 first:mt-0">
            <div className="uppercase font-display text-fuschia font-bold">
              Phone
            </div>
            <input
              className="w-full px-3 py-2 border border-gray-600 appearance-none text-gray-700 focus:outline-none focus:shadow-none focus:border-fuschia"
              id="phone"
              type="text"
            />
          </label>
          <label htmlFor="subject" className="flex flex-col mt-4 first:mt-0">
            <div className="uppercase font-display text-fuschia font-bold">
              Subject
            </div>
            <input
              className="w-full px-3 py-2 border border-gray-600 appearance-none text-gray-700 focus:outline-none focus:shadow-none focus:border-fuschia"
              id="subject"
              type="text"
            />
          </label>
          <label htmlFor="message" className="flex flex-col mt-4 first:mt-0">
            <div className="uppercase font-display text-fuschia font-bold">
              Message
            </div>
            <textarea
              rows="6"
              className="w-full h-full px-3 py-2 border border-gray-600 appearance-none text-gray-700 focus:outline-none focus:shadow-none focus:border-fuschia"
              id="message"
            />
          </label>
          <div className="flex items-center justify-end mt-4">
            <button
              className="px-4 py-2 text-white font-display bg-fuschia focus:outline-none focus:shadow-none focus:border-fuschia"
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
