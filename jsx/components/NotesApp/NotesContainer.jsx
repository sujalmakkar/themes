import React,{useState,useEffect} from 'react'

export default function NoteContainer(props){

    function handleopeneditor(e){
        props.noteId(props.id)
    }

    var Heading = null ;
    function headingref(e){
        Heading = e 
    }

    var Content = null ;
    function contentref(e){
        Content = e 
    }

    function deleteNote(e){
        props.deleteNote(props.id)
    }

    useEffect(()=>{
        Heading.innerHTML = props.heading
        Content.innerHTML = props.content
    },[props])

    return(
        <React.Fragment>
        <div className="note-container" data-id={props.id} >
            <div className='note-preview' onClick={handleopeneditor}>
            <div className='Heading' ref={headingref}></div>
            <div className='Content' ref={contentref}></div>
            </div>
            <div className="note-info">
            <span className="note-created">
                {props.created}
            </span>
            <span className="delete-note" onClick={deleteNote}>
                Delete Note
            </span>

            </div>
        </div>
        </React.Fragment>
    )
 
}
