import React from 'react';

import Wrapper from './wrapper';
import chevronDown from '../images/chevron-down.svg';

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="flex flex-wrap pt-20 mx-4">
        <div className="md:w-1/3">
          <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
            Got A <br className="hidden md:inline" />
            Question?
          </h2>
        </div>
        <div className="mt-2 md:mt-0 md:w-2/3">
          <p>
            Looking for additional details or information about CoLab? Just fill
            out the form below, and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="relative p-6 mx-4 mt-8 border-2 border-gray-600">
        <img
          src={chevronDown}
          alt=""
          className="absolute top-0 left-0 h-8 ml-3 -mt-3 md:h-10"
        />
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          className="pt-6"
          encType="application/x-www-form-urlencoded"
          action="/success.js"
        >
          <label htmlFor="full-name" className="flex flex-col mt-4 first:mt-0">
            <div className="font-bold uppercase font-display text-fuschia">
              Full name
            </div>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-600 appearance-none focus:outline-none focus:shadow-none focus:border-fuschia"
              id="full-name"
              type="text"
              name="full-name"
            />
          </label>
          <label htmlFor="email" className="flex flex-col mt-4 first:mt-0">
            <div className="font-bold uppercase font-display text-fuschia">
              Email
            </div>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-600 appearance-none focus:outline-none focus:shadow-none focus:border-fuschia"
              id="email"
              type="email"
              name="email"
            />
          </label>
          <label htmlFor="phone" className="flex flex-col mt-4 first:mt-0">
            <div className="font-bold uppercase font-display text-fuschia">
              Phone
            </div>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-600 appearance-none focus:outline-none focus:shadow-none focus:border-fuschia"
              id="phone"
              type="text"
              name="phone"
            />
          </label>
          <label htmlFor="subject" className="flex flex-col mt-4 first:mt-0">
            <div className="font-bold uppercase font-display text-fuschia">
              Subject
            </div>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-600 appearance-none focus:outline-none focus:shadow-none focus:border-fuschia"
              id="subject"
              type="text"
              name="subject"
            />
          </label>
          <label htmlFor="message" className="flex flex-col mt-4 first:mt-0">
            <div className="font-bold uppercase font-display text-fuschia">
              Message
            </div>
            <textarea
              rows="6"
              className="w-full h-full px-3 py-2 text-gray-700 border border-gray-600 appearance-none focus:outline-none focus:shadow-none focus:border-fuschia"
              id="message"
              name="message"
            />
          </label>
          <div className="flex items-center justify-end mt-4">
            <button
              className="px-4 py-2 text-white font-display bg-fuschia focus:outline-none focus:shadow-none focus:border-fuschia"
              type="submit"
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
