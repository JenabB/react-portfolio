import { motion } from "framer-motion";
import profile from "./assets/images/profile.png";

const Header = () => {
  return (
    <div className="shadow rounded-2xl text-center">
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
    </div>
  );
};

export default Header;
