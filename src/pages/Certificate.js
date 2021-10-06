import { motion } from "framer-motion";

import certificates from "../data/certficates.json";

const Certificate = () => {
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
      className="w-full bg-gray-100 shadow-sm py-4"
    >
      {certificates.certificates.map((x, index) => (
        <div className="shadow bg-white rounded m-2 p-4" key={index}>
          <div>
            <h1 className="text-lg text-blue-500 font-bold">{x.name}</h1>
            <h2 className="">{x.from}</h2>
            <h3 className="">{x.event}</h3>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Certificate;
