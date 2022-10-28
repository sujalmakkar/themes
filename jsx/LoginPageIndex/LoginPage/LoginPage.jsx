import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPageForm from './LoginPageForm'


export default class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.loginUser = this.loginUser.bind(this)
    }
    loginUser(e){
        fetch('http://localhost:3000/loginuser',{
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(e)
        }).then(res=>res.json()).then(result=>{
            console.log(result)
        })
    }
    render(){
        return(
            <div id='LoginPage'>
                <LoginPageForm loginUser={this.loginUser}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("LoginContent"));
if(root){
    root.render(<RouterApp/>)
}
