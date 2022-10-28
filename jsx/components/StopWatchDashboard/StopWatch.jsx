import React from 'react'
import StopWatchWorking from './StopWatchWorking'


class StopWatchDashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {logs:[]}
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
    render(){
        return(
            <React.StrictMode>
            <div id="StopWatchDashboard">
                <div className="stop-watch-flex">
                    <StopWatchWorking addLog = {this.addLog}/>
                </div>
            </div>
            </React.StrictMode>
        )
    }
}




export default StopWatchDashboard