import { Button, createTheme, Slider, ThemeProvider } from "@mui/material";
import React from "react";
import { LightChecking } from "../../App";
import style from "./styleProgress.module.css"
export default function Table() {
  const liStyle ={
    padding: 10, textAlign: "end", marginBottom: 10 
  }
  const lightChecking = React.useContext(LightChecking)
  const newTheme = createTheme({ palette: { mode:lightChecking? "dark":"light" } });
  return (
    <ThemeProvider theme={newTheme} >
      <div style={{ padding: 10 }} className={lightChecking ? style.saleCityBlack:style.selCity}>
        <span style={{ padding: 20, fontWeight: "bold"  }}>Sales - Cities</span>
        <ul style={{ listStyle: "none", padding: 10, margin: 0 }}>
          <li style={liStyle}>
            60,000$ - Tehran
            <br />
            <Slider value={50} size="small" disabled />
          </li>
          <li style={liStyle}>
            30,000$ - Ahvaz
            <br />
            <Slider size="small" disabled value={20} />
          </li>
          <li style={liStyle}>
            30,000$ - Tabriz
            <br />
            <Slider size="small" disabled value={10} />
          </li>
          <li style={liStyle}>
            10,000$ - Yazd
            <br />
            <Slider size="small" disabled value={5} />
          </li>
          <li style={liStyle}>
            10,000$ - Qom
            <br />
            <Slider size="small" disabled value={5} />
          </li>
          <li style={{ marginTop: "60px", textAlign: "center" }}>
            <Button>next</Button>
          </li>
        </ul>
      </div>
      </ThemeProvider>
  );
}
