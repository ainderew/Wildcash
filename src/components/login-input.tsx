

interface props{
    labelName: string;
    icon: string;
    type?: string
}

const LoginInput: React.FC<props> = ({labelName,icon,type="text"}:props) =>{
    return(
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-sm text-accent font-bold">{ labelName }</label>
            <input
            style={{
                background:`url(${icon})`,
                backgroundRepeat:"no-repeat",
                backgroundSize: "1.3rem",
                backgroundPosition: "95%",
                backgroundColor:"#89343B",
            }}
            type={type} className={`w-full h-10 rounded-md text-white px-3 drop-shadow-[0px_5px_6px_rgba(0,0,0,0.25)]`} />
        </div>
    )
}

export default LoginInput;