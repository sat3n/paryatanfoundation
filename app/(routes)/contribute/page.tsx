"use client";
import Image from "next/image";
import React, { useState } from "react";

const Contribute = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <h1 className="text-3xl font-bold text-center my-8 text-[#BD2720]">
        Get Involved
      </h1>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-[#BD2720]">
          Volunteer Opportunities
        </h2>
        <p className="mt-4 text-gray-700">
          Join our team of dedicated volunteers and make a difference!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white p-6 border-5 rounded-3xl shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border bg-[#FFE9AD] border-gray-400 rounded-xl"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border bg-[#FFE9AD] border-gray-400 rounded-xl"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-400 bg-[#FFE9AD] rounded-xl"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#BD2720] text-white py-2 px-4 rounded-xl shadow hover:bg-[#A0201C]"
          >
            Sign Up
          </button>
        </form>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-[#BD2720]">
          Donation Options
        </h2>
        <p className="mt-4 text-gray-700">
          Support our mission with a donation. Scan the QR code below to donate
          securely.
        </p>

        <div className="mt-6 flex justify-center">
          <Image
            src="/qr-code.png" // Replace with the actual path to your QR code image
            width={150}
            height={150}
            alt="QR Code for Donation"
          />
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-[#BD2720]">
          Advocacy and Fundraising
        </h2>
        <p className="mt-4 text-gray-700">
          Learn how you can participate in our advocacy and fundraising efforts
          to support our cause.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-[#27A744]">
          CSR Opportunities
        </h2>
        <p className="mt-4 text-gray-700">
          We offer CSR opportunities for large-scale companies to contribute to
          our mission. Get in touch to learn more.
        </p>
      </section>
    </div>
  );
};

export default Contribute;
