import React from 'react'

export default function LogoutButton(){
    function logout(){
        fetch('/logoutuser',{
            method:'POST',
            headers:{'Content-Type':'application/json'}
        })
    }
    return(
        <div className='LogoutButton'>
            <button onClick={logout}>Logout</button>
        </div>
    )
}