import { axisClasses, blueberryTwilightPalette, cheerfulFiestaPalette, mangoFusionPalette } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import * as React from "react";


import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import ProgressIncom from "./ProgressIncom";
import style from "./styleProgress.module.css";

// import { ThemeProvider, useTheme } from "styled-components";

import MyTabs from "./MyTabs";
import { LightChecking } from "../../App";
const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
const categories = {
  blueberryTwilight: blueberryTwilightPalette,
  mangoFusion: mangoFusionPalette,
  cheerfulFiesta: cheerfulFiestaPalette,
};
export default function Progress() {
  
  const lightChecking = React.useContext(LightChecking)
  const matches = useMediaQuery("(min-width:576px)");
  const chartSetting = {
    yAxis: [{}],
    width: matches ? 480 : 250,
    height: matches ? 300 : 250,

    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      
      },
    },
  };
  const dataset = [
    {
      Phone: 59,
      Laptop: 57,
      Watch: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      Phone: 50,
      Laptop: 52,
      Watch: 78,
      seoul: 28,
      month: "Fev",
    },
    {
      Phone: 47,
      Laptop: 53,
      Watch: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      Phone: 54,
      Laptop: 56,
      Watch: 92,
      seoul: 73,
      month: "Apr",
    },
    {
      Phone: 57,
      Laptop: 69,
      Watch: 92,
      seoul: 99,
      month: "May",
    },
    {
      Phone: 60,
      Laptop: 63,
      Watch: 103,
      seoul: 144,
      month: "June",
    },
    {
      Phone: 59,
      Laptop: 60,
      Watch: 105,
      seoul: 319,
      month: "July",
    },
    {
      Phone: 65,
      Laptop: 60,
      Watch: 106,
      seoul: 249,
      month: "Aug",
    },
    {
      Phone: 51,
      Laptop: 51,
      Watch: 95,
      seoul: 131,
      month: "Sept",
    },
    {
      Phone: 60,
      Laptop: 65,
      Watch: 97,
      seoul: 55,
      month: "Oct",
    },
    {
      london: 67,
      Laptop: 64,
      Watch: 76,
      seoul: 48,
      month: "Nov",
    },
    {
      london: 61,
      Laptop: 70,
      Watch: 103,
      seoul: 25,
      month: "Dec",
    },
  ];
  const valueFormatter = (value) => `${value}000$`;






  const newTheme = createTheme({ palette: { mode:lightChecking? "dark":"light" } });

  return (
    <ThemeProvider theme={newTheme} >
    <div className={style.container}>
      <div style={{ width: "100%" }}>
        <div
          style={{ backgroundColor: lightChecking?"black":"white", borderRadius: 5 }}
          className={style.progressOne}
        >
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "Phone", label: "Phone", valueFormatter },
              { dataKey: "Laptop", label: "Laptop", valueFormatter },
              { dataKey: "Watch", label: "Watch", valueFormatter },
            ]}
            colors={categories['cheerfulFiesta']}
            {...chartSetting}
            sx={{ "& .MuiChartsLegend-series text": { fontSize: "10px !important" , color:"white !important" }}}
          />
           
        </div>
        <div className={style.progressTwo}  style={{ backgroundColor: lightChecking?"black":"white", borderRadius: 5 }}>
          <ProgressIncom />
        
        </div>
      </div>
      {/* <Table/> */}
      <MyTabs />
    </div>
    </ThemeProvider>
  );
}
