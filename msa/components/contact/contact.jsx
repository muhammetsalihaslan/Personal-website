import React from "react";
import Tolink from "../link/tolink";

const Contact = () => {
  return (
    <div className="mt-10 grid grid-cols-2 justify-center text-center ms-6 me-6 gap-x-6 h-[25rem]">
      <div className="flex flex-col justify-center text-center gap-y-6 ms-6">
        <h1 className="text-5xl">Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10">
        <form action="submit" className="flex flex-col gap-y-6">
          <input
            type="text"
            className="p-3 bg-[#E5E4E7] outline-none border-b-2 border-black "
            placeholder="NAME"
          />
          <input
            type="email"
            className="p-3 bg-[#E5E4E7] outline-none border-b-2 border-black "
            placeholder="EMAIL"
          />
          <textarea
            className="h-[10rem] p-3 outline-none bg-[#E5E4E7] border-b-2 border-black "
            placeholder="MESSAGE"
          />
          <Tolink
            toWhere="send message"
            privateClass="underline underline-offset-4 decoration-sky-500 hover:text-sky-500 text-xl max-w-fit flex justify-items-end"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
