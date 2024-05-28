import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
        blueTheme: "#1976d2",
        navDark:"#c7c6c6",
        navLight:"#4a4949"
      },
      secondery: {
        borderLine: "#ddd",
        whiteColor:"white",
        borderBox:"rgba(201,201,201,0.12)"
      },
    },
    breakpoints: {
      values: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl:1400
      },
    },
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
    space:{
      paddingItem:10,
      paddingItemSm:6,
      gapItem:10
    }
  });