"use strict";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
  }
  registerUser(e) {
    var message = document.getElementById('message');
    fetch('./registeruser', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(e)
    }).then(res => res.json()).then(result => {
      if (result.status === 200) {
        window.location.href = '/login';
      } else {
        setTimeout(() => {
          message.textContent = '';
        }, 3000);
        message.textContent = result.message;
      }
    });
  }
  render() {
    return (/*#__PURE__*/React.createElement("div", {
        id: "RegisterPage"
      }, /*#__PURE__*/React.createElement("div", {
        className: "Register-Heading"
      }, "Welcome!", /*#__PURE__*/React.createElement("div", {
        className: "small"
      }, "Please enter your details.")), /*#__PURE__*/React.createElement(RegisterPageForm, {
        registerUser: this.registerUser
      }))
    );
  }
}
function RegisterPageForm(props) {
  function registerUser(e) {
    e.preventDefault();
    if (e.target.passwordinput.value === e.target.passwordinputagain.value) {
      var userInfo = {
        email: e.target.emailinput.value,
        password: e.target.passwordinput.value,
        passwordagain: e.target.passwordinputagain.value
      };
      props.registerUser(userInfo);
    } else {
      alert('password does not match');
    }
  }
  return (/*#__PURE__*/React.createElement("div", {
      className: "Register-page-form"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: registerUser
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      placeholder: "enter your email",
      name: "emailinput"
    }), /*#__PURE__*/React.createElement("input", {
      type: "password",
      placeholder: "enter your password",
      name: "passwordinput"
    }), /*#__PURE__*/React.createElement("input", {
      type: "password",
      placeholder: "confirm your password",
      name: "passwordinputagain"
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit"
    }, "Register!")), /*#__PURE__*/React.createElement("div", {
      id: "message"
    }), /*#__PURE__*/React.createElement("div", {
      className: "signup-link"
    }, "Already have an account? ", /*#__PURE__*/React.createElement("a", {
      href: "/login"
    }, "Log In!")))
  );
}
const root = ReactDOM.createRoot(document.getElementById("RegisterContent"));
if (root) {
  root.render( /*#__PURE__*/React.createElement(RegisterPage, null));
}