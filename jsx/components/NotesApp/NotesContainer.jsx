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

    function pinNote(e){
        props.pinNote(props.id)
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
            <div className='note-row'>
                {props.pinned?
                    <div className="pin-note" title="unpin" onClick={pinNote}>
                        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/pin.png"/>
                    </div>:
                    <div className="pin-note" title="pin to top" onClick={pinNote}>
                        <img src="https://img.icons8.com/fluency-systems-regular/48/000000/pin.png"/>
                    </div>}
                <span className="delete-note" onClick={deleteNote}>
                    <img src="https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png"/>
                </span>
            </div>

            </div>
        </div>
        </React.Fragment>
    )
 
}
