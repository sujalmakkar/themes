import React from 'react'
export default function StopWatchLogsDisplay(props){

    return(
        <div className='stop-watch-logs'>
        <ul>
            {props.stopWatchLogs != [] ? props.stopWatchLogs.map((log,index)=>
            
                    <li className="stop-watch-log" key={index}><span>{log.name.length>0?log.name:'untitled'}</span> {log.days?log.days+':':''}{log.hours?log.hours+':':''}{log.minutes?log.minutes+':':'00:'}{log.seconds?log.seconds+'.':'00:'}{log.milliseconds?log.milliseconds:''}</li>
            
            ) : ''}
        </ul>
        </div>
    )
}