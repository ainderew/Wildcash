import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import AuthContext from "../context/authContext";

import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import key from "../assets/key.svg";
import LoginInput from "../components/login-input";
import Loading from "../components/loading";

import { fadeInUp, staggeredContainer } from "../variants";
import ModalInvalidLogin from "../components/modals/modal-invalid-login";

const LoginScreen: React.FC = () => {
  const { auth, setAuth } = useContext(AuthContext);

  // console.log(authContext?.setAuth)

  const navigate = useNavigate();

  const ENDPOINT_LOGIN = "https://wildcash-authserver.onrender.com/auth"; //reminder set to secret
  // const ENDPOINT_LOGIN = "http://localhost:7000/auth"; //reminder set to secret

  const [userIdNum, setUserIdNum] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loadingFlag, setLoadingFlag] = useState<boolean>(false);
  const [invalidLoginFlag, setInvalidLoginFlag] = useState<boolean>(false);

  const toggleLoading = (): void => {
    setLoadingFlag((prev) => !prev);
  };

  const toggleInvalidLoginFlag = () => {
    setInvalidLoginFlag(true);

    setTimeout(() => {
      setInvalidLoginFlag(false);
    }, 2000);
  };

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

    console.log(loginCredentials);
    fetch(ENDPOINT_LOGIN, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(loginCredentials),
    })
      .then((response) => response.json())
      .then((data) => {
        //handle login response
        console.log(data);

        // if (localStorage.getItem("accessToken") === null) {
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        // console.log("first login");
        // }

        getUser(data);
      })
      .catch((err) => {
        console.error(err);
        toggleLoading();
        toggleInvalidLoginFlag();
      }); //insert server error module
  };

  const getUser = (data: any) => {
    console.log("getting user");
    // const ENDPOINT_EVENTS = "http://localhost:9000/user/acc-info"; //reminder set to secret
    const ENDPOINT_EVENTS = "https://wildcash.onrender.com/user/acc-info"; //reminder set to secret

    fetch(ENDPOINT_EVENTS, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
        authorization: `Bearer ${data.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toggleLoading();
        setAuth([auth, data]);
        navigate("/home");
      })
      .catch((err) => {
        // alert(err); //handle errors here
        console.log(err);
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
              type="text"
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
