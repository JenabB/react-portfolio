import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="mx-auto px-12 py-10"
    >
      <p>
        hello I'm Yogi Surya Pranata, I'm from Indonesia. I really like
        engineering, especially mechanics, electricity and computers. I am very
        interested in programming because with programming I can realize my
        dream to help others. My favorite style of web development is mobile
        first with a minimalist design.
      </p>
      <div className="flex justify-center mt-10">
        <FaFacebook />
        <FaInstagram className="mx-4" />
        <FaGithub />
      </div>
    </motion.div>
  );
};

export default About;
