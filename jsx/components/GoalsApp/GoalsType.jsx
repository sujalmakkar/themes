import React,{useState} from 'react'

export default function GoalsType(props){
    function changeTimeInterval(e){
        props.changeType(e.target.value)
    }
    return(
        <div className='goals-type margin-10' id="type">

            <select className='goals-timeperiod-selector background-main ' onChange={changeTimeInterval}>
                <option value="years" className='option'>Years</option>
                <option value="months" className='option'>Months</option>
                <option value="weeks" className='option'>Weeks</option>
            </select>
        </div>
    )
}