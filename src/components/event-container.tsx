
import wildcoin from "../assets/wildcoin.svg"

const EventContainer:React.FC = () =>{
    return(
        <div className="bg-[rgba(3,2,3,0.2)] w-full flex items-center gap-4 px-4">
            <img src={wildcoin} alt="" className="" />
            <div className="flex flex-col">
                <p className="font-semibold">CIT-U Freshmen Welcoming</p>
                <p className="text-sm">Today, 20 May</p>
            </div>
        </div>
    )
}

export default EventContainer;