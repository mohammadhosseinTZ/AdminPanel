import React, { useContext, useEffect } from "react";


import Progress from "../dashboard/Progress";
import SideBar from "../../layout/dashboardNav/SideBar";
import NavHeader from "../../layout/dashboardNav/NavHeader";

import useCustomEffect from "../../actions/useCustomEffect";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
document.body.style = "background: radial-gradient(circle, #f5f9fc 50%, rgba(20,20,20,0) 100%)"

const theme = createTheme({
  palette:{
    primary:{
main:'#1976d2'
    },
    secondary:{
      main:'#dc004e'
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      sm: 640,
      laptop: 992,
      desktop: 1200,
    },
  },
})
// backgroundColor:theme.palette.secondary.main

export default function Charts() {

  useCustomEffect("Charts")
  return (
    <div style={{ display: "flex" }}>
   
        <SideBar/>
    
      <div style={{width:"100%" , padding:"0 4%"}}>
        <NavHeader />
        <ThemeProvider theme={theme} >
    <CssBaseline/>
        <Box sx={{
          [theme.breakpoints.up("laptop")]:{width:200 , height:300 , backgroundColor:"red"}
        }}>

        </Box>
        </ThemeProvider>
      
      </div>
    </div>
  );
}
