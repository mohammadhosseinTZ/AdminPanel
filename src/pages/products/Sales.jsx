import React from 'react'
import { Gauge } from '@mui/x-charts/Gauge';
import { Margin } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { fontSize } from '@mui/system';

export default function Sales({num , numRemaining}) {
    const matches = useMediaQuery("(max-width:576px)");
  return (


<div style={{width:100 , margin:"auto" }}>
<Gauge  width={matches?50:100} height={matches?50:100} value={numRemaining} valueMin={0} valueMax={num} style={{ fontSize:matches&& "6px"}}   text={
     ({ value, valueMax }) => `${value} / ${valueMax}`
  }/>
</div>

  )
}
