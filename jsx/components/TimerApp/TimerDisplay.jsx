import React,{useEffect,useState} from 'react'

const song = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3')

export default function TimerDisplay(props){
    const [timeinformat,settimeinformat] = useState({seconds:'00',minutes:'00',hours:'00'})
    const [timerStatus,settimerStatus] = useState({started:false,initialized:false})
    const [stopAlarm,setstopAlarm] = useState(false)
    const [timerInfo,settimerInfo] = useState({taskName:''})
    const [timerInitialized,settimerInitialized] = useState('')
    const [timeSet,settimeSet] = useState(0)
    const [timeLeft,settimeLeft] = useState(0)
    const [Percent,setPercent] = useState(0)


    useEffect(()=>{
      
        var endTime = Date.now() + timeLeft;

        var remainingTimeInMillliSeconds = 0 ,remainingTime = 0 ,minutes = 0 ,hours = 0,seconds = 0 ,secondstext = '' ,minutestext = ''
        if(timerStatus.started){
        
            if(timeLeft < 1){
                alarm()
            } 
            var intervalID = setInterval(()=>{
                remainingTimeInMillliSeconds = (endTime - Date.now())
                remainingTime = remainingTimeInMillliSeconds.toString().slice(0,-3)

                minutes = Math.trunc(remainingTime/60)
                hours = Math.trunc(minutes/60)
                seconds = remainingTime > 60 ? Math.trunc(remainingTime % 60) : remainingTime
                settimeLeft(remainingTimeInMillliSeconds)

                var percent = (((timeSet - remainingTimeInMillliSeconds+1000)/timeSet)*100)


                setPercent(percent)

                $('.timer-display-background-width').css('width',percent+'%')
                
                secondstext = (('0'+seconds)).slice(-2)
                minutestext = ('0'+(Math.trunc(minutes-(Math.trunc(hours)*60)))).slice(-2)
                settimeinformat({seconds:secondstext,minutes:minutestext,hours:hours})
                if(remainingTime < 1){
         
                    alarm()
                } 
            },150)            
        }
        return () => clearInterval(intervalID);
    },[timerStatus])

    useEffect(()=>{
        settimeinformat(props.time) 
        var totalSeconds = parseInt((parseInt(props.time.hours)*3600)+parseInt(props.time.minutes)*60+parseInt(props.time.seconds)+'000')
        settimeSet(totalSeconds)
        settimeLeft(totalSeconds)
        settimerInfo({taskName:props.name})
    },[props.time,props.name])

    function start(){

        if(timeSet>0){
            if(timerInitialized.length > 1){''}else{
                const currentDate = new Date();
    
                const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        
                var time = (currentDate.getHours() + ':' + currentDate.getMinutes() + ' ' + currentDate.toLocaleDateString('en-us', options) )
                settimerInitialized(time)
            } 
            settimerStatus({started:true,initialized:true})
            props.disableInput(false)
        }
    }
    function pause(){
        settimerStatus({started:false,initialized:true})
    }
    function alarm(){
        settimerStatus({started:false,initialized:false})
        settimeLeft(0)
        settimeinformat({hours:'00',minutes:'00',seconds:'00'})
        playsong()
        setstopAlarm(true)
        // const fetch = require('node-fetch');

        // const url = 'https://anonmyous-mail-sender.p.rapidapi.com/send';

        // const options = {
        // method: 'POST',
        // headers: {
        //     'content-type': 'application/json',
        //     'X-RapidAPI-Key': '7349c17b6cmsh86192b0018ab7fep121bf1jsndd4aaf1a450b',
        //     'X-RapidAPI-Host': 'anonmyous-mail-sender.p.rapidapi.com'
        // },
        // body: '{"to":"sujalmakkar1111@gmail.com","subject":"good new is its working","text":"bad news is you wasted a day when there was no need"}'
        // };

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.error('error:' + err));
    }
    function playsong(){
        song.play()
    }

    function pausesong(){
        song.pause()
        song.currentTime = 0;
    }
    
    function reset(){
        
        settimeLeft(0)
        settimeSet(0)
        settimeinformat({hours:'00',minutes:'00',seconds:'00'})
        settimerStatus({started:false,initialized:false})
        pausesong()
        setstopAlarm(false)
        $('.timer-display-background-width').css('width','0%')
        settimerInitialized('')
        props.disableInput(true)

    }

    function save(){
        props.timerLogs({taskName:timerInfo.taskName,set:(timeSet.toString().slice(0,-3)),initialized:timerInitialized})
        reset()
    }


    return(

        <div className='timer'>
        <TimerName name={timerInfo.taskName}/>
        <div className='timer-display'>
            <div className="timer-display-background-width"></div>
                <div className="time">
                    <div className="time-number">{timeinformat.hours}</div>
                    <div className="time-text">Hours</div>
                </div>
                <div className="time-break">:</div>
                <div className="time">
                    <div className="time-number">{timeinformat.minutes}</div>
                    <div className="time-text">Minutes</div>
                </div>
                <div className="time-break">:</div>
                <div className="time">
                    <div className="time-number">{timeinformat.seconds}</div>
                    <div className="time-text">Seconds</div>
                </div>
        </div>
        <div className='timer-controls'>{
            timerStatus.initialized && !timerStatus.started ?
            <React.Fragment>
                <button type="button" onClick={start}>resume</button>
                <button type="button" onClick={reset}>reset</button>
            </React.Fragment> : timerStatus.started && timerStatus.initialized ?
                    <React.Fragment>
                            <button type="button" onClick={pause}>pause</button>
                            <button type="button" onClick={reset}>reset</button>
                    </React.Fragment> : stopAlarm==true ?
                                        <React.Fragment>
                                            <button type="button" onClick={save}>stop</button>
                                        </React.Fragment> :
                                                <React.Fragment>
                                                    <button type="button" className={timeSet>0 ? 'start-button active' : 'start-button'} onClick={start}>start</button>
                                                </React.Fragment> 
        }
        </div>


        </div>
    )
}

function TimerName(props){
        return(
            <div className='timer-name'>{props.name?props.name:'untitled'}</div>
        )
}