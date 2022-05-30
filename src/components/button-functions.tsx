import send from "../assets/send.svg"

const ButtonFunction:React.FC = () =>{
    return (
        <div
        style={{
            filter:"box-shadow:5px_5px_10px_#e0e0e0, -5px_-5px_10px_#ffffff",
        }}
        className="grid grid-rows-[1fr_2rem] bg-white bs">
            <img src={send} alt="" className="m-auto" />
            <div className="flex text-white bg-accent">
                <p className="text-center m-auto">Send</p>
            </div>
        </div>
    )
}

export default ButtonFunction;