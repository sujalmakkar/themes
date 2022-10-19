import React, { useEffect,useState } from 'react'
export default function WeeksToLiveData(props){

    const[hoverdata,sethoverdata] = useState({year:0,week:0})
    const averagelifespan = 73
    const totalweeks= averagelifespan*52

    useEffect(()=>{
        var allweeks = document.getElementsByClassName('week')
        function weeks(){
            for (let i = 0; i < allweeks.length; i++) {
                allweeks[i].classList.remove('lived');
              }
            for(var i = 0; i < props.weeksToLive;i++){
                allweeks[i].classList.add('lived');
                allweeks[props.weeksToLive].classList.add('living')
            }
        }
        weeks()
    },[props.weeksToLive])

    var weekinfocontent = null;
    function weekinfo(e){
        weekinfocontent = e
    }

    function weekinfoposition(e){
            weekinfocontent.classList.remove('hidden')
    }

    function showWeekInfo(e){
        sethoverdata({year:e.target.parentNode.dataset.number,week:e.target.dataset.number})
    }
    return( 
    <React.Fragment>
    <div className='flex'>
    <TimeLineWeeksLeftInfo weeksToLive ={props.weeksToLiveDecimal} weeksToLiveWhole={props.weeksToLive} totalweeks={totalweeks}/>
    <div className="weeks-container padding-30" onMouseMove={weekinfoposition}>
            {Array.from(Array(averagelifespan), (e, i) => {
                return <div className='year' key={i} data-number={i}>
                {Array.from(Array(52), (e, i) => {
                    return <div className="week" key={i+1} data-number={i+1} onMouseOver={showWeekInfo} ></div>
                  })}
                </div>
            })}
    <div className='hovered-week-info' ref={weekinfo}>
        <div className='year-info'> Year: {hoverdata.year} </div>
        <div className='week-info'> Week: {hoverdata.week} </div>
    </div>
    </div>
    <div className='timeline-info-container'></div>
    </div>
    </React.Fragment>

    )
    
}


function TimeLineWeeksLeftInfo(props){
    return(
        <React.Fragment>
            <div className='flex'>
                <div className="info time-line-weeks-left-info padding-20">
                    <div className="weeks-passed padding-10">
                    Weeks Lived : <span className='weeks-lived'>{props.weeksToLive}</span><span>/{props.totalweeks}</span>
                    </div>
                    <div className="weeks-death  padding-10">
                    Death in : <span>{((props.totalweeks - props.weeksToLive).toString()).slice(0,(((props.weeksToLiveWhole).toString()).length)+5)}</span> weeks
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}