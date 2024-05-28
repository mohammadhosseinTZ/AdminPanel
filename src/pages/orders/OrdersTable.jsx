import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material";
import { LightChecking } from "../../App";
import styled from "styled-components";




function createData(id, date, name, price, status) {
  return { id, date, name, price, status };
}

const rows = [
  createData(177374, "13-12-2024", 125 + "USD", "phone x20", "Delivered"),
  createData(881928, "1-1-2024", 111 + "USD", "phone x33", "Pending"),
  createData(123422, "14-9-2024", 345 + "USD", "watch serie9 ", "Delivered"),
  createData(234123, "4-12-2024", 221 + "USD", "watch serie8", "New"),
  createData(884828, "3-10-2024", 145 + "USD", "phone A10", "Pending"),
  createData(884928, "4-10-2024", 145 + "USD", "phone A12", "Delivered"),
  createData(184828, "2-10-2024", 145 + "USD", "laptop A1", "Pending"),
  createData(584828, "1-10-2024", 145 + "USD", "phone A1", "Delivered"),
  createData(484828, "3-11-2024", 115 + "USD", "phone A3", "Pending"),
  createData(384828, "1-12-2024", 143 + "USD", "laptop A1", "Delivered"),
  createData(8184828, "3-3-2024", 129 + "USD", "watch A1", "Pending"),
  createData(882828, "3-1-2024", 123 + "USD", "laptop A1", "Delivered"),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function OrdersTable({ status }) {
  const lightChecking = React.useContext(LightChecking);
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
  // style
const thStyle ={  fontWeight:"bold !important" , 
[newTheme.breakpoints.between("lg" ,"xl")]:{
fontSize:newTheme.typography.sm.fontSize
},
[newTheme.breakpoints.down("lg")]:{
  fontSize:newTheme.typography.sm.fontSize
  }
}
const tdStyle ={  
[newTheme.breakpoints.between("lg" ,"xl")]:{
fontSize:newTheme.typography.sm.fontSizeS 
} , 
[newTheme.breakpoints.down("lg")]:{
  fontSize:newTheme.typography.sm.fontSizeS
  }
}
  return (
    <ThemeProvider theme={newTheme}>
      <TableContainer component={Paper} sx={{border:"1px solid rgba(201,201,201,0.12)" , }}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow  sx={{border:"1px solid rgba(201,201,201,0.12)"}}>

              <TableCell sx={thStyle}>Orders ID</TableCell>


              <TableCell sx={thStyle} >Product Name</TableCell>
              <TableCell sx={thStyle}>Ordered Date</TableCell>
              <TableCell sx={thStyle}>Product Price</TableCell>
              <TableCell sx={thStyle}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              // <StyledTableCell component="th" scope="row">
              if (status !== "") {
                if (row.status === status) {
                  return (
                    <TableRow
                    key={row.id}
                   
                    >
                 
                      <TableCell component="th" scope="row"  sx={tdStyle}>
                        {row.id}
                      </TableCell>
                      <TableCell sx={tdStyle} >
                        {row.name}
                      </TableCell>
                      <TableCell sx={tdStyle}>{row.date}</TableCell>
                      <TableCell sx={tdStyle}>{row.price}</TableCell>
                      <TableCell sx={tdStyle}>{row.status}</TableCell>
                    </TableRow>
                  
                  );
                }
              } else {
                return (
                  <TableRow
                    key={row.id}
                    sx={tdStyle}
                  >
                    <TableCell component="th" scope="row" sx={tdStyle}>
                      {row.id}
                    </TableCell>
                    <TableCell  sx={tdStyle}>{row.name}</TableCell>
                    <TableCell sx={tdStyle}>{row.date}</TableCell>
                    <TableCell sx={tdStyle}>{row.price}</TableCell>
                    <TableCell sx={tdStyle}>{row.status}</TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
