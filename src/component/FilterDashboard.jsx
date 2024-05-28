import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';




export default function SelectLabels({onFilter}) {
  const matches = useMediaQuery("(max-width:576px)");
  const [myCategory, setMyCategory] = React.useState('');

  const handleChange = (event) => {
    setMyCategory(event.target.value);
    onFilter(event.target.value)
  };
  const [categories , setCategories] =React.useState([])

  const products = useSelector(state => state.products.products)
  React.useEffect(()=>{
    let copyCategory =[]
    products.map(product =>{
       copyCategory.push(product.category)
    
    
    })
    setCategories(new Set(copyCategory) , [...products] )
  },[products])


  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  return (
    <div >
      
      {matches 
      
      ? <div>
      <Button sx={{fontSize:matches?5:10 , textAlign:"start", color:"white" ,}} onClick={handleClickOpen}>category</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle style={{fontSize:14}}>category: </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1 }} style={{width:50 , padding:0}}>
              
              <Select
      value={myCategory}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
   
    >
      <MenuItem value="">
        <em style={{color:"black"}}>{matches ? "" :"category"}</em>
      </MenuItem>
     {[...categories].map(category =>(
      <MenuItem value={category}>{category}</MenuItem>
     ))}
     
    </Select>
            </FormControl>
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button style={{fontSize:10 }} onClick={handleClose}>Cancel</Button>
          <Button style={{fontSize:10 }} onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
    : <FormControl sx={{ m: 1, }} style={{ width:matches && 2 ,  height:matches && 2 , }}>
    <Select
      value={myCategory}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      style={{height:matches && 17 ,padding:0}}
    >
      <MenuItem value="">
        <em style={{color:"white"}}>{matches ? "" :"category"}</em>
      </MenuItem>
     {[...categories].map(category =>(
      <MenuItem value={category}>{category}</MenuItem>
     ))}
     
    </Select>
    
  </FormControl>
      }
    </div>
  );
}