import React from 'react'
export default function StopWatchLogsDisplay(props){

    return(
        <div className={props.logs.length > 0 ? 'stop-watch-logs' : 'stop-watch-logs block'}>
        <ul>
            {props.logs.length> 0 ? props.logs.map((log,index)=>
            
                    <li className="stop-watch-log" key={index}>

                        <div className="stop-watch-log-name">
                            <div className="stop-watch-log-name-span">
                                {log.taskName.length>0?log.taskName:'untitled'}
                            </div>
                        </div>

                        <div>
                            <span>{log.time?log.time:''}</span>
                            <span>{log.initialized?log.initialized:''}</span>
                        </div>
                    </li>
            
            ) : ''}
        </ul>
        </div>
    )
}