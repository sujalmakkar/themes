import React from 'react'

export default function TimerLogsDisplay(props){
    return(
        <div className='timer-logs'>
        <ul>
            {props.logs != [] ? props.logs.map((log,index)=>
            
                    <li className="timer-log" key={index}>
                        <span>{log.taskName.length>0?log.name:'untitled'}</span>
                        {log.set?log.set:''}
                        {log.initialized?log.initialized:''}
                         </li>
            
            ) : ''}
        </ul>
        </div>
    )
}