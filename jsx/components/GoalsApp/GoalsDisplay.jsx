import React,{useEffect, useState} from 'react'

export default function GoalsDisplay(props){
    return(
        <div className='goals-display'>
            {props.goals.map(e=><Goal text={e}/>)}
        </div>
    )
}

function Goal(props){
    return(
        <div className='goal'>
            <span className='goal-name'>{props.text}</span>
            {/* <span className="doneIndicator doneIndicator-done" title="mark as done" data-id={todo.id} onClick={doneStateChange}>&#10003;</span>  */}
        </div>
    )
}


// import React ,{useState} from 'react'

// function GoalEditableText(props){

//     const [Editable,setEditable] = useState(false)
//     const [Values,setValues] = useState({})

//     function handleEdit(e){
//         setEditable(true)
//         setTimeout(function() {
//             e.target.focus();
//         }, 0);
//         setValues({id:e.target.dataset.id,element:e.target})
//     }

//     function handleBlur(){
//         setEditable(false)
//     }

//     function handleEditDone(e){
//         if (e.key === "Enter") {
//         setEditable(false)
//         var new_value = Values.element.innerText
//         props.changeTodoText({id:Values.id,text:new_value})
//         }
//     }

//     return(
//         <span suppressContentEditableWarning='true' className={`todo-text ${ Editable?'editable':'' }  ${props.todoDone ? 'done' : ''}`} data-id={props.todoId} onKeyDown={handleEditDone} contentEditable={Editable ? 'true' : 'false'} onBlur={handleBlur} onDoubleClick={handleEdit}>{props.todoText}</span> 
//             )
// }