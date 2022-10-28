import React from 'react'
import StopWatchLogsDisplay from './StopWatchDisplay'
import StopWatch from './StopWatch'


class StopWatchApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {logs:[]}
        this.addLog = this.addLog.bind(this)
    }
    componentDidMount(){
        fetch('./getData/stopwatch/logs',{
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
        fetch('./postData/stopwatch/log',{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(info)
        }).then(a=>a.json())
        .then(a=>console.log(a))
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <React.StrictMode>
            <div id="StopWatchApp" className='app'>
                <div className="app-heading">
                    <div>Stop Watch</div>
                </div>
                <div className="stop-watch-flex">
                    <StopWatch addLog = {this.addLog}/>
                    <StopWatchLogsDisplay logs={this.state.logs}/>
                </div>
            </div>
            </React.StrictMode>
        )
    }
}




export default StopWatchApp