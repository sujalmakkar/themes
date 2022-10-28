import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPageForm from './LoginPageForm'


class LoginPage extends React.Component{
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

function LoginPageForm(props){
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
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("LoginContent"));
if(root){
    root.render(<LoginPage/>)
}
