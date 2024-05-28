
//for back Button in navHeader
import { useContext, useEffect } from "react"

import { PathContext } from "../App"

const useCustomEffect = (x)=>{

    const pathContext = useContext(PathContext)
    const {dispatch} = useContext(PathContext)
 
        useEffect((
          
        )=>{
            if(pathContext.pathChecking){
                dispatch({type:"CURRENT" , payload:x})
                dispatch({type:"PATHCHECKING" , payload:false})
              }else{
                dispatch({type:"PREVIOUS" , payload:x})
                dispatch({type:"PATHCHECKING" , payload:true})
               
                
              }
        } , [])
    
}

export default useCustomEffect;