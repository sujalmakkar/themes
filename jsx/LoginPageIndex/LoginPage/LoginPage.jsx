"use strict";

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import LoginPageForm from './LoginPageForm'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
  }
  loginUser(e) {
    var message = document.getElementById('message');
    fetch('./loginuser', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(e)
    }).then(res => res.json()).then(result => {
        if(result.status===200){
            window.location.href = '/app'
        }else{
            setTimeout(()=>{
                message.textContent = '';
            },3000)
            message.textContent = result.message;
        }
    });
    
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "LoginPage"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Login-Heading"
    }, "Welcome back!", /*#__PURE__*/React.createElement("div", {
      className: "small"
    }, "Please enter your details.")), /*#__PURE__*/React.createElement(LoginPageForm, {
      loginUser: this.loginUser
    }));
  }
}
function LoginPageForm(props) {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "login-page-form"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: LoginUser
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "enter your email",
    name: "emailinput"
  }), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "enter your password",
    name: "passwordinput"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Log In!")), /*#__PURE__*/React.createElement("div", {
    id: "message"
  }), /*#__PURE__*/React.createElement("div", {
    className: "signup-link"
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "/register"
  }, "Sign Up!")));
}
const root = ReactDOM.createRoot(document.getElementById("LoginContent"));
if (root) {
  root.render( /*#__PURE__*/React.createElement(LoginPage, null));
}