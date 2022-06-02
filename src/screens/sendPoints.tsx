import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SendButtonsContainer from "../components/send-button-container";

import points_logo from "../assets/points_logo.svg";
import back_arrow from "../assets/back_arrow.svg";
import scan_qr from "../assets/scan_qr.svg";
import id_img from "../assets/id_img.svg"

const SendPointsPage: React.FC = () => {
  const [points, setPoints] = useState<number>(2805);

  const navigate = useNavigate();
  const handleBack = ():void =>{
      navigate("/home")
  }

  return (
    <div className="w-full h-screen grid grid-rows-[4rem_1fr] px-4">
      <div className="header flex justify-between items-center relative">
        <img 
        onClick={handleBack}
        src={back_arrow} alt="" className="" />
        <p className="text-accent absolute left-1/2 -translate-x-1/2">
          Send Points
        </p>
      </div>

      <div className="grid grid-rows-[1fr_2fr]">
        <div className="flex flex-col items-center justify-center gap-6 ">
          <img src={points_logo} alt="" className="w-[5rem]" />
          <div className="">
            <p className="font-semibold text-4xl text-center">{points}.00</p>
            <p className="text-gray-400 text-xs text-center">
              Available Points
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <SendButtonsContainer img={scan_qr} label="Scan QR Code" destination="scanQR" />
          <SendButtonsContainer img={id_img} label="Send via ID number" destination="idSend" />
        </div>
      </div>
    </div>
  );
};

export default SendPointsPage;
