import React from 'react'
import Timer from './Timer'

class TimerApp extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
                <div id="TimerApp">
                    <Timer/>
                </div>
            )
        }
}

export default TimerApp
