import React, { useState } from "react";

import Calendar from "../components/calendar";
import HomeHeader from "../components/home-header";
import InputField from "../components/input";
import ModalEventQR from "./eventQR";


const CreateEventScreen: React.FC = () => {
  const [eventID, setEventId] = useState<string>("");
  const [eventName, setEventName] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventPoints, setEventPoints] = useState<string>("");

  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>(0);

  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();

  const [successFlag, setSuccessFlag] = useState<boolean>(false)

  const handleSelectOnChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setter: Function
  ): void => {
    setter(e.target.value);
  };

  const handleCreateEvent = () => {
    const URL = "https://wildcash.onrender.com/event/set-schedule";
    const eventData = {
      eventName: eventName,
      eventDay: selectedDay,
      eventMonth: selectedMonth,
      eventYear: selectedYear,
      startTime: startTime,
      endTime: endTime,
      eventPoints: eventPoints,
      eventDescription: eventDescription,
    };
    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("something went wrong");
      })
      .then((data) => {
        setEventId(String(data));
        setSuccessFlag(true);
        console.log(data); // replace with success modal, currently returns eventID;

      })
      .catch((error) => {
       alert(error) // replace with error modal
      });
  };

  return (
    <div className="w-full h-screen bg-white grid grid-rows-[4rem_1fr]">
      {successFlag ?  <ModalEventQR eventID={eventID} /> : null}
     
      <HomeHeader />
      <div className="body p-8 flex flex-col gap-4">
        <InputField
          value={eventName}
          setter={setEventName}
          label="Event Name"
          type={"string"}
        />
        <InputField
          value={eventDescription}
          setter={setEventDescription}
          label="Event Description"
          type={"string"}
        />
        <InputField
          value={eventPoints}
          setter={setEventPoints}
          label="Points"
          type={"string"}
        />

        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <p className="">Start Time</p>
            <select
              onChange={(e) => handleSelectOnChange(e, setStartTime)}
              className="w-full h-10 px-4 border-2 border-gray-300"
            >
              <option value="7:00">7:00</option>
              <option value="7:00">8:00</option>
              <option value="7:00">9:00</option>
              <option value="7:00">10:00</option>
              <option value="7:00">11:00</option>
              <option value="7:00">12:00</option>
              <option value="7:00">13:00</option>
              <option value="7:00">14:00</option>
              <option value="7:00">15:00</option>
              <option value="7:00">16:00</option>
              <option value="7:00">17:00</option>
              <option value="7:00">18:00</option>
              <option value="7:00">19:00</option>
            </select>
          </div>

          <div className="w-1/2">
            <p className="">End Time</p>
            <select
              onChange={(e) => handleSelectOnChange(e, setEndTime)}
              className="w-full h-10 px-4 border-2 border-gray-300"
            >
              <option value="7:00">7:00</option>
              <option value="7:00">8:00</option>
              <option value="7:00">9:00</option>
              <option value="7:00">10:00</option>
              <option value="7:00">11:00</option>
              <option value="7:00">12:00</option>
              <option value="7:00">13:00</option>
              <option value="7:00">14:00</option>
              <option value="7:00">15:00</option>
              <option value="7:00">16:00</option>
              <option value="7:00">17:00</option>
              <option value="7:00">18:00</option>
              <option value="7:00">19:00</option>
            </select>
          </div>
        </div>

        <Calendar
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedDay={setSelectedDay}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
        />

        {/* <button className="w-full h-10 border-accent border-2 text-accent">Create Event</button> */}
        <button
          onClick={handleCreateEvent}
          className="w-full h-10 bg-accent text-white rounded-lg active:scale-90"
        >
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEventScreen;
