import React, { useState, useContext } from 'react';
import {useNavigate, Link } from "react-router-dom";
import "../css/Signin.css";

import Backend from '../services/Backend';

function Signin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

// mnt je connect le userdata avec le user contxt et navigate

// const { setUserData } = useContext(UserContext);
const navigate = useNavigate();

const submit = async(e) => {
  try {
    e.preventDefault();
      if ( email && password ){
        const loginUser = {email, password};
      const loginRes = await Backend.loginUser(loginUser)
      setError('Succefful signin')
      // setUserData({
      //   token: loginRes.data.token,
        // user: loginRes.data.user,
      // });
      localStorage.setItem("auth-token", loginRes.data.token);
      let intervalNav = setInterval(() => {
        navigate("/")
        clearInterval(intervalNav)
    }, 3000)
}
else
setError("Not all fields have been intered!")
} catch (err) {
err.response.data.msg && setError(err.response.data.msg);
}
};


  return (
    <div className="signin-card">
    <img className='signin-img' src={window.location.origin + '/doSome.png'} alt='Sign In'></img>
    <div className="signin-card2">
        <div className='signin-Title'>Login</div>
        <div className='signin-Text'>Those who educate children well<br></br> are more to be honored than they who produce them.<br></br></div>
        <form className="signin-form" onSubmit={submit} >
        {/* {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )} */}
            <input className="signin-Input" type="String" id="register-email" name="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}></input>
            <input className="signin-Input" type="password" id="register-password" name="password" placeholder='********' onChange={(e) => setPassword(e.target.value)}></input>
        </form>
        <div className='signin-ligne'>
                <div className='signin-join-Now' type='submit'>Join Now</div>
                <div className='singn-register-block'>Don't have an account? <br></br><Link className='sign-register-link' to={"/Register"}>Please Register </Link> </div>
            </div>
    </div>
</div>
  )
}

export default Signin