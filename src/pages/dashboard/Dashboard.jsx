import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../layout/dashboardNav/Header";
import Progress from "./Progress";
import TableDashboard from "./TableDashboard";

import useCustomEffect from "../../actions/useCustomEffect";
import useNavigateUser from "../../actions/navigate";

export default function Dashboard({onClick ,onLogout}) {
  const navigate = useNavigate();
  const [authored, setIsAuthored] = useState(false);
  

  

  useCustomEffect("Dashboard");

  useEffect(() => {
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

  return (
    <Header onClickLight ={onClick}  onLogoutHeader={onLogout}>
      
      {authored && (
        <>
          {" "}
          <Progress />
          <TableDashboard />
        </>
      )}
    </Header>
  );
}
