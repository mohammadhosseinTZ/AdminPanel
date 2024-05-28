import React, { useState } from "react";
import LoginInput from "../../component/LoginInput";
import { LoadingButton } from "@mui/lab";
import { json, useLocation, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Bounce, toast } from "react-toastify";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [cPassErr, setCPassErr] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(username !== "" && password === confirmPassword){
        localStorage.setItem("myToken" ,JSON.stringify({"username":username , "password":password}))
        toast.success("registered", {
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
        navigate("/")
    }else{
        toast.error("not valid", {
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
    }
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setUserErr(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassErr(false);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setCPassErr(false);
  };
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
        <LoginInput
          lable={"confirm password"}
          icon={true}
          value={confirmPassword}
          onChange={handleConfirmPassword}
          errorType={cPassErr}
        />

        <LoadingButton
          size="small"
          type="submit"
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Sign in</span>
        </LoadingButton>
      </form>
    </div>
  );
}
