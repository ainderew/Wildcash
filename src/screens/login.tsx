import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import key from "../assets/key.svg";
import LoginInput from "../components/login-input";
import Loading from "../components/loading";

import { fadeInUp, staggeredContainer } from "../variants";
import ModalInvalidLogin from "../components/modals/modal-invalid-login";

const LoginScreen: React.FC = () => {
const navigate = useNavigate()

  const ENDPOINT_LOGIN = "https://wildcash-authserver.onrender.com/login"; //reminder set to secret

  const [userIdNum, setUserIdNum] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loadingFlag, setLoadingFlag] = useState<boolean>(false);
  const [invalidLoginFlag, setInvalidLoginFlag] = useState<boolean>(false);


  const toggleLoading = (): void => {
    setLoadingFlag((prev) => !prev);
  };

  const toggleInvalidLoginFlag = () =>{
    setInvalidLoginFlag(true);

    setTimeout(() =>{
      setInvalidLoginFlag(false)
    },2000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    setter(e.target.value);
  };

  const handleLogin = async () => {
    toggleLoading();

    const loginCredentials = {
      userIdNumber: userIdNum,
      password: pass,
    };


    fetch(ENDPOINT_LOGIN, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(loginCredentials),
    })
      .then((response) => response.json())
      .then((data) => {
        toggleLoading();
        if (data.length === 0){
          toggleInvalidLoginFlag();
          return;
        }
        //handle login response
        console.log(data);
        navigate("/home");

      });
  };

  return (
    <motion.div
      variants={staggeredContainer}
      initial="initial"
      animate="animate"
      className="w-full min-h-screen grid grid-rows-[40vh_1fr]"
    >
      {loadingFlag ? <Loading /> : null}
      {invalidLoginFlag ? <ModalInvalidLogin /> : null}

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
            <LoginInput
              inputValue={userIdNum}
              handleChange={handleChange}
              setter={setUserIdNum}
              labelName="Student ID"
              icon={user}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full">
            <LoginInput
              inputValue={pass}
              handleChange={handleChange}
              setter={setPass}
              labelName="Password"
              icon={key}
              type="password"
            />
          </motion.div>

          <motion.button
            variants={fadeInUp}
            className="bg-main w-2/3 h-10 mt-8 text-sm font-semibold drop-shadow-md"
            onClick={handleLogin}
          >
            LOGIN
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginScreen;
