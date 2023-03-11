import { useState } from "react";

const ContactForm = () => {
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [message, setMessage ] = useState("");
  const [isError, setIsError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name,
      email,
      message
    }
    // submit via api
    const rawResponse = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    const content = await rawResponse.json();

    setName('')
    setEmail('')
    setMessage('')
    setIsError(false)
  }


  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto mt-10 mb-10">
      <h1 className="bg-white text-black border-2 border-black p-2 mb-5">
        If you have any feedback or queries, or would like to let us know about any ngci news,
        please use the contact form below. Any advice or help is much appreciated!
      </h1>
      <div className="p-12 border-black border-2 sm:rounded-md bg-white">
        <form onSubmit={handleSubmit}>
          <label className="block mb-6">
            <span className="text-black">Your name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="
                block
                w-full
                mt-1
                border-black
                rounded-md
                shadow-sm
                focus:border-black
                focus:ring
                focus:ring-black
              "
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Email address</span>
            <input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="
                block
                w-full
                mt-1
                border-gray-800
                rounded-md
                shadow-sm
                focus:border-black
                focus:ring
                focus:ring-opacity-50
              "
              placeholder=""
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-black">Message</span>
            <textarea
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="
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
              "
              rows="3"
              placeholder=""
            ></textarea>
          </label>
          <div className="mb-6">
            <button
              type="submit"
              className="
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
              "
            >
              Contact Us
            </button>
          </div>
          { isError === true && (<div>Something went wrong! Message not sent.</div>) }
          { isError === false && (<div>Message sent!</div>) }
        </form>
      </div>
    </div>
  );
}

export default ContactForm;