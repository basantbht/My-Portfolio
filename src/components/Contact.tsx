"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [sendingMessage, setSendingMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendingMessage("Sending...");
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "12b115f5-23a9-4ec0-93e9-30a08de5ef89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setSendingMessage("");
      setIsSuccess(true);
      setResult("Message sent successfully!");
      form.reset();
    } else {
      setSendingMessage("");
      setIsSuccess(false);
      setResult("Something went wrong. Try again.");
    }
  };

  useEffect(() => {
    if (!result) return;

    const timer = setTimeout(() => {
      setResult("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [result]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="py-20 container max-w-6xl mx-auto px-4 scroll-my-5"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact <span className="text-primary">Me</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SIDE CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 md:w-3/4">
              Have a question or want to work together? Feel free to reach out.
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm">
            <FaEnvelope className="w-7 h-7 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <Link
                href="mailto:bhattbasant012@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                bhattbasant012@gmail.com
              </Link>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm">
            <FaPhone className="w-7 h-7 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <Link
                href="tel:+9779860822186"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                +977-9860822186
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={onSubmit} className="space-y-3.5">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <motion.input
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                required
                rows={4}
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none resize-none"
              ></motion.textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition shadow-md cursor-pointer"
            >
              Send Message
            </motion.button>

            {/* RESULT */}
            <p className="text-center text-sm mt-2">{sendingMessage}</p>

            {isSuccess ? (
              <p className="text-center text-sm mt-2 text-green-500">
                {result}
              </p>
            ) : (
              <p className="text-center text-sm mt-2 text-red-500">{result}</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
