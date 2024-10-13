import React from "react";

function Contact() {
  return (
    <div className="w-[80%] max-w-5xl mx-auto mt-16 px-4 mb-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold">
          Get in Touch with Tasty<span className="text-[#e67e22]">Go</span>
        </h1>
        <p className="mt-6 text-lg text-[#888]">
          We're here to help! Whether you have questions, feedback, or need
          assistance, feel free to reach out to us.
        </p>
      </div>

      <div className="space-y-12">
        {/* Contact Information Section */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            You can reach us through the following channels:
          </p>
          <ul className="mt-4 leading-relaxed text-gray-600 list-disc list-inside">
            <li>
              Email:{" "}
              <a href="mailto:support@tastygo.com" className="text-[#e67e22]">
                support@tastygo.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+11234567890" className="text-[#e67e22]">
                (123) 456-7890
              </a>
            </li>
            <li>Live Chat: Available in the app from 9 AM to 9 PM</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Send Us a Message
          </h2>
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
