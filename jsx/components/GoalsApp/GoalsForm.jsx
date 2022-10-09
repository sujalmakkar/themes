import React,{useState} from 'react'
import randomNumber from '../../../server/functions/randomNumber';

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
    }
    function handleInput(e){
        setdata(e.target.value)
    }
    return(
        <div className='goals-form'>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInput}/>
                <button type="submit">Add Goal</button>
            </form>
        </div>
    )
}