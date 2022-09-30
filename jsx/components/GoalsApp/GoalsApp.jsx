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
    addGoal(e){
        var selectedTime = this.state.selectedTime
        if(selectedTime === 'years'){
            var statecopy = this.state.years
            statecopy.push(e)
            this.setState({years:statecopy})
            this.setState({requiredgoals:statecopy})
        }
        else if (selectedTime === 'months'){
            var statecopy = this.state.months
            statecopy.push(e)
            this.setState({months:statecopy})
        }
        else if (selectedTime === 'weeks'){
            var statecopy = this.state.weeks
            statecopy.push(e)
            this.setState({weeks:statecopy})
        }

    }
    render(){
        return(
            <div id='GoalsApp'>
                <GoalsForm addGoal={this.addGoal}/>
                <GoalsType changeType={this.handleChangeType}/>
                <GoalsDisplay goals={this.state.requiredgoals}/>
            </div>
        )
    }
}

export default GoalsApp