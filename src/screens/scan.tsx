import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

import QrReader from "react-qr-reader";

//images
import svg_camera from "../assets/camera.svg";
import svg_qr from "../assets/qr.svg";
import ModalSendAmount from "../components/modals/modal-send-amount";
import ModalSuccess from "../components/modals/modal-success";

const ScanScreen: React.FC = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [receiverID, setReceiverID] = useState();
  const [scannedFlag, setScannedFlag] = useState<boolean>(false);
  const [successFlag, setSuccessFlag] = useState<boolean>(false);
  const [pointsToSend, setPointsToSend] = useState<string>("0");

  const handleScan = (data: any) => {
    if (data === null) return;
    console.log(data);
    setReceiverID(data);
    setScannedFlag(true);
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  const handleHeaderBack = (): void => {
    navigate(-1);
  };

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
      points: pointsToSend,
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

  useEffect(() => {}, [receiverID]);

  return (
    <div className="w-full h-screen grid grid-rows-[3rem_1fr] bg-accent">
      {successFlag ? (
        <ModalSuccess flagSetter={setSuccessFlag} points={pointsToSend} />
      ) : null}
      <div className="header relative bg-white px-4 border-b-[1px] border-black flex items-center justify-between">
        <button onClick={handleHeaderBack} className="font-medium text-xl">
          &lt;
        </button>
        <p className="text-sm absolute left-1/2 -translate-x-1/2">
          Scan QR Code
        </p>
        <button className="">Code</button>
      </div>
      <div className="BODY flex flex-col justify-center items-center px-8">
        {scannedFlag ? (
          <ModalSendAmount value={pointsToSend} setter={setPointsToSend} handleSend={handleSend} />
        ) : (
          <div className="WHITE-CONTAINER w-full h-[65%] min-h-[520px] bg-white flex flex-col gap-6 p-6">
            <img src={svg_camera} alt="Camera icon" className="h-8" />
            <p className=" text-center text-sm">
              Please move the camera over the qr code you are trying to scan
            </p>
            <QrReader
              onScan={handleScan}
              onError={handleError}
              style={{
                width: "100%",
              }}
              facingMode="environment"
            />
            <button
              onClick={() => navigate("/myQr")}
              className="border-[2px] border-accent rounded-md font-thin text-accent p-2 text-sm flex items-center justify-center gap-2"
            >
              <img src={svg_qr} alt="qr icon" className="" />
              My QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanScreen;
