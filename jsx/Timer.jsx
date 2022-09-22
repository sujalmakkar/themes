import React ,{useState,useEffect} from 'react'


class TimerApp extends React.Component {
    render(){
        return(
            <div>
                This is a Timer App
                <Clock/>
            </div>
        )
    }
}

function Clock(){

    const [Time,setTime] = useState('')
    const [stopWatchTime,setstopWatchTime] = useState('')

    // useEffect(()=>{

    //     setInterval(()=>{
    //         setTime(Date.now())
    //     },0)
        
    // })

    function start(){
        var started = Date.now()

        setInterval(()=>{
            setstopWatchTime(Date.now()-started)
        },0)
    }

    return(
        <div className="current-time-clock">
            <button onClick={start}>start</button>
            <div>{stopWatchTime}</div>
        </div>
    )
}



export default TimerApp