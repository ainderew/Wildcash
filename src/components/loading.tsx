import { motion,Variants } from "framer-motion"
import logo from "../assets/logo.png"

const Loading: React.FC = () =>{

    const loadingVariant: Variants={
        initial:{
            scale: 0.9,
            
        },
        end:{
            scale: 1
        }
    }

    const loadingTransition ={
        duration: 0.9,
        yoyo: Infinity
    }

    return(
        <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)] z-10">
            <motion.img
            variants={loadingVariant}
            initial="initial"
            animate="end"
            transition={loadingTransition}
            src={logo} alt="" />
        </div>
    )
}

export default Loading