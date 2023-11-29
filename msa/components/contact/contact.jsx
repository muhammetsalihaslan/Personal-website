"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <div className="mt-10  grid grid-rows-2 md:grid-cols-2  justify-center text-center ms-6 me-6 gap-x-6 md:h-[25rem]">
      <div className="flex flex-col justify-center items-center md:mt-[13rem]  gap-y-6 ms-6">
        <h1 className="text-5xl">Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="md:mt-10">
        <form
          action="submit"
          className="flex flex-col gap-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            className="p-3 bg-[#E5E4E7] outline-none border-b-2 border-black "
            placeholder="NAME"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            className="p-3 bg-[#E5E4E7] outline-none border-b-2 border-black "
            placeholder="EMAIL"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            className="h-[10rem] p-3 outline-none bg-[#E5E4E7] border-b-2 border-black "
            placeholder="MESSAGE"
            name="message"
            onChange={handleChange}
            value={formData.message}
          />
          <button
            type="submit"
            className="underline underline-offset-4 decoration-sky-500 hover:text-sky-500 text-xl max-w-fit flex justify-items-end"
          >
            send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
