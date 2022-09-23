import React ,{useState,useEffect} from 'react'


class TimerApp extends React.Component {
    render(){
        return(
            <div>
                This is a Timer App
                <StopWatch/>
            </div>
        )
    }
}

function StopWatch(){

    const [stopWatchLog,setstopWatchLog] = useState([])
    const [stopWatchTime,setstopWatchTime] = useState({timepassed:0,milliseconds:0,seconds:0,minutes:0,hours:0,days:0,months:0,years:0})
    const [stopWatchInfo,setstopWatchInfo] = useState({started:false})
    const [stopWatchStartTime,setstopWatchStartTime] = useState(0)
    const [stopWatchPauseTime,setstopWatchPauseTime] = useState(0)


    useEffect(() => {
        var started = Date.now()

        if(stopWatchStartTime==0){
            setstopWatchStartTime(started)
        }

        var totalsecondspassed = 0,timepassedstring = 0,timepassed = 0,milliseconds = 0,seconds = 0,minutes = 0,hours = 0,days = 0,months= 0,years = 0 
        var secondstext = '', minutestext ='' , hourstext = '', daystext = '' , monthstext = '', yearstext = '' ;
        if(stopWatchInfo.started){
        var intervalID = setInterval(()=>{
                    timepassed = Date.now()-stopWatchStartTime - stopWatchPauseTime

                    console.log(stopWatchStartTime,stopWatchPauseTime)

                    
                    timepassedstring = timepassed.toString()
                    
                    milliseconds = timepassedstring.slice(-3,-2); 
        
                    totalsecondspassed = timepassedstring.slice(0,-3)
        
                    seconds = totalsecondspassed%60
                    minutes = totalsecondspassed/60
                    hours = minutes/60
                    days = hours/24
                    months = days/30
                    years = months/12
        
                    secondstext = (('0'+seconds)).slice(-2)
                    minutestext = ('0'+(Math.trunc(minutes-(Math.trunc(hours)*60)))).slice(-2)
                    hourstext = ('0'+(Math.trunc(hours-(Math.trunc(days)*24)))).slice(-2)
                    daystext = ('0'+(Math.trunc(days-(Math.trunc(months)*24)))).slice(-2)
                    monthstext = ('0'+(Math.trunc(months-(Math.trunc(years)*24)))).slice(-2)
                    yearstext = ('0'+(Math.trunc(months/12))).slice(-2)
                
                    setstopWatchTime({timepassed:timepassed,milliseconds:milliseconds,seconds:secondstext,minutes:minutestext,hours:hourstext,days:daystext,months:monthstext,years:yearstext});
        },100)
        }
        return () => clearInterval(intervalID);
    
    }, [stopWatchInfo,stopWatchStartTime]);


    useEffect(() => {

        if(!stopWatchInfo.started){
            var sleeptimestarted = Date.now(); 
        var intervalID = setInterval(()=>{
            var totalsleeptime = Date.now() - sleeptimestarted 
            setstopWatchPauseTime(stopWatchPauseTime+totalsleeptime)
        },100)
        }
        return () => clearInterval(intervalID)
    
    }, [stopWatchInfo]);




    function start(){
        setstopWatchInfo({started:true})

    }

    function pause(){
        if(stopWatchInfo.started){
            setstopWatchInfo({started:false})
        }
    }
    function reset(){
        if(stopWatchInfo.started){
            setstopWatchInfo({started:false})
            setstopWatchStartTime(0)
            setstopWatchPauseTime(0)
            var logsCopy = stopWatchLog
            logsCopy.push(stopWatchTime)
            setstopWatchLog(logsCopy)
            console.log(logsCopy)
            setstopWatchTime({timepassed:0,milliseconds:0,seconds:0,minutes:0,hours:0,days:0,months:0,years:0})
        }
    }

    return(
        <div className="stop-watch">

            {stopWatchInfo.started
            ?
            <React.Fragment>
                <button onClick={pause}>pause</button>
                <button onClick={reset}>reset</button>
            </React.Fragment>
             :
             <button onClick={start}>start</button>}

            <div className='stop-watch-time-display'>

                {stopWatchTime.hours > 0 + ':' ? stopWatchTime.hours : ''}  {stopWatchTime.minutes > 0 ? stopWatchTime.minutes : '00'} : {stopWatchTime.seconds > 0 ? stopWatchTime.seconds : '00'} . {stopWatchTime.milliseconds || 0}
               
            </div>
            <div className='stop-watch-time-logs'>
            <ul>
                {stopWatchLog.map((log,index)=>
                  
                        <li key={index}> {log.days?log.days+':':''}{log.hours?log.hours+':':''}{log.minutes?log.minutes+':':''}{log.seconds?log.seconds+'.':''}{log.seconds?log.milliseconds:''}</li>
                
                )}
            </ul>
            </div>
        </div>
    )
}


function Timer(){

}



export default TimerApp