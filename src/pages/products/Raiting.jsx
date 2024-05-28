import React from 'react'
import Rating from '@mui/material/Rating';
import { useMediaQuery } from '@mui/material';

function createRote (){
    return Math.random()*5
}
export default function Raiting() {
    const matches = useMediaQuery("(max-width:576px)");
  return (
    <div><Rating  size="small" name="disabled" style={{fontSize:matches &&  8}} value={createRote()} disabled /></div>
  )
}
