import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, Typography ,ThemeProvider, Button, styled} from "@mui/material";
import PropTypes from "prop-types";
import style from "./styleProgress.module.css";
import Shipment from "./Shipment";
import {theme} from "../../theme"
import { LightChecking } from "../../App";
import TableSaleCity from "./TableSaleCity"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


export default function MyTabs() {
  const lightChecking = React.useContext(LightChecking)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // styles
const boxStyle ={
   bgcolor: "background.paper"   , [theme.breakpoints.up('xl')]:{
    width:430
  } , [theme.breakpoints.up('md')]:{
    width:620
  } ,[theme.breakpoints.up('sm')]:{
    width:550
  } , [theme.breakpoints.down('sm')]:{
    width:300} }
const MyTab =styled((props)=><Tab {...props}/>)(({theme})=>({

  fontSize:theme.typography.sm.fontSize ,
  color:"#ffff !important"
    

}))

  return (
      <ThemeProvider theme={theme}>
    <div className={style.tab} style={{border:`1px solid ${theme.palette.secondery.borderBox}` ,backgroundColor: lightChecking?"black":"white"}}>
      <Typography sx={{ fontSize: 6}}>
        <Box >
          <Box sx={boxStyle}>
            <Tabs
              sx={{ fontSize:theme.typography.sm.fontSizeS  , backgroundColor:"#3030BF" ,color:"white" }}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
       <MyTab label="Shipment"  {...a11yProps(0)}/>
       <MyTab label="sale-city"  {...a11yProps(1)}/>
       <MyTab label="Item Two"  {...a11yProps(2)}/>
       <MyTab label="Item Two"  {...a11yProps(3)}/>
       <MyTab label="Item Two"  {...a11yProps(4)}/>
       <MyTab label="Item Two"  {...a11yProps(5)}/>
       <MyTab label="Item Two"  {...a11yProps(6)}/>
             
              
            
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} >
            <Box >
              <Shipment date={"2024-3-22"} step={0}/>
              <Shipment date={"2024-3-21"} step={0}/>
              <Shipment date={"2024-3-20"} step={1}/>
              <Shipment date={"2024-3-20"} step={1}/>
              <Shipment date={"2024-3-17"} step={3}/>
              <Shipment date={"2024-3-16"} step={3}/>
              <Button style={{border:"1px solid black"  , backgroundColor:"green" , color:"white"}} sx={{fontSize:"8px !important"}}>More item</Button>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} >
          <TableSaleCity />
            sale city
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </Typography>
    </div>
      </ThemeProvider>
  );
}
