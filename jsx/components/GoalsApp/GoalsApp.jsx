import React from 'react'
import GoalsForm from './GoalsForm'
import GoalsType from './GoalsType'
import GoalsDisplay from './GoalsDisplay'



class GoalsApp extends React.Component{
    constructor(props){
        super(props)
        this.state={years:[],months:[],weeks:[],selectedTime:'years',requiredgoals:[],currentWeek:'',currentYear:'',currentMonth:''}
        this.handleChangeType = this.handleChangeType.bind(this)
        this.addGoal = this.addGoal.bind(this)
        this.doneStateChange = this.doneStateChange.bind(this)
        this.deleteGoal = this.deleteGoal.bind(this)
    }

    componentDidMount(){
        fetch('./getData/goals',{
            method:'GET',
            headers:{'content-Type':'application/json'},
        }).then(e=>e.json()).then(result=>{
            var years = result.allgoals.years
            var months = result.allgoals.months
            var weeks = result.allgoals.weeks
            years.reverse()
            months.reverse()
            weeks.reverse()
            this.setState({years:years})
            this.setState({months:months})
            this.setState({weeks:weeks})
            this.setState({requiredgoals:years})
        }).catch(err=>console.log(err))

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

        this.setState({currentWeek:currentWeek,currentMonth:currentMonth,currentYear:currentYear})

    }
    componentDidUpdate(prevprops,prevstate){
        if (this.state.selectedTime !== prevstate.selectedTime) {
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

            this.setState({currentWeek:currentWeek,currentMonth:currentMonth,currentYear:currentYear})
          }
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
        var current = !statecopy[index].goals[indexgoal].done
        statecopy[index].goals[indexgoal].done = current
        this.setState({[type]:statecopy})
        e.target.dataset.done = current

        fetch('./postData/goal',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(e.target.dataset)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
    }

    deleteGoal(e){
        var id = e.target.dataset.id
        var type = e.target.dataset.type
        var number = e.target.dataset.number
        var statecopy = this.state[type]
        var index = statecopy.findIndex(e=> e.year||e.month||e.week == number)
        var indexgoal = statecopy[index].goals.findIndex(e=>e.id==id);

        var current = statecopy[index].goals[indexgoal].done
        
        e.target.dataset.done = current;

        statecopy[index].goals.splice(indexgoal,1)
        if(statecopy[index].goals.length==0){
            statecopy.splice(index,1)
        }
        this.setState({[type]:statecopy})

        fetch('./postData/delgoal',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(e.target.dataset)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))

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
        var currentYear = (date.getFullYear()).toString()
        var currentMonth = date.getMonth()+1
        var currentWeek = date.getWeek()

        var selectedTime = this.state.selectedTime
        if(selectedTime === 'years'){
            //SETTING THE INFO IN CLIENT
            var goals_copy = this.state.years
            var existinggoal = goals_copy.filter(e=>e.year==currentYear)
            if(existinggoal.length==0){
                var newdate={
                    year:(currentYear).toString(),
                    goals:[]
                }
                newdate.goals.push(e)
                goals_copy.unshift(newdate)
                this.setState({years:goals_copy})
            }else{
                var index = goals_copy.findIndex(a=>a.year == currentYear);
                goals_copy[index].goals.push(e)
                this.setState({years:goals_copy})
            }

            // SENDING THE DATA TO SERVER
            e.number = currentYear
            e.type = selectedTime
            fetch('./postData/newgoal',{
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
                goals_copy.unshift(newdate)
                this.setState({months:goals_copy})
            }else{
                var index = goals_copy.findIndex(a=>a.month == month);
                goals_copy[index].goals.push(e)
                this.setState({months:goals_copy})
            }

            e.number = month
            e.type = selectedTime
            fetch('./postData/newgoal',{
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
                goals_copy.unshift(newdate)
                this.setState({weeks:goals_copy})
            }else{
                var index = goals_copy.findIndex(a=>a.week == week);
                goals_copy[index].goals.push(e)
                this.setState({weeks:goals_copy})
            }

            e.number = week
            e.type = selectedTime
            fetch('./postData/newgoal',{
                method:'POST',
                headers:{'content-Type':'application/json'},
                body:JSON.stringify(e)
            }).then(e=>e.json()).then(result=>console.log(result)).catch(err=>console.log(err))

            this.setState({requiredgoals:goals_copy})
        }
    }
    render(){
        return(
            <div id='GoalsApp' className='app'>
                <GoalsHeading type={this.state.selectedTime} currentMonth={this.state.currentMonth} currentWeek ={this.state.currentWeek}  currentYear = {this.state.currentYear}/>
                <GoalsForm addGoal={this.addGoal} selectedTime={this.state.selectedTime} changeType={this.handleChangeType}/>
                {/* <GoalsType changeType={this.handleChangeType}/> */}
                {this.state.requiredgoals.length>0?this.state.requiredgoals.map((data) => 
                <GoalsDisplay type={data.year?'years':data.month?'months':'weeks'} key={data.year||data.month||data.week} number={data.year||data.month||data.week} goals={data.goals} deleteGoal={this.deleteGoal} doneStateChange={this.doneStateChange}/>
                ):''}
            </div>
        )
    }
}

function GoalsHeading(props){
    var type = (props.type).slice(0,-1)
    return(
        <div className="app-heading">
        <div>Goals</div>
        {type=='year'?
        <span>Set Goals for {type} {props.currentYear}</span>:
        type=='month'?
        <span>Set Goals for {type} {props.currentMonth} of year {props.currentYear}</span>:
        <span>Set Goals for {type} {props.currentWeek} of year {props.currentYear}</span>
        }
        </div>
    )
}


export default GoalsApp