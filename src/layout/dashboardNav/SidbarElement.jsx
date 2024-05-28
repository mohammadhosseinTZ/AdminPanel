import React, { useContext, useState } from "react";
import styleHeader from "./styleHeader.module.css";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import GroupIcon from "@mui/icons-material/Group";
import { Link, useNavigate,  } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { LightChecking, PathContext } from "../../App";
import { theme } from "../../theme";
import { Box, Button, ThemeProvider, useMediaQuery } from "@mui/material";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

import LogoutIcon from '@mui/icons-material/Logout';
export default function SidbarElement({pathCheck , onLogout}) {
    const matches = useMediaQuery("(max-width:576px)");
    const lightChecking = React.useContext(LightChecking)
  return (
    <ThemeProvider theme={theme}>
    <div className={lightChecking? styleHeader.containerBlack:styleHeader.container} style={{display:pathCheck!==""&&"hidden" }}>
    <ul>
      <li>
        <Link
          to={"/dashboard"}
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
            display: "flex",
            gap: 10,
          }}
        >
          {" "}
          <AdminPanelSettingsOutlinedIcon
            style={{
              color: theme.palette.primary.main,
              fontSize: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          />
          ADMIN PANEL
        </Link>
      </li>

      <SidebarItem  address={"/dashboard"} name={"Dashboard"}  icon={ <DashboardIcon
          style={{
            fontSize: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            
          }}
         
        />}/>
 
      <SidebarItem  address={"/dashboard/products"} name={"Products"}  icon={ <FeaturedPlayListIcon
          style={{
            fontSize: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
    
          }}
         
        />}/>

      <SidebarItem  address={"/dashboard/orders"} name={"Orders"}  icon={ <ShoppingBagIcon
          style={{
            fontSize: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
    
          }}
         
        />}/>

      <SidebarItem address={"/dashboard/users"} name={"users"} disable  icon={ <GroupIcon
          style={{
            fontSize: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            
          }}
          
        />}/>

      <SidebarItem address={"/#"} name={"Chart"} disable icon={ <BarChartIcon
          style={{
            fontSize: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
    
          }}
          
        />}/>
      
      <SidebarItem address={"/#"} name={"Comments"} disable icon={ <InsertCommentIcon
          style={{
            fontSize: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
    
          }}
          
        />}/>
      
        <Button onClick={onLogout} sx={{color:lightChecking?"white":"black" , fontSize:10 , marginTop:6}}> <LogoutIcon  fontSize="small"/> Logout</Button>
    </ul>
        
  </div>
  </ThemeProvider>
  )
}
