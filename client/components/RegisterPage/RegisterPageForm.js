import React, { useState } from "react";

export default function RegisterPageForm(props) {
    function registerUser(e) {
        e.preventDefault();
        if (e.target.passwordinput.value === e.target.passwordinputagain.value) {
            var userInfo = {
                username: e.target.usernameinput.value,
                password: e.target.passwordinput.value,
                passwordagain: e.target.passwordinputagain.value
            };
            props.registerUser(userInfo);
        } else {
            alert('password does not match');
        }
    }
    return React.createElement(
        'div',
        { className: 'register-page-form' },
        React.createElement(
            'form',
            { onSubmit: registerUser },
            React.createElement('input', { type: 'text', placeholder: 'enter your username', name: 'usernameinput' }),
            React.createElement('input', { type: 'password', placeholder: 'enter your password', name: 'passwordinput' }),
            React.createElement('input', { type: 'password', placeholder: 'confirm your password', name: 'passwordinputagain' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Register!'
            )
        )
    );
}