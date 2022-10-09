import React,{useState} from 'react'
import Note from './Note'

export default function NoteContainer(props){

    const[open,setopen] = useState(false)

    function handlecloseeditor(e){
        console.log(e)
        setopen(false)
    }
    function handleopeneditor(){
        setopen(true)
    }

    return(
        <div className="note-container" onClick={handleopeneditor}  data-id={props.id}>
            <div className='note-preview'>
            <Note id={props.id} popup={open}/> 
            </div>
        </div>
    )
 
}
