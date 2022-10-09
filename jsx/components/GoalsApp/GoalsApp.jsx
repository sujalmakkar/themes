import React from 'react'
import GoalsForm from './GoalsForm'
import GoalsType from './GoalsType'
import GoalsDisplay from './GoalsDisplay'

class GoalsApp extends React.Component{
    constructor(props){
        super(props)
        this.state={years:[],months:[],weeks:[],selectedTime:'years',requiredgoals:[]}
        this.handleChangeType = this.handleChangeType.bind(this)
        this.addGoal = this.addGoal.bind(this)
        this.doneStateChange = this.doneStateChange.bind(this)
    }

    componentDidMount(){
        fetch('/getData/goals',{
            method:'GET',
            headers:{'content-Type':'application/json'},
        }).then(e=>e.json()).then(result=>{
            this.setState({years:result.allgoals.years})
            this.setState({months:result.allgoals.months})
            this.setState({weeks:result.allgoals.weeks})
        }).catch(err=>console.log(err))
    }


    handleChangeType(e){
        this.setState({selectedTime:e})
        if(e==='years'){
            this.setState({requiredgoals:this.state.years})
        } else if(e==='months'){
            this.setState({requiredgoals:this.state.months})
        } else if(e==='weeks'){
            this.setState({requiredgoals:this.state.weeks})
        }
    }
    doneStateChange(e){
        var id = e.target.dataset.id
        var type = e.target.dataset.type
        var number = e.target.dataset.number
        var statecopy = this.state[type]
        var index = statecopy.findIndex(e=> e.year||e.month||e.week == number)
        var indexgoal = statecopy[index].goals.findIndex(e=>e.id==id)
        statecopy[index].goals[indexgoal].done = !statecopy[index].goals[indexgoal].done
        this.setState({[type]:statecopy})
    }
    addGoal(e){

        Date.prototype.getWeek = function () {
            var target  = new Date(this.valueOf());
            var dayNr   = (this.getDay() + 6) % 7;
            target.setDate(target.getDate() - dayNr + 3);
            var firstThursday = target.valueOf();
            target.setMonth(0, 1);
            if (target.getDay() != 4) {
                target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - target) / 604800000);
        }

        var date = new Date()
        var currentYear = date.getFullYear()
        var currentMonth = date.getMonth()+1
        var currentWeek = date.getWeek()

        var selectedTime = this.state.selectedTime
        if(selectedTime === 'years'){
            //SETTING THE INFO IN CLIENT
            var goals_copy = this.state.years
            var existinggoal = goals_copy.filter(e=>e.year==currentYear)
            if(existinggoal.length==0){
                var newdate={
                    year:currentYear,
                    goals:[]
                }
                newdate.goals.push(e)
                goals_copy.push(newdate)
                this.setState({years:goals_copy})
            }else{
                var index = goals_copy.findIndex(a=>a.year == currentYear);
                goals_copy[index].goals.push(e)
                this.setState({years:goals_copy})
            }

            // SENDING THE DATA TO SERVER
            e.number = currentYear
            e.type = selectedTime
            fetch('/postData/newgoal',{
                method:'POST',
                headers:{'content-Type':'application/json'},
                body:JSON.stringify(e)
            }).then(e=>e.json()).then(result=>console.log(result)).catch(err=>console.log(err))


            this.setState({requiredgoals:goals_copy})
        }
        else if (selectedTime === 'months'){
            var goals_copy = this.state.months
            var month = currentMonth+'/'+currentYear
            var existinggoal = goals_copy.filter(e=>e.month==month)
            
            if(existinggoal.length==0){
                var newdate={
                    month:month,
                    goals:[]
                }
                newdate.goals.push(e)
                goals_copy.push(newdate)
                this.setState({months:goals_copy})
            }else{
                var index = goals_copy.findIndex(a=>a.month == month);
                goals_copy[index].goals.push(e)
                this.setState({months:goals_copy})
            }

            e.number = month
            e.type = selectedTime
            fetch('/postData/newgoal',{
                method:'POST',
                headers:{'content-Type':'application/json'},
                body:JSON.stringify(e)
            }).then(e=>e.json()).then(result=>console.log(result)).catch(err=>console.log(err))


            this.setState({requiredgoals:goals_copy})
        }
        else if (selectedTime === 'weeks'){
            var goals_copy = this.state.weeks
            var week = currentWeek+'/'+currentYear
            var existinggoal = goals_copy.filter(e=>e.week==week)
            if(existinggoal.length==0){
                var newdate={
                    week:week ,
                    goals:[]
                }
                newdate.goals.push(e)
                goals_copy.push(newdate)
                this.setState({weeks:goals_copy})
            }else{
                var index = goals_copy.findIndex(a=>a.week == week);
                goals_copy[index].goals.push(e)
                this.setState({weeks:goals_copy})
            }

            e.number = week
            e.type = selectedTime
            fetch('/postData/newgoal',{
                method:'POST',
                headers:{'content-Type':'application/json'},
                body:JSON.stringify(e)
            }).then(e=>e.json()).then(result=>console.log(result)).catch(err=>console.log(err))

            this.setState({requiredgoals:goals_copy})
        }
    }
    render(){
        return(
            <div id='GoalsApp'>
                <GoalsForm addGoal={this.addGoal}/>
                <GoalsType changeType={this.handleChangeType}/>
                {this.state.requiredgoals.length>0?this.state.requiredgoals.map((data) => 
                <GoalsDisplay type={data.year?'years':data.month?'months':'weeks'} key={data.year||data.month||data.week} number={data.year||data.month||data.week} goals={data.goals} doneStateChange={this.doneStateChange}/>
                ):''}
            </div>
        )
    }
}

export default GoalsApp