import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./style.module.css";
import OrdersTable from "./OrdersTable";
import RefreshIcon from "@mui/icons-material/Refresh";
import Header from "../../layout/dashboardNav/Header";
import OrdersCard from "./OrdersCard";
import { LightChecking } from "../../App";
import { theme } from "../../theme";
import useCustomEffect from "../../actions/useCustomEffect";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Orders({ onClick, onLogout }) {
  const [authored, setIsAuthored] = React.useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useCustomEffect("Orders");
  const lightChecking = React.useContext(LightChecking);
  React.useEffect(() => {
    fetch("https://www.melivecode.com/api/auth/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok" || localStorage.myTokenValidation) {
          setIsAuthored(true);
        } else {
          navigate("/");
        }
      });
  });
  //style

  return (
    <Header  onClickLight ={onClick}  onLogoutHeader={onLogout}>
      {authored && (
        <div className={style.container}>
          <div style={{ position: "relative" }}>
            <div>
              <Box
                sx={{
                  fontWeight:"bold",
                  color: lightChecking ? "white" : "black",
                  [theme.breakpoints.between("lg", "xl")]: {
                    fontSize: theme.typography.fontSize,
                  },
                  [theme.breakpoints.down("lg")]: {
                    fontSize: theme.typography.sm.fontSize,
                  },
                }}
              >
                Orders :
              </Box>

              <Button
                onClick={() => setStatus("")}
                sx={{
              
                  [theme.breakpoints.down("lg")]: {
                    position: "static",
                    fontSize:5
                  },
                }}
              >
                <RefreshIcon />
              </Button>
            </div>

           <div className={style.cardItem}>
           <OrdersCard
              color={"#c8f6ff"}
              headerText={"New Orders"}
              num={245}
              textBody={"impression - 20%"}
              filter={"New"}
              onFilterCard={(a) => {
                setStatus(a);
              }}
            />

            <OrdersCard
              color={"#ffb1fa"}
              headerText={"Pending Orders"}
              num={123}
              textBody={"impression - 11%"}
              filter={"Pending"}
              onFilterCard={(a) => {
                setStatus(a);
              }}
            />
            <OrdersCard
              color={"#c9ffbb"}
              headerText={"Delivered Orders"}
              num={150}
              textBody={"impression - 18%"}
              filter={"Delivered"}
              onFilterCard={(a) => {
                setStatus(a);
              }}
            />
           </div>
          </div>
          <div>
            <OrdersTable status={status} />
          </div>
        </div>
      )}
    </Header>
  );
}
