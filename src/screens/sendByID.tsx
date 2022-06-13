import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import ScreenHeader from "../components/screen_header";

//img
import card_id from "../assets/id_card.svg";
import send from "../assets/send_2.svg";
import ModalSuccess from "../components/modals/modal-success";
const SendPointsByIDScreen: React.FC = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const [receiverID, setReceiverID] = useState<string>("");
  const [toSendPoints, setToSendPoints] = useState<string>("0");

  const [successFlag, setSuccessFlag] = useState<boolean>(false);

  const handleSuccess = (): void => {
    setSuccessFlag(true);

    setTimeout(() => {
      setSuccessFlag(false);
      navigate("/home");
    }, 1000);
  };

  
  const handleSend = (): void => {
    const URL_ENDPOINT = `https://wildcash.onrender.com/points/send`;

    const data = {
      senderID: auth[1].userIdNumber,
      receiverID,
      points: toSendPoints,
    };

    fetch(URL_ENDPOINT, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        handleSuccess();
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="w-full h-screen bg-accent grid grid-rows-[3rem_1fr]">
      {successFlag ? <ModalSuccess flagSetter={setSuccessFlag} points={toSendPoints} /> : null}

      <ScreenHeader label="Send Points" img="" />

      <div className="w-full h-full bg-accent flex flex-col justify-center items-center relative p-8">
        {/* <p className="text-white text-center">Available Points <br/> 1000</p> */}

        <div className="WHITE-CONTAINER w-full h-[50%] min-h-[400px] bg-white flex flex-col justify-between gap-6 p-6">
          <div className="flex flex-col gap-4">
            <img src={card_id} alt="Camera icon" className="h-8" />
            <p className=" text-center text-sm">
              Send points to someone using their ID number
            </p>
          </div>

          <input
            onChange={(e) => setReceiverID(e.target.value)}
            value={receiverID}
            placeholder="Receiver ID Number"
            className="w-full h-10 border-2 border-accent px-4"
            type="text"
          />

          <input
            onChange={(e) => setToSendPoints(e.target.value)}
            value={toSendPoints}
            placeholder="0"
            className="w-full h-10 border-2 border-accent px-4"
            type="text"
          />

          <button
            onClick={handleSend}
            className="border-[2px] border-accent rounded-md font-thin text-accent p-2 text-sm flex items-center justify-center gap-2"
          >
            <img src={send} alt="qr icon" className="" />
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendPointsByIDScreen;
