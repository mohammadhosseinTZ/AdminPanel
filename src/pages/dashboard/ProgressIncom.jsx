import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

export default function ProgressIncom() {
  const matches = useMediaQuery("(min-width:576px)");

  const chartSetting = {
    xAxis: [
      {
        label: "revenue ($) -2024",
      },
      
    ],

    width: matches ? 480 : 250,
    height: matches ? 300 : 250,
  };
  const dataset = [
    {
      london: 5900,
      paris: 5700,
      newYork: 8600,
      seoul: 2100,
      month: "Jan",
    },
    {
      london: 5000,
      paris: 5200,
      newYork: 7800,
      seoul: 2800,
      month: "Fev",
    },
    {
      london: 4700,
      paris: 5300,
      newYork: 10600,
      seoul: 4100,
      month: "Mar",
    },
    {
      london: 5400,
      paris: 5600,
      newYork: 9200,
      seoul: 7300,
      month: "Apr",
    },
    {
      london: 5700,
      paris: 6900,
      newYork: 9200,
      seoul: 9900,
      month: "May",
    },
    {
      london: 6000,
      paris: 6300,
      newYork: 10300,
      seoul: 14400,
      month: "June",
    },
    {
      london: 5900,
      paris: 6000,
      newYork: 10500,
      seoul: 31900,
      month: "July",
    },
    {
      london: 6500,
      paris: 6000,
      newYork: 10600,
      seoul: 24900,
      month: "Aug",
    },
    {
      london: 5100,
      paris: 5100,
      newYork: 9500,
      seoul: 13100,
      month: "Sept",
    },
    {
      london: 6000,
      paris: 6500,
      newYork: 9700,
      seoul: 5500,
      month: "Oct",
    },
    {
      london: 6700,
      paris: 6400,
      newYork: 7600,
      seoul: 4800,
      month: "Nov",
    },
    {
      london: 6100,
      paris: 7000,
      newYork: 10300,
      seoul: 2500,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `${value}mm`;

  
  return (

  
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "seoul", label: "Seoul rainfall", valueFormatter },
          ]}
          layout="horizontal"
          grid={{ vertical: true }}
          {...chartSetting}
          sx={{ "& .MuiChartsLegend-series text": { fontSize: "10px !important" } }}
        />
 

  );
}
