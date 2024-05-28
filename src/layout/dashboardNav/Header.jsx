import React, { createContext, useContext, useEffect, useState} from "react";
import SideBar from "./SideBar";
import NavHeader from "./NavHeader";
import { useLocation } from "react-router-dom";
import { LightChecking } from "../../App";





export default function Header({children ,onClickLight , onLogoutHeader}) {
  const PathData = createContext()

  const location = useLocation()
  const lightChecking = useContext(LightChecking)
  
 
  
    document.body.style =`background:${lightChecking?" linear-gradient(356deg, rgba(13,11,37,1) 0%, rgba(4,4,8,1) 100%)" :"radial-gradient(circle, #eaf1f6 50%, rgba(20,20,20,0) 100%)"} `
  


  return (
   <PathData.Provider >
    <div style={{ display:location.key==='default'?"hidden":  "flex" ,  }}>
      <SideBar pathCheck={location.key==='default'?"hidden":  ""} onLogout={onLogoutHeader}/>

      <div style={{ width: "100%", padding: "0 4%" ,  }}>
        <NavHeader onClickLightNav={onClickLight} />
        {children}
      </div>
    </div>
    </PathData.Provider>
    
  );
}
