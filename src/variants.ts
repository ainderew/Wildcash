

import {Variants} from "framer-motion";



export const fadeInUp:Variants ={
    initial:{
        opacity: 0,
        y: 40
    },
    animate:{
        opacity: 1,
        y:0
    }

}

export const absolute_fadeInDown: Variants = {
    initial:{
        opacity: 0,
        y: -40,
        x: "-50%"
    },
    
    animate:{
        opacity: 1,
        y: 0,
        x: "-50%",
        
        transition:{
            // duration: .4,
            ease: 'easeInOut',
            repeat: 1,
            repeatType: "reverse",
            repeatDelay: 1,
            duration: .3,
            
        }
        
    },
    
    
}

export const staggeredContainer:Variants ={
    initial:{

    },
    animate:{
        transition:{
            staggerChildren: 0.1
        }
    }
}