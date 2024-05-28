import React, { createContext, useReducer, useState } from "react";

import { HashRouter, Route, Routes, useNavigate ,Navigate} from "react-router-dom";
import Login from "./pages/login/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Charts from "./pages/charts/Charts";
import Orders from "./pages/orders/Orders";
import Signup from "./pages/signup/Signup";
import { initialStatePath, reducer } from "./reducer";
import { ThemeProvider } from "@mui/material";
import {theme} from "./theme";


export const PathContext = createContext(null)
export const LightChecking = createContext(null)

export default function App() {
  const [navigate , seNavigate] = useState(false)
  const [state , dispatch] = useReducer(reducer , initialStatePath);
  const[lightChecking , setLightChecking] = useState(false)
  const handleLight =()=>{
    setLightChecking(!lightChecking)
  }

  const handleLogout =()=>{
    setLightChecking(false)
    localStorage.removeItem("token")
    localStorage.removeItem("myTokenValidation")
     localStorage.removeItem("myToken")
    //  window. location. reload()
    seNavigate(!navigate)
    {navigate && <Navigate to="/" replace />}
    }
  

  return (
 <ThemeProvider theme={theme}>
      <HashRouter base="/">
      <LightChecking.Provider value={lightChecking}>
      <PathContext.Provider value={{...state , dispatch}}>
       
          <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard onClick={handleLight} onLogout={handleLogout}/>} />
            <Route path="/dashboard/products" element={<Products  onClick={handleLight} onLogout={handleLogout}/>} />
            <Route path="/dashboard/users" element={<Users onClick={handleLight} onLogout={handleLogout}/>} />
            <Route path="/dashboard/charts" element={<Charts />} />
            <Route path="/dashboard/orders" element={<Orders onClick={handleLight} onLogout={handleLogout}/>} />
            <Route path="/dashboard/signup" element={<Signup />} />
          </Routes>
          </PathContext.Provider>
          </LightChecking.Provider>
        <ToastContainer />
      </HashRouter>
      </ThemeProvider>
 
  );
}
