import React,{useState} from 'react'

export default function GoalsType(props){
    function changeTimeInterval(e){
        props.changeType(e.target.value)
    }
    return(
        <div className='goals-type'>
            <select className='goals-timeperiod-selector' onChange={changeTimeInterval}>
                <option value="years">Years</option>
                <option value="months">Months</option>
                <option value="weeks">Weeks</option>
            </select>
        </div>
    )
}