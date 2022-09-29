import React,{useState} from 'react'
import Note from './Note'

export default function NoteContainer(props){

    const[open,setopen] = useState(false)

    function handletoggleeditor(e){
        console.log(e.target.dataset)
        setopen(!open)
    }
    function handleopeneditor(){
        setopen(true)
    }

    return(
        <div className="note-container" onClick={handleopeneditor}  data-id="364234">
            <div className='note-preview'>
            <Note id="364234" onBlur={handletoggleeditor} popup={open}/> 
            </div>
        </div>
    )
 
}
