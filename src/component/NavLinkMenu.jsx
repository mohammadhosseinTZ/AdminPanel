import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';







export default function VerticalTabs() {
  const [pathname , setPathname] = React.useState("")
 
React.useEffect(()=>{
  const pathName = window.location.pathname

  setPathname(pathName)
} , [window.location.pathname])
;

  return (
    <div>
     
     
      <Box
    sx={{ flexGrow: 0, display: 'flex', height: 224  , padding:2 , width:150}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' , color:"black"}}
      >
        <Link style={{color:pathname==="/dashboard" }} to={"/dashboard"}><Tab label="dashboard"  value={0}/></Link>
        <Link style={{color:pathname==="/dashboard/orders"?"#3030BF":"black"}} to={"/dashboard/orders"}><Tab label="orders"  value={0}/></Link>
        <Link style={{color:pathname==="/dashboard/products"?"#3030BF":"black"}} to={"/dashboard/products"}><Tab label="products"  value={0}/></Link>
        <Link style={{color:pathname==="/dashboard/users"?"#3030BF":"black"}} to={"/dashboard/users"}><Tab label="users"  value={0}/></Link>
        <Tab label="comments"  />
      
      
      
      
      </Tabs>
      
    </Box>
    </div>
  );
}