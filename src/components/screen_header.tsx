import {useNavigate} from 'react-router-dom'

interface props{
    label: string
    img: string
}

const ScreenHeader:React.FC<props> = ({label, img=""}:props) =>{
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }
    return(
        <div className="w-full h-full bg-white px-4 flex items-center justify-between">
            <p
            onClick={handleBack}
            className="text-xl font-medium">&lt;</p>
            <p className="text-sm absolute left-1/2 -translate-x-1/2">{label}</p>
            <p className="">{img}</p>
        </div>
    )
}

export default ScreenHeader