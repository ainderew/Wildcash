import HomeHeader from "../components/home-header";
import SendButtonsContainer from "../components/send-button-container";

//images
import create_event from "../assets/create_event.svg"
import edit_event from "../assets/edit_event.svg"

const AdminScreen: React.FC = () => {
  return <div className="h-screen w-full bg-white grid grid-rows-[4rem_1fr]">
      <HomeHeader />
      <div className="body flex flex-col py-5 px-5 gap-4">
          <SendButtonsContainer img={create_event} label={"Create an event"} destination={"createEvent"} />
          <SendButtonsContainer img={edit_event} label={"Edit an event"} destination={"editEvent"} />
      </div>
  </div>;
};

export default AdminScreen;
