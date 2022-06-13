// import {useState} from 'react'
interface props {
  setter: Function;
  value: string;
  handleSend: Function
}

const ModalSendAmount: React.FC<props> = ({ setter, value, handleSend }: props) => {
  return (
    <div className="bg-white w-full h-auto flex flex-col justify-between">
      <p className="">Enter Points To Send</p>
      <input value={value} onChange={(e)=>setter(e.target.value)} type="text" className="" />
      <button onClick={() => handleSend()} className="w-full py-2 px-5 border-2 border-accent text-accent">Send</button>
    </div>
  );
};
export default ModalSendAmount;
