import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material";
import { theme } from "../../theme";
import { LightChecking } from "../../App";


const steps = ["Order", `Sending`, "delivered"];

  
export default function HorizontalLinearStepper({ date, step }) {
  const lightChecking = React.useContext(LightChecking)
  const activeStep = step;

  const isStepOptional = (step) => {
    return step === 1;
  };


  const newTheme = createTheme({ palette: { mode:lightChecking? "dark":"light" } });

  return (
    <ThemeProvider  theme={newTheme}>
    <Box sx={{ width: "100%" , color:lightChecking? "white":"black" , backgroundColor: lightChecking?"black":"white", borderRadius: 5}}>
      <Typography variant="h6" component="h2" >
      <Stepper activeStep={activeStep}  >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" >
                <LocalShippingIcon
                  style={{
                    color: step === 1 || step === 2 ? "green" : "gray",
                  }}
                />
              </Typography>
            );
          }

          return (
            <Step key={label} {...stepProps} style={{ fontSize: 2 }} sx={{color:"white !important"}}>
              <StepLabel  {...labelProps} >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </Typography>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 , }}>
            <Box sx={{ flex: "1 1 auto" ,}} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 ,}}>
            <Typography
              sx={{
                
                display: "flex",
                justifyContent: "center",
                fontSize:10,
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "8px !important",
                },
              }}
            >
              {date}
            </Typography>
            <Button
              sx={{
                fontSize:10,
                [theme.breakpoints.down("sm")]: {
                  fontSize: "8px !important",
                },
              }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "More"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </ThemeProvider>
  );
}
