import React, { useContext, useState } from "react";
import styleHeader from "./styleHeader.module.css";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import GroupIcon from "@mui/icons-material/Group";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { LightChecking, PathContext } from "../../App";
import { theme } from "../../theme";
import { Box, Button, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import SidbarElement from "./SidbarElement";
export default function SideBar({ pathCheck, onLogout }) {
  const matches = useMediaQuery("(max-width:576px)");

  const lightChecking = React.useContext(LightChecking);
  const [menuClick, setMenuClick] = useState(false);
  const newTheme = createTheme({
    palette: { mode: lightChecking ? "dark" : "light" },
    breakpoints: {
      values: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl:1400
      }},
      typography: {
        sm:{
         fontSize:10,
         fontSizeS:8,
         
         
        },
        md:{
         fontSize:20,
         fontSizeS:15
        }
       },
  });
  return (
    <ThemeProvider theme={newTheme}>
      {matches ? (
        <Box >
          <Box
           
          >
            <Box  sx={{
              position: "fixed",
              left: 0,
              top: 0,
              display:menuClick?"":"none",
              backgroundColor: "rgba(2,2,3,0.8620689655172413)",
              width: "100%",
              height: "100%",
              zIndex: "99",
              transition:"all 100ms linear",

            }}></Box>
            <Box  sx={{
              position: "fixed",
              left: menuClick ? 0 : "-100%",
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: "999",
              transition:"all 600ms linear"
            }}>
              <SidbarElement pathCheck={pathCheck} onLogout={onLogout} />

              <Button
                onClick={() => setMenuClick(!menuClick)}
                sx={{ position: "fixed", top: "50%", right:menuClick &&"45%",left:!menuClick&&"-5%" }}
                
              >
                {menuClick ? <FirstPageIcon fontSize="large" sx={{color:menuClick?"white":"black"}}/> : <LastPageIcon fontSize="large" color="action"/>}
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <SidbarElement pathCheck={pathCheck} onLogout={onLogout} />
      )}
    </ThemeProvider>
  );
}
