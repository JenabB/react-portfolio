import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="mx-auto px-12 py-10">
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
    </div>
  );
};

export default About;
