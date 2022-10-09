import React from 'react';
import RegisterPageForm from './RegisterPageForm';

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
    }
    registerUser(e) {
        fetch('http://localhost:3000/registeruser', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(e)
        }).then(res => res.json()).then(result => {
            console.log(result);
        });
    }
    render() {
        return React.createElement(
            'div',
            { id: 'RegisterPage' },
            React.createElement(RegisterPageForm, { registerUser: this.registerUser })
        );
    }
}