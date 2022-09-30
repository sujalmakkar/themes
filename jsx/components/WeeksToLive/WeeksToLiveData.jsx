import React, { useEffect,useState } from 'react'
export default function WeeksToLiveData(props){

    const[hoverdata,sethoverdata] = useState({year:0,week:0})
    const[weekinfocontentposition,setweekInfoContentPosition] = useState({x:0,y:0})

    useEffect(()=>{
        var allweeks = document.getElementsByClassName('week')
        for (let i = 0; i < allweeks.length; i++) {
            allweeks[i].classList.remove('lived');
          }
        for(var i = 0; i < props.weeksToLive;i++){
            allweeks[i].classList.add('lived');
        }
    },[props.weeksToLive])

    var weekinfocontent = null;
    function weekinfo(e){
        weekinfocontent = e
    }

    function weekinfoposition(e){
        weekinfocontent.classList.add('hidden')
        if(e.target.classList[0]=='week' || e.target.classList[0] =='weeks-container'){
            console.log('this should work')
            weekinfocontent.classList.remove('hidden')
        }
    }

    function showWeekInfo(e){
        sethoverdata({year:e.target.parentNode.dataset.number,week:e.target.dataset.number})
    }
    return( 
    <React.Fragment>
    <div className="weeks-container" onMouseMove={weekinfoposition}>
            {Array.from(Array(73), (e, i) => {
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
    </React.Fragment>

    )
    
}