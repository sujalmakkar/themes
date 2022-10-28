import React,{ useState} from 'react'
import TimerForm from './TimerForm'
import TimerDisplay from './TimerDisplay'

export default function Timer(props){

    const [time,setTime] = useState({seconds:'00',minutes:'00',hours:'00'})
    const [taskName,settaskName] = useState('')
    const [input,setinput] = useState(true)

    function setTimer(e){
        setTime(e)
    }
    function setName(e){
        settaskName(e)
    }
    function timerLogs(e){
        e.timeset = time.hours+':'+time.minutes+':'+time.seconds
        props.addLog(e)
    }
    function disableInput(e){
        setinput(e)
    }

    return (
        <React.Fragment>
            <TimerForm setTimer={setTimer} setName={setName} display={input} />
            <TimerDisplay time={time} name={taskName} timerLogs={timerLogs} disableInput={disableInput}/>
        </React.Fragment>
    )
}




