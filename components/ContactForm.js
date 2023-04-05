import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name,
      email,
      message,
    };
    // submit via api
    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await rawResponse.json();

    setName("");
    setEmail("");
    setMessage("");
    setIsError(false);
  };

  return (
    <div className="w-full md:w-3/4 md:max-w-full mt-12 mb-20 mx-auto px-2 sm:px-0">
      <h1 className="bg-white text-black border-2 border-black rounded-lg p-5 mb-5 shadow-md shadow-black">
        If you have any feedback or queries, or have any NGCI beer-related news,
        please contact us using the form below. Any advice or help is much
        appreciated!
      </h1>
      <div className="py-10 px-10 border-black border-2 rounded-lg bg-white shadow-md shadow-black">
        <form onSubmit={handleSubmit}>
          <label className="block mb-6">
            <span className="text-black">Your name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              placeholder="Type your name here"
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Email address</span>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Type your email address here"
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-black">Message</span>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
              placeholder="Type your message here"
              required
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
              Send Message
            </button>
          </div>
          {isError === true && (
            <div>Something went wrong! Message not sent.</div>
          )}
          {isError === false && (
            <div className="font-weight-extrabold">Message sent! Thank you</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
