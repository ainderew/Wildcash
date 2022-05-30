import { motion } from "framer-motion";

import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import key from "../assets/key.svg";
import LoginInput from "../components/login-input";

import { fadeInUp, staggeredContainer } from "../variants";

const LoginPage: React.FC = () => {
  return (
    <motion.div
      variants={staggeredContainer}
      initial="initial"
      animate="animate"
      className="w-full min-h-screen grid grid-rows-[40vh_1fr]"
    >
      <div className="p-11  bosrder-2 border-black">
        <motion.img
          variants={fadeInUp}
          src={logo}
          alt="Wildcash Logo"
          className="w-full h-full mt-4"
        />
      </div>
      <div className=" px-14 bosrder-2 border-black">
        <div className="form-wrapper flex flex-col gap-4 items-center ">
          <motion.div variants={fadeInUp} className="w-full">
            <LoginInput labelName="Student ID" icon={user}  />
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full">
            <LoginInput labelName="Password" icon={key} type="password" />
          </motion.div>

          <motion.button
            variants={fadeInUp}
            className="bg-main w-2/3 h-10 mt-8 text-sm font-semibold drop-shadow-md"
          >
            LOGIN
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
