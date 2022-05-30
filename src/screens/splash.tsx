import { Link } from "react-router-dom";

import splash_img from "../assets/splash_img.png";

const Splash: React.FC = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-[1fr_40vh]">
      <div
        style={{
          background:
            "linear-gradient(163.95deg, #89343B 11.17%, #FFC107 107.42%)",
        }}
        className="flex flex-col justify-between relative text-white pt-14"
      >
        <img src={splash_img} alt="" className="absolute bottom-0 z-10" />

        <p className="text-[4rem] font-bold text-white opacity-[0.2] text-center">
          WILDCASH
        </p>

        <div
          style={{
            background:
              "linear-gradient(270.07deg, #C5511F -1.44%, rgba(255, 255, 255, 0) 53.89%)",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
          className="box-1 h-20 w-full mt-auto"
        ></div>
        <div
          style={{
            background: "rgba(202, 230, 255, 0.22)",
            backdropFilter: "blur(20px)",
          }}
          className="box-2 w-full h-20 z-20 flex"
        >
          <p className="font-thin m-auto">Be active in out Wildcat community</p>
        </div>
      </div>

      <div className="borer-2 border-black flex flex-col items-center justify-center gap-6 p-10">
        <p className="text-center font-bold">
          Attend events
          <br /> enjoy rewards & points
        </p>
        <p className="text-[rgba(0,0,0,0.4)] text-justify text-sm">
          You can earn points just by attending school sanctioned events which
          inturn you can redeem for items within our university{" "}
        </p>
        <Link to="/Login">
          <button className="bg-accent text-white h-12 px-24 rounded-lg">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;
