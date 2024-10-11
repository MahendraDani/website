"use client";
import {delay, motion, useInView} from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react";

export function FadeUp({children, delay=0.3} : {children : ReactNode, delay ?: number}){
  let ref = useRef(null);
  let isInView = useInView(ref);
  const [isVisible,setIsVisible] = useState(false)
  
  useEffect(()=>{
      if(isInView && !isVisible){
          setIsVisible(true);
      }
  },[isInView,isVisible])
  return (
      <motion.div 
          ref={ref} 
          variants={{
              hidden : {
                  opacity : 0,
                  y : 10
              },
              visible : {
                  opacity : 1,
                  y : 0
              }
          }}
          initial={"hidden"}
          animate={isVisible ? "visible" : "hidden"} 
          transition={{delay}}
      >               
          {children}
      </motion.div>
  )
}