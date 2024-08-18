import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#FFE9AD] min-h-screen flex items-center justify-center py-12">
      <div className="max-w-screen-lg w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-[#BD2720] mb-8">
          Contact Us
        </h2>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border text-black rounded border-gray-300 p-3 focus:outline-none bg-[#FFE9AD] focus:ring-2 focus:ring-[#BD2720]"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border text-black rounded border-gray-300 p-3 focus:outline-none bg-[#FFE9AD] focus:ring-2 focus:ring-[#BD2720]"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border text-black rounded border-gray-300 p-3 focus:outline-none bg-[#FFE9AD] focus:ring-2 focus:ring-[#BD2720]"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border rounded border-gray-300 p-3 text-black focus:outline-none bg-[#FFE9AD] focus:ring-2 focus:ring-[#BD2720]"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#BD2720] text-white font-bold py-3 px-6 rounded-md hover:bg-[#A21F17] transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
