import wildcoin from "../assets/wildcoin.svg";

interface props {
  eventData: {
    eventName: string;
    eventDay: string;
    eventMonth: string;
    startTime: string;
    endTime: string;
    eventPoints: number;
  };
}
const EventContainer: React.FC<props> = ({ eventData }: props) => {
  const { eventName, eventDay, eventMonth } = eventData;

  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  // const handleClick = ():void =>{
    
  // }


  return (
    <div className="bg-[rgba(156,156,156,0.2)] w-full flex items-center gap-4 px-4 rounded-lg">
      <img src={wildcoin} alt="" className="" />
      <div className="flex flex-col">
        <p className="font-semibold text-sm">{eventName}</p>
        <p className="text-sm">
          {eventDay} {monthArray[parseInt(eventMonth)]}
        </p>
      </div>
    </div>
  );
};

export default EventContainer;
