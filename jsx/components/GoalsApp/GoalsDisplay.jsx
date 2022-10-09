import React,{useEffect, useState} from 'react'

export default function GoalsDisplay(props){
    return(
        <div className='goals-display'>
            {props.goals.map(e=><Goal key={e.id} number={props.number} type={props.type} text={e.text} done={e.done} id={e.id} doneStateChange={props.doneStateChange}/>)}
        </div>
    )
}

function Goal(props){
    return(
        
            !props.done? 
                <div className='goal'>
                <span className='goal-name'>{props.text}</span>
                <span className="doneIndicator doneIndicator-done" title="mark as done" data-number={props.number} data-type={props.type} data-text={props.text} data-id={props.id} onClick={props.doneStateChange}>&#10003;</span> 
                </div>
            :
            <div className='goal'>
                <span className='goal-name'>{props.text}</span>

                <span className="doneIndicator doneIndicator-done" title="mark as not done" data-number={props.number} data-type={props.type} data-text={props.text} data-id={props.id} onClick={props.doneStateChange}>&#10005;</span> 
            </div>
        
    )
}