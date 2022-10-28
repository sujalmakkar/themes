import React from 'react'
import Timer from './Timer'
import TimerLogsDisplay from './TimerLogsDisplay'
class TimerApp extends React.Component{
        constructor(props){
            super(props)
            this.state = {logs:[]}
            this.addLog = this.addLog.bind(this)
        }
        componentDidMount(){
            fetch('./getData/timer/logs',{
                method:'GET',
                headers:{'content-Type':'application/json'},
            }).then(a=>a.json())
            .then(a=>{
                a.reverse()
                this.setState({logs:a})
            })
            .catch(err=>console.log(err))
        }
        addLog(info){
            var logscopy = this.state.logs
            logscopy.unshift(info)
            this.setState({logs:logscopy})
            fetch('./postData/timer/log',{
                method:'POST',
                headers:{'content-Type':'application/json'},
                body:JSON.stringify(info)
            }).then(a=>a.json())
            .then(a=>console.log(a))
            .catch(err=>console.log(err))
        }
        render(){
            return(
                <React.Fragment>
                <div id="TimerApp" className='app'>
                    <div className="app-heading">
                        <div>Timer</div>
                    </div>
                    <div className='timers-container'>
                        <Timer addLog={this.addLog}/>
                    </div>
                    <TimerLogsDisplay logs={this.state.logs}/>
                </div>
                </React.Fragment>
            )
        }
}

export default TimerApp
