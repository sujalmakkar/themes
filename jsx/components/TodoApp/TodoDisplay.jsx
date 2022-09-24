import React from 'react'
import TodoEditableText from './TodoEditableText'

export default function TodoDisplay(props){


    function doneStateChange(e){
        props.changeTodoState(e.target.dataset.id)
    }

    function changeTodoText(e){
        props.changeTodoText(e)
    }

    return(
        <ul>
        {props.todos.map((todo)=>
        <li className="todo" key={todo.id}> 
        <TodoEditableText todoDone={todo.done} todoText={todo.text} todoId={todo.id} changeTodoText={changeTodoText}/>
        {todo.done ? 
        <span className="doneIndicator doneIndicator-done" title="mark as not done" data-id={todo.id} onClick={doneStateChange}>&#10005;</span> :
        <span className="doneIndicator doneIndicator-not-done" data-id={todo.id} title="mark as done" onClick={doneStateChange}>&#10003;</span> 
        }
        </li>)}
        </ul>
    )
}