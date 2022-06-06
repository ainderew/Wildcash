interface props{
    label: string
    type: string
}

const InputField: React.FC<props> = ({label, type}: props) => {
  return (
    <div>
      <p className="">{label}</p>
      <input 
      type={type}
      className="w-full h-10 border-2 border-gray-300  b-shadow px-4" ></input>
    </div>
  );
};
export default InputField;
