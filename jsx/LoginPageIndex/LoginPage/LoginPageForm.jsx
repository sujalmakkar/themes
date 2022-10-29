import React from "react";

export default function LoginPageForm(props){
    function LoginUser(e){
        e.preventDefault();
        if(e.target.passwordinput.value.length>=8){
            var userInfo = {
                email:e.target.emailinput.value,
                password:e.target.passwordinput.value,
            }
            props.loginUser(userInfo)
        }else{
            alert('password should be atleast 8 digits')
        }
    }
    return(
        <div className='login-page-form'>
            <form onSubmit={LoginUser}>
            <input type="email" placeholder="enter your email" name="emailinput"/>
            <input type="password" placeholder="enter your password" name="passwordinput"/>
            <button type="submit">
                Login!
            </button>
            </form>
            <div className="signup-link">Don't have an account? <a href="/register">Sign Up!</a></div>
        </div>
    )
}