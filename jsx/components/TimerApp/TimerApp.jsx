import React from 'react'
import Timer from './Timer'
import TimerLogsDisplay from './TimerLogsDisplay'
class TimerApp extends React.Component{
        constructor(props){
            super(props)
            this.state = {logs:[]}
            this.addLog = this.addLog.bind(this)
        }
        addLog(info){
            var logscopy = this.state.logs
            logscopy.push(info)
            this.setState({logs:logscopy})
        }
        render(){
            return(
                <div id="TimerApp">
                    <Timer addLog={this.addLog}/>
                    <Timer addLog={this.addLog}/>
                    <TimerLogsDisplay logs={this.state.logs}/>
                </div>
            )
        }
}

export default TimerApp
