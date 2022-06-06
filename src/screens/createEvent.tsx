import Calendar from "../components/calendar";
import HomeHeader from "../components/home-header";
import InputField from "../components/input";

const CreateEventScreen: React.FC = () => {
  return (
    <div className="w-full h-screen bg-white grid grid-rows-[4rem_1fr]">
      <HomeHeader />
      <div className="body p-8 flex flex-col gap-4">
        <InputField label="Event Name" type={"string"} />
        <InputField label="Event Description" type={"string"} />
        <InputField label="Points" type={"string"} />

        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <p className="">Start Time</p>
            <select className="w-full h-10 px-4 border-2 border-gray-300">
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
            <select className="w-full h-10 px-4 border-2 border-gray-300">
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

        <Calendar />

        {/* <button className="w-full h-10 border-accent border-2 text-accent">Create Event</button> */}
        <button className="w-full h-10 bg-accent text-white rounded-lg">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEventScreen;
