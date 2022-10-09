import React from "react";

export default function LoginPageForm(props) {
    function LoginUser(e) {
        e.preventDefault();
        if (e.target.passwordinput.value.length >= 8) {
            var userInfo = {
                email: e.target.emailinput.value,
                password: e.target.passwordinput.value
            };
            props.loginUser(userInfo);
        } else {
            alert('password should be atleast 8 digits');
        }
    }
    return React.createElement(
        'div',
        { className: 'login-page-form' },
        React.createElement(
            'form',
            { onSubmit: LoginUser },
            React.createElement('input', { type: 'email', placeholder: 'enter your email', name: 'emailinput' }),
            React.createElement('input', { type: 'password', placeholder: 'enter your password', name: 'passwordinput' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Login!'
            )
        )
    );
}