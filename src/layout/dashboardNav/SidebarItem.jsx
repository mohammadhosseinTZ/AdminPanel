import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LightChecking, PathContext } from "../../App";
import { theme } from "../../theme";
import { ThemeProvider } from "@mui/material";

export default function SidebarItem({ name, icon, address, disable }) {
  const pathContext = useContext(PathContext);
  const { dispatch } = useContext(PathContext);

  const location = useLocation();
  const lightChecking = React.useContext(LightChecking);

  // lightChecking?theme.palette.primary.navDark :theme.palette.primary.navLight

  return (
    <ThemeProvider theme={theme}>
      <li
        style={{
          textDecoration: "none",
          display: "flex",
          gap: 10,
        }}
      >
        <Link
          to={address}
          style={{
            color:
              location.pathname === address
                ? theme.palette.primary.main
                : lightChecking
                ? theme.palette.primary.navDark
                : theme.palette.primary.navLight,
            textDecoration: "none",
            display: "flex",
            gap: 10,
            pointerEvents: disable && "none",
          }}
        >
          {icon}
          {name}
        </Link>
      </li>
    </ThemeProvider>
  );
}
