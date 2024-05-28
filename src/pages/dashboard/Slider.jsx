import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];
  
  function valuetext(value) {
    return `${value}%`;
  }
  
export default function MySlider({value}) {
  return (
    <div>
        <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={value} 
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
    </div>
  )
}
