import { motion } from "framer-motion";
import { absolute_fadeInDown } from "../../variants";

const ModalInvalidLogin: React.FC = () => {
  const modalStyle = {
    boxShadow: "0px 0px 10px #EEEEEE",
  };

  return (
    <motion.div
        variants={absolute_fadeInDown}
        initial="initial"
        animate="animate"
      style={modalStyle}
      className="py-4 px-10 bg-red-400 absolute top-5 z-10 left-1/2 -translate-x-1/2  rounded-xl"
    >
      <p className="text-white font-semibold">Invalid Login</p>
    </motion.div>
  );
};

export default ModalInvalidLogin;
