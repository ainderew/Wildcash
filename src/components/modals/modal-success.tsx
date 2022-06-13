import React from "react";
import success from "../../assets/success.svg";

interface props {
  flagSetter: React.Dispatch<React.SetStateAction<boolean>>;
  points: string
}

const ModalSuccess: React.FC<props> = ({ flagSetter, points }: props) => {
  return (
    <div className="w-full h-full bg-bg_blur absolute z-10">
      <div className="w-[80%] h-[30%] bg-white z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-rows-[1fr_2fr]">
        <div className="w-full h-full flex justify-center items-center bg-green-400">
          <img src={success} alt="" className="w-[20%]" />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-between gap-2 py-5">
          <p className="text-lg font-medium">Success</p>
          <p className="text-center text-sm">
            You just sent <span className="">{points}</span> of your precious points! Congratulations
          </p>
          <button
          onClick={()=>flagSetter(false)}
          className="py-1 px-5 text-white bg-green-400 rounded-md shadow-sm">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
