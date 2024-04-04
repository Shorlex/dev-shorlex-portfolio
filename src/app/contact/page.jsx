"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const text = "Say Hello";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="p-4 sm:p-8 md:px-12 lg:px-20 xl:px-48 h-full flex flex-col lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex justify-center items-center text-6xl">
          <div className="">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form className="h-1/2 w-full lg:h-full lg:w-1/2 bg-gradient-to-b from-blue-200 to-blue-50 rounded-xl flex flex-col text-xl gap-4 justify-center p-24 shadow-lg ">
          <span>Dear HayBK</span>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="bg-transparent border-b-2 border-b-black rounded-b-lg outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            type="email"
            className="bg-transparent border-b-2 border-b-black rounded-b-lg outline-none "
          />
          <span>Regards</span>
          <button className="bg-blue-200 rounded font-semibold text-gray-600 p-4 shadow-lg">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
