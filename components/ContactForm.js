import { useState } from "react";

const ContactForm = () => {

  return (
    <div className='w-full md:w-3/4 md:max-w-full mt-12 mb-20 mx-auto px-2 sm:px-0'>
      <h1 className='bg-white text-black border-2 border-black rounded-lg p-5 mb-5 shadow-md shadow-black'>
        If you have any feedback or queries, or have any NGCI beer-related news,
        please contact us using the form below. Any advice or help is much
        appreciated!
      </h1>
      <div className='py-10 px-20 border-black border-2 rounded-lg bg-white shadow-md shadow-black'>
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-recaptcha="true"
          action='/success'
        >
          <input type='hidden' name='form-name' value='contact' />
          <p class='hidden'>
            <label>
              Don’t fill this out if you’re human: <input name='bot-field' />
            </label>
          </p>
          <label className='block mb-6' htmlFor='yourname'>
            <span className='text-black'>Your name</span>
            <input
              type='text'
              name='name'
              className='
                block
                w-full
                mt-1
                border-black
                rounded-md
                shadow-sm
                focus:border-black
                focus:ring
                focus:ring-black
              '
              placeholder='Type your name here'
              required
            />
          </label>
          <label className='block mb-6' htmlFor='youremail'>
            <span className='text-gray-700'>Email address</span>
            <input
              name='email'
              type='email'
              className='
                block
                w-full
                mt-1
                border-gray-800
                rounded-md
                shadow-sm
                focus:border-black
                focus:ring
                focus:ring-opacity-50
              '
              placeholder='Type your email address here'
              required
            />
          </label>
          <label className='block mb-6' htmlFor='yourmessage'>
            <span className='text-black'>Message</span>
            <textarea
              name='message'
              className='
                block
                w-full
                mt-1
                border-black
                rounded-md
                shadow-sm
                focus:border-black
                focus:ring
                focus:ring-black
                focus:ring-opacity-50
              '
              rows='3'
              placeholder='Type your message here'
              required
            ></textarea>
          </label>
          <div data-netlify-recaptcha="true"></div>

          <div className='mb-6'>
            <button
              type='submit'
              className='
                h-10
                px-5
                text-black
                bg-yellow-400
                border-2
                border-black
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-black
                hover:text-white
              '
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
