import {motion} from "framer-motion"
import EventContainer from "../components/event-container";
import HomeHeader from "../components/home-header";

import scan_qr from "../assets/scan_qr.svg"
import { fadeInUp } from "../variants";
import ButtonFunction from "../components/button-functions";

const Home: React.FC = () => {
  return (
    <motion.div
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    className="w-full h-screen grid grid-rows-[4rem_2fr_1fr] gap-6">
      <HomeHeader />

      <div className="flex flex-col gap-4 overflow-y-hidden px-8 shadow-[inset_0px_-5px_4px_rgba(0,0,0,0.25)] relative">
        <div className="flex flex-col items-center">
          <p className="text-base text-gray-400 font-medium">
            Available Points
          </p>
          <p className="points text-3xl font-semibold text-accent">2805</p>
        </div>

        <div className="w-full h-full flex flex-col gap-4  z-[0]">
          <p className="text-gray-400 font-medium">Upcoming Events</p>
          <div className="w-full h-full grid auto-rows-[5.5rem] gap-4 overflow-scroll">
            <EventContainer />
            <EventContainer />
            <EventContainer />
            <EventContainer />
            <EventContainer />
            <EventContainer />
            <EventContainer />
            <EventContainer />
          </div>
        </div>
      </div>

      <div className="w-full h-full grid grid-rows-[1fr_1fr] gap-6 px-8 pb-6">
        <div className="flex items-center gap-4 px-4 border-4 border-dotted border-gray-500">
            <img src={scan_qr} alt="" className="" />
            <div className="flex flex-col">
                <p className="font-bold">Scan QR Code</p>
                <p className="text-gray-400 text-sm">Scan to spend/receive points</p>
            </div>
        </div>

        <div className="buttons-container grid grid-cols-4 gap-5">
            <ButtonFunction redirectTo="sendPoints" />
            {/* <ButtonFunction />
            <ButtonFunction />
            <ButtonFunction /> */}
        </div>

        {/* <div className="buttons-container bosrder-2 border-green-500">
            <p className="font-semibold text-gray-500">Free Drink Stamp</p>
            <p className="text-xs text-gray-500">Get a free drink at the canteen once you attend 6 events</p>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Home;
