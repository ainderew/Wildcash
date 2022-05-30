

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

export const staggeredContainer:Variants ={
    initial:{

    },
    animate:{
        transition:{
            staggerChildren: 0.1
        }
    }
}