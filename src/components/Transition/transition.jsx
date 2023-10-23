import { motion } from "framer-motion";

const transition = (OrignialComponent) => {
  return () => {
    <>
      <OrignialComponent />
      <motion.div
        className="slide-in"
        inital={{ scaleY: 0 }}
        animate={{ scaley: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide-out"
        inital={{ scaleY: 1 }}
        animate={{ scaley: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>;
  };
};

export default transition;
