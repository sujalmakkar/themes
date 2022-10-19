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
        var today = new Date().toLocaleDateString('en-ca')
        input.max = today
        var splitdate = today.split('-')
        var year = (splitdate[0] - 70)
        var mindate = year+'-'+splitdate[1]+'-'+splitdate[2]
        input.min = mindate
    })
    return(
        <React.Fragment>
        <div id="weeks-to-live-form">
            <form onSubmit={setDob}>
                <input ref={inputref} type="date" name="date" required/>
                <button className="ripple-effect" type="submit">Submit</button>
            </form>
        </div>
        </React.Fragment>
        )
}