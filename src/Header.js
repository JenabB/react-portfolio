import { motion } from "framer-motion";
import profile from "./assets/images/profile.png";

const Header = () => {
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
            delay: 1,
          },
        },
      }}
      className="shadow rounded-2xl text-center"
    >
      <img
        src={profile}
        alt="profile"
        className="w-full object-cover rounded-t-xl"
        style={{ height: "350px" }}
      />
      <div className="p-4 bg-blue-500 text-white">
        <motion.h1
          animate={{ x: [100, 0] }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="font-bold text-xl"
        >
          Yogi Surya Pranata
        </motion.h1>
        <h2>Junior Front-End Developer</h2>
      </div>
    </motion.div>
  );
};

export default Header;
