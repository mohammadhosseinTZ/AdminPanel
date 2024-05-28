import * as React from "react";

import { useSelector } from "react-redux";
import FilterDashboard from "../../component/FilterDashboard";
import {  useLocation, useNavigate } from "react-router-dom";

import style from "./style.module.css";
import Sales from "./Sales";
import Raiting from "./Raiting";
import Header from "../../layout/dashboardNav/Header";
import { LightChecking, PathContext } from "../../App";
import useCustomEffect from "../../actions/useCustomEffect";



export default function Products({onClick ,onLogout}) {
  const navigate = useNavigate();
  const [authored, setIsAuthored] = React.useState(false);
  const products = useSelector((state) => state.products.products);

  const [newFilterCategory, setNewFilterCategory] = React.useState("");

  const lightChecking = React.useContext(LightChecking)

useCustomEffect("Products")

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

  return (
    <Header onClickLight ={onClick} onLogoutHeader={onLogout}>

      {authored && (
        <>
          <table className={lightChecking?style.containerTableBlack:style.containerTable}>
            <tr>
              <th>id</th>
              <th>Product</th>
              <th>Sales number</th>
              <th>Satisfaction</th>
              <th>Profit</th>
              <th >
                <FilterDashboard onFilter={(e) => setNewFilterCategory(e)} />
              </th>
            </tr>
            {products.map((product, myIndex) => {
              if (newFilterCategory !== "") {
                if (product.category === newFilterCategory) {
                  return (
                    <tr>
                    <td>{product.id}</td>
                    <td>
                      <span>{product.name}</span>
                      <div style={{ width: 22, height: 22 }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          alt={product.name}
                          src={product.image}
                        />
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Sales
                        num={product.id * 20}
                        numRemaining={product.numRemaining}
                      />
                    </td>
                    <td>
                      <Raiting />
                    </td>
                    <td>{product.price}00 $</td>
                    <td>{product.category}</td>
                  </tr>
                  );
                }
              } else {
                return (
                  <tr>
                    <td>{product.id}</td>
                    <td>
                      <span>{product.name}</span>
                      <div style={{ width: 22, height: 22 }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          alt={product.name}
                          src={product.image}
                        />
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Sales
                        num={product.id * 20}
                        numRemaining={product.numRemaining}
                      />
                    </td>
                    <td>
                      <Raiting />
                    </td>
                    <td>{product.price}00 $</td>
                    <td>{product.category}</td>
                  </tr>
                );
              }
            })}
          </table>
        </>
      )}
    </Header>
  );
}
