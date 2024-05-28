import React, { useState } from "react";
import LoginInput from "../../component/LoginInput";

import { Bounce, toast } from "react-toastify";
import {Link, useLocation, useNavigate } from "react-router-dom";
import style from "./loginStyle.module.css";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { usernameParam } from "../../store/slices/usernameLogged";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [loading, setLoading] =useState(false);

  const navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setUserErr(false);
    
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassErr(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    if (username === "") {
      setUserErr(true);
      setLoading(false)
      return;
    }
    if (password === "") {
      setPassErr(true);
      setLoading(false)
      return;
    }
    if(localStorage.myToken){
      if(username === JSON.parse(localStorage.getItem("myToken")).username && password ===JSON.parse(localStorage.getItem("myToken")).password){
        toast.success("Logged in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        localStorage.setItem("myTokenValidation" , true)
        navigate("/dashboard")
        return 
      }else{
        toast.error("invalid username-password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,

        });
        return
      }
    }
    
   
    fetch("https://www.melivecode.com/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresIn: 6000000000,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok" || localStorage.myTokenValidation) {
          if(localStorage.myTokenValidation)return
          toast.success(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          localStorage.setItem("token", res.accessToken);
          setLoading(false)
          dispatch(usernameParam(username))
          navigate("/dashboard");
        } else {
          toast.error(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setLoading(false)
        }
      });
  };

  const dispatch = useDispatch()
  return (
    <div className={style.container}>
     
      <form onSubmit={handleSubmit}>
        <LoginInput
          lable={"username"}
          icon={false}
          value={username}
          onChange={handleUsername}
          errorType={userErr}
        />

        <LoginInput
          lable={"password"}
          icon={true}
          value={password}
          onChange={handlePassword}
          errorType={passErr}
        />
      
       
        <LoadingButton
          size="small"
          type="submit"
       
     
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Login</span>
        </LoadingButton>
      </form>
      <span style={{ margin: "5%" }}>
        Do Not Have Any Account?{" "}
        <span style={{ color: "#68ffc7", cursor: "pointer" }}><Link to={"/dashboard/signup"}>Sign Up</Link></span>
      </span>
    </div>
  );
}
