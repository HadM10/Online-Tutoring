import React from 'react';
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
    return (
        <section className="login-card">
            <img className='login-img-home' src={window.location.origin + '/homeLoginImgpng.png'} alt='video call tutorial'></img>
            <div className="login-card2">
                <div className='login-Title'>Join your live class with your instructor via video call</div>
                <div className='login-Text'>Those who educate children well are more to be<br></br> honored than they who produce them.<br></br>for these only gave them life.</div>
                <form className="form" >
                    <input className="login-Input" type="email" id="login-email" name="email" placeholder='Enter your email'></input>
                    <input className="login-Input" type="password" id="login-password" name="password" placeholder='********' ></input>
                </form>
                <div className='ligne'>
                        <div className='join-Now' type='submit'>Join Now</div>
                        <div className='register-block'>Don't have an account? <br></br><Link className='register-link' to={"/Register"}>Please Register </Link> </div>
                    </div>
            </div>
        </section>

    )

}
export default Login