import React from "react";

export default function RegisterPageForm(props){
    function registerUser(e){
        e.preventDefault();
        if(e.target.passwordinput.value === e.target.passwordinputagain.value){
            var userInfo = {
                email:e.target.emailinput.value,
                password:e.target.passwordinput.value,
                passwordagain:e.target.passwordinputagain.value
            }
            props.registerUser(userInfo)
        }else{
            alert('password does not match')
        }
    }
    return(
        <div className='register-page-form'>
            <form onSubmit={registerUser}>
            <input type="email" placeholder="enter your email" name="emailinput"/>
            <input type="password" placeholder="enter your password" name="passwordinput"/>
            <input type="password" placeholder="confirm your password" name="passwordinputagain"/>
            <button type="submit">
                Register!
            </button>
            </form>
        </div>
    )
}