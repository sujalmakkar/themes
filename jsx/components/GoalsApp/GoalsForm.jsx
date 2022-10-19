import React,{useState} from 'react'
import randomNumber from '../../../server/functions/randomNumber';
import GoalsType from './GoalsType'
export default function GoalsForm(props){
    const [data,setdata] = useState()

    function handleFormSubmit(e){  
        e.preventDefault()
        var randomId = randomNumber(10);

        var todayDate = new Date()
        var todayDatevalue = todayDate.getDate()
        var todayMonthvalue = todayDate.getMonth()+1
        var todayYearvalue = todayDate.getFullYear()
        var finaldate = todayDatevalue + '/' + todayMonthvalue + '/' +todayYearvalue   

        var json = {
            text:data,
            created:finaldate,
            done:false,
            id:randomId,
        }

        props.addGoal(json)
        setdata('')
    }
    function handleInput(e){
        setdata(e.target.value)
    }
    return(
        <div className='goals-form flex'>
            <form onSubmit={handleFormSubmit}>
                <input placeholder={props.selectedTime=='years'?'Earn $100,000+':props.selectedTime=='months'?'Invest more than $2000':'Start a Youtube Channel'} type="text" value={data} onChange={handleInput} required/>
                <GoalsType changeType={props.changeType}></GoalsType>
                <button type="submit">Add Goal</button>
            </form>
        </div>
    )
}