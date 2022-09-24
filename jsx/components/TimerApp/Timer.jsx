import React,{useEffect, useState} from 'react'

export default function Timer(){

    const [time,setTime] = useState({seconds:'00',minutes:'00',hours:'00'})

    function setTimer(e){
        setTime(e)
    }

    return (
        <React.Fragment>

        <h1>This is a Timer</h1>
        <TimerDisplay time={time}/>
        <TimerForm setTimer={setTimer} />
        </React.Fragment>
    )
}


function TimerDisplay(props){
    const [timeLeft,settimeLeft] = useState(0)
    const [timeinformat,settimeinformat] = useState({seconds:'00',minutes:'00',hours:'00'})

    useEffect(()=>{
        settimeinformat(props.time) 
    })


    return(
        <div className="timer-display">
            <span>{timeinformat.hours>1?timeinformat.hours+':':''}</span>
            <span>{timeinformat.minutes+':'}</span>
            <span>{timeinformat.seconds}</span>

        </div>
    )
}



function TimerForm(props){

    const[Seconds,setSeconds] = useState('00')
    const[Minutes,setMinutes] = useState('00')
    const[Hours,setHours] = useState('00')

    useEffect(()=>{
        var TimeSubmitted={
            hours:Hours,
            minutes:Minutes,
            seconds:Seconds
        }
        props.setTimer(TimeSubmitted)
    },[Seconds,Minutes,Hours])
    function handleSeconds(e){
        e.target.value=e.target.value.slice(0,2)
        var seconds = e.target.value.length>1?e.target.value:'0'+e.target.value
        setSeconds(seconds)
    }
    function handleMinutes(e){
        e.target.value=e.target.value.slice(0,2)
        var minutes = e.target.value.length>1?e.target.value:'0'+e.target.value
        setMinutes(minutes)
    }
    function handleHours(e){
        e.target.value=e.target.value.slice(0,2)
        var hours = e.target.value.length>1?e.target.value:'0'+e.target.value
        setHours(hours)
    }

    return(
        <form>
            <input type="number" name="hours" onInput={handleHours} placeholder='HH'/>
            <input type="number" name="minutes" onInput={handleMinutes} placeholder='MM'/>
            <input type="number" name="seconds" onInput={handleSeconds} placeholder='SS'/>
        </form>
    )


}