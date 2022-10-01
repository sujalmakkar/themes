import React from 'react'
import RegisterPageForm from './RegisterPageForm'

export default class RegisterPage extends React.Component{
    constructor(props){
        super(props)
        this.registerUser = this.registerUser.bind(this)
    }
    registerUser(e){
        e.time = (new Date()).toString();
        e.utctime = (new Date()).toUTCString()
        console.table(e)
        fetch('http://localhost:3000/registeruser',{
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(e)
        }).then(res=>res.json()).then(result=>{
            alert(result)
        })
    }
    render(){
        return(
            <div id='RegisterPage'>
                <RegisterPageForm registerUser={this.registerUser}/>
            </div>
        )
    }
}