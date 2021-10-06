import "./App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

function App() {
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
      className="lg:w-2/5 w-full mx-auto lg:my-10 bg-white rounded-xl"
    >
      <Header />
      <Navigation />
    </motion.div>
  );
}

export default App;
