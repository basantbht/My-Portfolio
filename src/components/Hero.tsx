"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="top" className="py-8 container max-w-6xl mx-auto px-4 mb-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-semibold ">
            Hi, I'm{" "}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-primary"
            >
              Basant Bhatt
            </motion.span>
          </h1>

         
            <div className="flex justify-center md:justify-start gap-1">
            <p className="mt-2 text-3xl font-semibold">a Student</p>
            <span className="mt-2 inline-block w-[2.5] h-8 bg-black animate-blink dark:bg-white"></span>
          </div>
          

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-2 text-base md:text-md text-gray-600 dark:text-gray-300 max-w-xl"
          >
            I'm a Computer Engineering student with a strong passion for MERN stack development. I specialize in building modern, responsive, and user-friendly web applications using React.js, Next.js, Tailwind CSS. I also have backend experience with Node.js, Express.js, and MongoDB, which helps me understand the full development workflow.
          </motion.p>

          {/* Social links */}
          <div className="mt-8">
            <p className="font-semibold text-gray-600 dark:text-gray-300">
              FIND ME ON
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center md:justify-start gap-4 mt-3"
            >
              {[
                {
                  href: "https://github.com/basantbht",
                  icon: FaGithub,
                },
                {
                  href: "https://www.linkedin.com/in/basant-bhatt-3058a7292/",
                  icon: FaLinkedin,
                },
                {
                  href: "https://x.com/BasantBhatt94",
                  icon: FaTwitter,
                },
              ].map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="p-3 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur shadow hover:shadow-lg transition hover:-translate-y-1"
                >
                  <Icon className="text-2xl text-gray-700 dark:text-gray-300" />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xl mb-3">
              Tech Stack
            </h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center md:justify-start gap-4"
            >
              {[
                FaReact,
                RiTailwindCssFill,
                IoLogoJavascript,
                SiTypescript,
                RiNextjsFill,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-2xl bg-gray-200 dark:bg-gray-700 p-3 shadow-inner flex items-center justify-center backdrop-blur hover:shadow-lg transition hover:-translate-y-1"
                >
                  <Icon className="w-10 h-10  dark:text-white" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700"
          >
            <Image
              src="/profile.png"
              alt="profile image"
              width={370}
              height={370}
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
