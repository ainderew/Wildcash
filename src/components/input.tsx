import React from "react";

interface props {
  label: string;
  type: string;
  value: string;

  setter: Function;
}

const InputField: React.FC<props> = ({ label, type, value, setter }: props) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setter(e.target.value);
  };
  return (
    <div>
      <p className="">{label}</p>
      <input
        value={value}
        onChange={handleOnChange}
        type={type}
        className="w-full h-10 border-2 border-gray-300  b-shadow px-4"
      ></input>
    </div>
  );
};
export default InputField;
