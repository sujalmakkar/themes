import React from 'react'
import StopWatchLogsDisplay from './StopWatchDisplay'
import StopWatch from './StopWatch'


class StopWatchApp extends React.Component {
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
            <React.StrictMode>
            <div>
                This is a STOP WATCH App
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatch addLog = {this.addLog}/>
                <StopWatchLogsDisplay stopWatchLogs={this.state.logs}/>
            </div>
            </React.StrictMode>
        )
    }
}




export default StopWatchApp