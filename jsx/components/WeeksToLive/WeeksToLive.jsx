import React from 'react'
import WeeksToLiveForm from './WeeksToLiveForm'
import WeeksToLiveData from './WeeksToLiveData'

class WeeksToLive extends React.Component{
    constructor(props){
        super(props)
        this.state = {dob:''}
        this.setDob = this.setDob.bind(this)
    }
    setDob(e){
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        var todayDate = currentDate.toLocaleDateString('en-us', options)
        var selectedDate = e;
        var todayarray = todayDate.split("/");
        var selectedarray = selectedDate.split("-");
        console.log(todayarray,selectedarray)


        var yeardifference = parseInt(todayarray[2] - selectedarray[0])
        var monthdifference = parseInt(todayarray[0] - selectedarray[1] )
        var datedifference = parseInt(todayarray[1] - selectedarray[2])

        var dayspassed = ((yeardifference*365)+(yeardifference/4)-(monthdifference<0?((monthdifference*-1)*30+((monthdifference/2))):((monthdifference*30)+((monthdifference/2)))) - (datedifference<0 ? datedifference*-1 :datedifference) )//total days

        var totalweeks = Math.round((dayspassed*-1)/7)
        console.log(totalweeks)

    }

    render() {
        return(
            <div id="WeeksToLive">
                <div className="weeks-to-live-container">
                    <WeeksToLiveForm setDob={this.setDob}></WeeksToLiveForm>
                    <WeeksToLiveData></WeeksToLiveData>
                </div>
            </div>
            )
    }
}

export default WeeksToLive