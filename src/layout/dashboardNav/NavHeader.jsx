import React, { useContext, useEffect, useState }  from "react";
import styleHeader from "./styleHeader.module.css";
import TranslateIcon from "@mui/icons-material/Translate";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import PersonIcon from "@mui/icons-material/Person";


import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { LightChecking, PathContext } from "../../App";
import { theme } from "../../theme";

export default function NavHeader({onClickLightNav}) {



  const pathContext = useContext(PathContext)
  const lightChecking = React.useContext(LightChecking)



const handlePath =()=>{
  
 
  window.history.back()
}



  return (
    <div className={styleHeader.nav} style={{ height: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <button onClick={handlePath} style={{border:"1px solid #3030bf" , padding:5 , cursor:"pointer" , borderRadius:"5px" , display
      :"flex" , alignItems:"center" , backgroundColor:"white"}}>
        <ArrowBackIcon style={{ fontSize: "100%" }} />
        {pathContext.pathChecking ?pathContext.currentpath : pathContext.previoustpath}
  
        
  
        </button>
      </div>

      <div>
        <TranslateIcon sx={{color:lightChecking&& theme.palette.secondery.whiteColor}}/>
        {lightChecking ?<NightlightIcon sx={{color: theme.palette.secondery.whiteColor}} onClick={onClickLightNav}/> : <LightModeIcon onClick={onClickLightNav}/>}
        <PersonIcon sx={{color:lightChecking&& theme.palette.secondery.whiteColor}}/>
      </div>
    </div>
  );
}
