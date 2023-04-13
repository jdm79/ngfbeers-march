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
    <div className='w-full md:w-3/4 md:max-w-full mt-12 mb-20 mx-auto px-2 sm:px-0 min-h-screen'>
      {/* <h1 className='bg-white text-black border-2 border-black rounded-lg p-5 mb-5 shadow-md shadow-black'>
        If you have any feedback or queries, or have any NGCI beer-related news,
        please contact us using the form below. Any advice or help is much
        appreciated!
      </h1> */}
      <h1 className='bg-white text-black border-2 border-black rounded-lg p-5 mb-5 shadow-md shadow-black'>
        Contact Form is currently under construction! Email us at:
        ngfbeers@gmail.com
      </h1>
    </div>
  );
};

export default ContactForm;
