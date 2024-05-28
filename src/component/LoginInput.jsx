import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";


export default function LoginInput({lable ,icon ,value , onChange ,errorType}) {
    const [showPassword, setShowPassword] = useState(!icon);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}  >
      <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel error={errorType} helperText="Incorrect entry." htmlFor={lable}>{lable}</InputLabel>
          <OutlinedInput
            id={lable}
            helperText="Incorrect entry."
         error={errorType}
            type={showPassword ? 'text' : 'password'}
            value={value} onChange={onChange}
         endAdornment={
            icon && <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
          }
        label="password"
      />
     
        </FormControl>
    </Box>
  );
}
