import React, { useState,useContext, useEffect } from "react";
import { AccountContext } from "../handleConfig/fetchdata";
import { useNavigate,Link } from "react-router-dom";
import '../Account/Login.css'
export default function Login(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const userAccount=useContext(AccountContext)
    const navigate=useNavigate();
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        // Find user login info
        const userData = userAccount.find((user) => user.userName === uname.value);
        // Compare user info
        if (userData) {
        if (userData.password !== pass.value) {
            setErrorMessages({ name: "pass", message: errors.pass });
        } else {
            setIsSubmitted(true);
        }
        } else {
        setErrorMessages({ name: "uname", message: errors.uname });
        }
        // console.log({uname,pass})
  };
  useEffect(()=>{
    if(isSubmitted===true){
        userAccount.find((user) => {
            var { uname, pass } = document.forms[0];
                if(user.userName === uname.value){
                    localStorage.setItem('userId',user.id)
                    navigate(`/home`)
               }
        })
    }
  })
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
    );
    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Tên đăng nhập </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Mật khẩu </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <Link to='/register'>Chưa có tài khoản? Đăng kí ngay</Link>
        </div>
      );
    return(
        <div className="app">
            <div className="login-form">
                <div className="title">Đăng nhập</div>
                {
                    renderForm
                }
            </div>
        </div>
    )
}