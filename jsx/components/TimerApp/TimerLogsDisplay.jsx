import React from 'react'

export default function TimerLogsDisplay(props){
    return(
        <div className={props.logs.length > 0 ? 'timer-logs' : 'timer-logs block'}>
        {/* <div className="timer-logs-heading">Logs</div> */}
        <ul>
            {props.logs.length> 0 ? props.logs.map((log,index)=>
            
                    <li className="timer-log" key={index}>

                        <div className="timer-log-name">
                            <div className="timer-log-name-span">
                                {log.taskName.length>0?log.taskName:'untitled'}
                            </div>
                        </div>

                        <div>
                            <span>{log.timeset?log.timeset:''}</span>
                            <span>{log.initialized?log.initialized:''}</span>
                        </div>
                    </li>
            
            ) : ''}
        </ul>
        </div>
    )
}