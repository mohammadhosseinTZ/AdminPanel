import {
    Box,
  Button,
  Card,
  CardActions,
  CardContent,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LightChecking } from "../../App";
import { theme } from "../../theme";

export default function OrdersCard({
  color,
  headerText,
  num,
  textBody,
  filter,
  onFilterCard,
}) {

      // style
const header ={  fontWeight:"bold !important" , 

[theme.breakpoints.down("lg")]:{
fontSize:theme.typography.sm.fontSize
}}
const body ={  

[theme.breakpoints.down("lg")]:{
fontSize:theme.typography.sm.fontSizeS
}}
  return (
    <ThemeProvider theme={theme}>
      <Card
        style={{
          backgroundColor: color,
          border: `1px solid ${theme.palette.secondery.borderBox}`,
          display: "grid",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardContent >

          <Typography sx={header} color="black">
            {headerText}
          </Typography>

          <Typography variant="body2" sx={body}>
            <div
              style={{
              
                padding: 7,
                color: "#00afd2",
                
              }}
            >
              {num} order
            </div>
            <span style={{ padding: 7 }}>{textBody}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              onFilterCard(filter);
            }}
            sx={{ textAlign: "center",fontSize: theme.typography.sm.fontSize ,[theme.breakpoints.between("lg" ,"xl")]:{
                fontSize:8} ,[theme.breakpoints.down("lg")]:{
                    fontSize:theme.typography.sm.fontSizeS
                    } }}
          >
           <div>
           <span>Filter only</span> &nbsp;{" "}
            <span
              style={{
                color: theme.palette.primary.blueTheme,
                fontWeight: "bold",
              }}
            >
              {" "}
              {filter}{" "}
            </span>
            &nbsp; <span >status</span>
           </div>
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
