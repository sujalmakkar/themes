import React from 'react'
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