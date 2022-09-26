import React,{ useState} from 'react'
import TimerForm from './TimerForm'
import TimerDisplay from './TimerDisplay'

export default function Timer(props){

    const [time,setTime] = useState({seconds:'00',minutes:'00',hours:'00'})
    const [taskName,settaskName] = useState('')

    function setTimer(e){
        setTime(e)
    }
    function setName(e){
        settaskName(e)
    }
    function timerLogs(e){
        props.addLog(e)
    }

    return (
        <React.Fragment>
        <h1>This is a Timer</h1>
        <TimerDisplay time={time} name={taskName} timerLogs={timerLogs}/>
        <TimerForm setTimer={setTimer} setName={setName}  />
        </React.Fragment>
    )
}




