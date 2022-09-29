import React, { useEffect } from 'react'
export default function WeeksToLiveForm(props){
    function setDob(e){
        e.preventDefault()
        props.setDob(e.target.date.value)
    }
    var input = null;
    function inputref(e){
        input = e
    }
    useEffect(()=>{
        input.max = new Date().toLocaleDateString('en-ca')
    })
    return(
        <form onSubmit={setDob}>
        <input ref={inputref} type="date" name="date"/>
        <button type="submit">Submit</button>
        </form>
        )
}