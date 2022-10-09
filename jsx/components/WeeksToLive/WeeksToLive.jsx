import React from 'react'
import WeeksToLiveForm from './WeeksToLiveForm'
import WeeksToLiveData from './WeeksToLiveData'

class WeeksToLive extends React.Component{
    constructor(props){
        super(props)
        this.state = {weeksToLive:0,dob:''}
        this.setDob = this.setDob.bind(this)
        this.weeksToLive = this.weeksToLive.bind(this)
    }

    componentDidMount(){
        fetch('/getData/dob',{
            method:'GET',
            headers:{'content-Type':'application/json'}
        }).then(res=>res.json())
        .then(result=>{
            this.weeksToLive(result.dob)
            this.setState({dob:result.dob})
        })
        .catch(err=>console.log(err))
    }


    setDob(e){
        this.setState({dob:e})
        var data = {dob:e}
        fetch('/postData/dob',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
        this.weeksToLive(e)
    }

    weeksToLive(e){
        console.log(e)
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        var todayDate = currentDate.toLocaleDateString('en-us', options)
        var selectedDate = e;
        var todayarray = todayDate.split("/");
        var selectedarray = selectedDate.split("-");

        var yeardifference = parseInt(todayarray[2] - selectedarray[0])
        var monthdifference = parseInt(todayarray[0] - selectedarray[1] )
        var datedifference = parseInt(todayarray[1] - selectedarray[2])

        var dayspassed = ((yeardifference*364)+((monthdifference*30)+((monthdifference/2))) + datedifference) //total days

        var weeksToLive = Math.round((dayspassed<0?((dayspassed*-1)/7):(dayspassed/7)))
        console.log(weeksToLive,yeardifference, monthdifference,datedifference )
        this.setState({weeksToLive:weeksToLive})
    }

    render() {
        return(
            <div id="WeeksToLive">
                <div className="weeks-to-live-container">
                    {this.state.dob == '' ? <WeeksToLiveForm setDob={this.setDob}></WeeksToLiveForm> : ''}
                    <WeeksToLiveData weeksToLive={this.state.weeksToLive}></WeeksToLiveData>
                </div>
            </div>
            )
    }
}

export default WeeksToLive