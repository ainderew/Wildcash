import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeInUp } from "../variants";

import HomeHeader from "../components/home-header";
import EventContainer from "../components/event-container";
import ButtonFunction from "../components/button-functions";

//Images
import scan_qr from "../assets/scan_qr.svg";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any>([]);

  useEffect(() => {
    const getEvents = () => {
      fetch("http://localhost:9000/event/get-events", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "Appclication/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data instanceof Error) {
            // HANDLE ERRROR
            console.log(data);
            return;
          }
          console.log(data);
          setEvents(data);
        });
    };
    getEvents();
  }, []);
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="w-full h-screen grid grid-rows-[4rem_2fr_1fr] gap-6"
    >
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
          <div className="w-full h-full grid auto-rows-[4.5rem] gap-4 overflow-scroll">
            {events.map((el: any, index: number) => {
              return <EventContainer eventData={el} />;
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-full grid grid-rows-[1fr_1fr] gap-10 px-8 pb-6">
        <div
          onClick={() => navigate("/scan")}
          className="flex items-center gap-4 px-4 border-4 border-dotted border-gray-500"
        >
          <img src={scan_qr} alt="" className="" />
          <div className="flex flex-col">
            <p className="font-bold">Scan QR Code</p>
            <p className="text-gray-400 text-sm">
              Scan to spend/receive points
            </p>
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
