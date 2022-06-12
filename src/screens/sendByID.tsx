import { useState } from 'react';
import ScreenHeader from '../components/screen_header';

//img
import card_id from "../assets/id_card.svg";
import send from "../assets/send_2.svg"
const SendPointsByIDScreen: React.FC = () => {
    const [receiverID, setReceiverID] = useState<string>("")

    const handleSend =():void =>{

    }
    return (
        <div className="w-full h-screen bg-accent grid grid-rows-[3rem_1fr]">
            <ScreenHeader label='Send Points' img="" />

            <div className="w-full h-full bg-accent flex justify-center items-center p-8">
                <div className="WHITE-CONTAINER w-full h-[50%] min-h-[400px] bg-white flex flex-col justify-between gap-6 p-6">
                    <div className="flex flex-col gap-4">
                        <img src={card_id} alt="Camera icon" className="h-8" />
                        <p className=" text-center text-sm">
                            Please move the camera over the qr code you are trying to scan
                        </p>
                    </div>

                    <input
                        onChange={(e) => setReceiverID(e.target.value)}
                        value={receiverID}
                        placeholder = "Receiver ID Number"
                        className='w-full h-10 border-2 border-accent px-4' type="text" />
                    <button className="border-[2px] border-accent rounded-md font-thin text-accent p-2 text-sm flex items-center justify-center gap-2">
                        <img src={send} alt="qr icon" className="" />
                        My QR Code
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SendPointsByIDScreen;
