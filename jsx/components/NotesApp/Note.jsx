import React,{useEffect,useState,useRef} from 'react'

import {io} from 'socket.io-client'


var socket = io("https://myworkflow.space");
// const socket = io("wss://server-domain.com");


export default function Note(props){

    const [headingdata,setheadingdata] = useState('')
    const [contentdata,setcontentdata] = useState('')
    const [currentplace,setcurrentplace] = useState('content')

    const fetchstate = useRef(true)

    useEffect(()=>{

        if(fetchstate.current){
            try{
                fetch(`./getData/note/${props.id}`,{
                    method:'GET',
                    headers:{'content-Type':'application/json'}            
                }).then(res=>res.json()).then(result=>{
    

    
                    setcontentdata(result?result[0]?result[0].data?result[0].data.content:'Content Here!':'Content Here!':'Content Here!')
                    setheadingdata(result?result[0]?result[0].data?result[0].data.heading:'Heading here!':'Heading here!':'Heading here!')
    
                    Heading.innerHTML= result?result[0]?result[0].data?result[0].data.heading:'Heading here!':'Heading here!':'Heading here!'
                    Content.innerHTML= result?result[0]?result[0].data?result[0].data.content:'Content Here!':'Content Here!':'Content Here!'
    
                })   
            }catch(err){
                console.log(err)
            }finally{
                Heading.innerHTML= 'Heading here!'
                Content.innerHTML= 'Content Here!'
            }
            return () =>{
                fetchstate.current = false
            }
        } 
    },[])

    useEffect(()=>{
        if(fetchstate.current){
        var noteHeading = $('.note-heading')[0]

        noteHeading?noteHeading.addEventListener('paste', function (e) {
            // Prevent the default action
            e.preventDefault();
        
            // Get the copied text from the clipboard
            const text = e.clipboardData
                ? (e.originalEvent || e).clipboardData.getData('text/plain')
                : // For IE
                window.clipboardData
                ? window.clipboardData.getData('Text')
                : '';
        
            if (document.queryCommandSupported('insertText')) {
                document.execCommand('insertText', false, text);
            } else {
                // Insert text at the current position of caret
                const range = document.getSelection().getRangeAt(0);
                range.deleteContents();
        
                const textNode = document.createTextNode(text);
                range.insertNode(textNode);
                range.selectNodeContents(textNode);
                range.collapse(false);
        
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }):''

        var noteContent = $('.note-content')[0]

        noteContent?noteContent.addEventListener('paste', function (e) {
            // Prevent the default action
            e.preventDefault();
        
            // Get the copied text from the clipboard
            const text = e.clipboardData
                ? (e.originalEvent || e).clipboardData.getData('text/plain')
                : // For IE
                window.clipboardData
                ? window.clipboardData.getData('Text')
                : '';
        
            if (document.queryCommandSupported('insertText')) {
                document.execCommand('insertText', false, text);
            } else {
                // Insert text at the current position of caret
                const range = document.getSelection().getRangeAt(0);
                range.deleteContents();
        
                const textNode = document.createTextNode(text);
                range.insertNode(textNode);
                range.selectNodeContents(textNode);
                range.collapse(false);
        
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }):''
        return () =>{
            fetchstate.current = false
        }
    } 
    },[])
    var Heading = null ;
    function headingref(e){
        Heading = e
    }


    var Content = null ;
    function contentref(e){
        Content = e
    }

    function handleContent(e){
        setcontentdata(Content.innerHTML)
        var max = false;
        (Content.innerHTML).length > 200 ? max=true : max=false
        props.getContent((Content.innerHTML).slice(0,200)+(max?'...':''))
    }

    function handleHeading(e){
        setheadingdata(Heading.innerHTML)
        var max = false;
        (Heading.innerHTML).length > 200 ? max=true : max=false
        props.getHeading((Heading.innerHTML).slice(0,200)+(max?'...':''))
    }
    

    function handlenote(e){
        var current = e.target.dataset.name
        if(!current){
            current = e.target.parentElement.dataset.name
        }
        setcurrentplace(current)
    }

    function addlist(){
        if(currentplace === 'content'){
            Content.innerHTML = contentdata + `<ul class="note-list-container"><li class="note-list">this is a list</li></ul><br>`
            setcontentdata(Content.innerHTML)
        } else if(currentplace === 'heading'){
            Heading.innerHTML = headingdata + `<ul class="note-list-container"><li class="note-list">this is a list</li></ul><br>` 
            setheadingdata(Heading.innerHTML)
            
        }
    }

    function uploadImage(e){
        if(e.target.files[0]){
            if(currentplace === 'content'){
                Content.innerHTML = contentdata + `<img data-name='content' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAAD7+/u7u7tra2vv7+/R0dFmZmaBgYFAQEC4uLhjY2N+fn7z8/NYWFg4ODgjIyMrKysxMTFeXl6xsbGLi4ugoKDo6OjX19erq6sVFRUdHR10dHRQUFBISEjDw8N1hUDtAAADHklEQVRogbWa63qDIAxAAXtZb7rOXrRd7fu/5WYrECDRCDT/WvV8ZyHB0G9CRMey3d3kfX06xCPIuEgdp+zstbSxz8xeSBhfWdlrKT9GX0g/8mXG987pjrFzuYc5yedeA163PGZ1h96VEg491X0HWBv1/8XhO5v7wmeLfO6Bt/Dd4+mI94ueY1VhfVcKXFimu0P2RjmXkt1hTn6UdzHRHa5lF15Ocvd6J4yEikRr0HOP7SaiBrO4/3LYkd305LE9d2ZmNhNrSbizJo4m9L42FB26c6al1tyte6eQsiZuht3EUT/rmx/CsKUsp90Xc+C1smyablf1zoDbtKz6j1v9iaSb+xnwxmEXNqd43lWnr98YcFFh3pS7qszlHQdeoN64uwJN0XLgr20LY4fukD1W5017PrdDs5QE26eDnEh5IdHPQaHavh6i2C7d8aarHOyDZllQNsy7402znVmzdHonDL3PON5rkr1znw5r0InrwP6Z703ViYliYHfgu1zemg3zTbPjvHl14p1JJthbhE1t9S77Uef1dma2sd4hvendCpt9pr3n907FZs/vHe09UYMrJeb3DjMnK1k/WN7wfMn1dr/j9Q7b2wle70yv5RZh0zUI2V1mb7d33nH9gLeZkRtJxLu+VTnfG8zItUSj0NdBW/zO8+6jDMDS9s5/FEPfb54k+0KxUfdhLYd3Phw/sFjSbMTd1AlrVAMzLHbeqQm22W7Hwy4Let5x3GENVhz4TT/Z4Wcp4O72zkiqTZhHl8QNxt3rHc4Me9c3HyfoQ++Yv+TMgNsOOlIjb2nZQj3mwE82p9+Ue23Z9r3DScsBVAPp3uh5ELwvOQsK1Wn3gQ3e8xsOW4g9dB+jO+95ej9x4wu60wcZZz6h98ExOunOnNnCgJkh3JkzW5Q7c2abdkcq0jk3zPP23YOKZJ53otyZs2aUO/O8M8Pd0qNrcMRdZyaLt08f3DN59xF0U0LvTLon9c64+/EKe4c+X8a5w0j37mOPslPqBAbmnouNuefJyTt893zeIT2ndx/7j3n3YScO+vfB+DicFnd527UJ/+3wB5nfIWooLHlkAAAAAElFTkSuQmCC"/><br>`
                setcontentdata(Content.innerHTML)
            } else if(currentplace === 'heading'){
                Heading.innerHTML = headingdata + `<img data-name='heading' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAAD7+/u7u7tra2vv7+/R0dFmZmaBgYFAQEC4uLhjY2N+fn7z8/NYWFg4ODgjIyMrKysxMTFeXl6xsbGLi4ugoKDo6OjX19erq6sVFRUdHR10dHRQUFBISEjDw8N1hUDtAAADHklEQVRogbWa63qDIAxAAXtZb7rOXrRd7fu/5WYrECDRCDT/WvV8ZyHB0G9CRMey3d3kfX06xCPIuEgdp+zstbSxz8xeSBhfWdlrKT9GX0g/8mXG987pjrFzuYc5yedeA163PGZ1h96VEg491X0HWBv1/8XhO5v7wmeLfO6Bt/Dd4+mI94ueY1VhfVcKXFimu0P2RjmXkt1hTn6UdzHRHa5lF15Ocvd6J4yEikRr0HOP7SaiBrO4/3LYkd305LE9d2ZmNhNrSbizJo4m9L42FB26c6al1tyte6eQsiZuht3EUT/rmx/CsKUsp90Xc+C1smyablf1zoDbtKz6j1v9iaSb+xnwxmEXNqd43lWnr98YcFFh3pS7qszlHQdeoN64uwJN0XLgr20LY4fukD1W5017PrdDs5QE26eDnEh5IdHPQaHavh6i2C7d8aarHOyDZllQNsy7402znVmzdHonDL3PON5rkr1znw5r0InrwP6Z703ViYliYHfgu1zemg3zTbPjvHl14p1JJthbhE1t9S77Uef1dma2sd4hvendCpt9pr3n907FZs/vHe09UYMrJeb3DjMnK1k/WN7wfMn1dr/j9Q7b2wle70yv5RZh0zUI2V1mb7d33nH9gLeZkRtJxLu+VTnfG8zItUSj0NdBW/zO8+6jDMDS9s5/FEPfb54k+0KxUfdhLYd3Phw/sFjSbMTd1AlrVAMzLHbeqQm22W7Hwy4Let5x3GENVhz4TT/Z4Wcp4O72zkiqTZhHl8QNxt3rHc4Me9c3HyfoQ++Yv+TMgNsOOlIjb2nZQj3mwE82p9+Ue23Z9r3DScsBVAPp3uh5ELwvOQsK1Wn3gQ3e8xsOW4g9dB+jO+95ej9x4wu60wcZZz6h98ExOunOnNnCgJkh3JkzW5Q7c2abdkcq0jk3zPP23YOKZJ53otyZs2aUO/O8M8Pd0qNrcMRdZyaLt08f3DN59xF0U0LvTLon9c64+/EKe4c+X8a5w0j37mOPslPqBAbmnouNuefJyTt893zeIT2ndx/7j3n3YScO+vfB+DicFnd527UJ/+3wB5nfIWooLHlkAAAAAElFTkSuQmCC"/><br>`
                setheadingdata(Heading.innerHTML)
            }
        }
    }

    function saveEarly(){
        var contentHTML = contentdata
        var headingHTML = headingdata
        socket.emit('noteedit',{
            id:props.id,
            data:{
                heading:headingHTML,
                content:contentHTML
            }
        })
    }

    useEffect(() => {
        var contentHTML = contentdata
        var headingHTML = headingdata
        const delayDebounceFn = setTimeout(() => {
            socket.emit('noteedit',{
                id:props.id,
                data:{
                    heading:headingHTML,
                    content:contentHTML
                }
            })
        }, 2000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [headingdata,contentdata])

      function closeeditor(e){
        var contentHTML = contentdata
        var headingHTML = headingdata
        socket.emit('noteedit',{
            id:props.id,
            data:{
                heading:headingHTML,
                content:contentHTML
            }
        })
        props.closeeditor()
      }

    return(
        <div  className={props.popup ? 'note popup box-shadow' : 'note box-shadow'} data-id={props.id}>

            <div className="note-contents-container">

                <div className='note-text-container' onKeyDown={handlenote} onClick={handlenote}>
                <div className="note-heading text-container"  ref={headingref} data-name="heading" data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={handleHeading} onKeyUp={handleHeading} onClick={handleHeading}>
                </div>

                <div className="note-content text-container" ref={contentref} data-name='content' data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={handleContent} onKeyUp={handleContent} onClick={handleContent}></div>
                </div>
            </div>
            <div className='note-tools-container'>
                    <div className='note-tools'>
                        <div className='note-tool'>
                            <input type="file" name="file" id="file" className="image-input" accept="image/png, image/jpg, image/jpeg , image/gif" onChange={uploadImage} />
                            <label htmlFor="file" onChange={uploadImage}>
                            <img src="https://img.icons8.com/material-rounded/96/000000/add-image.png"/>
                            </label>
                        </div>
                        <div className='note-tool'>
                            <button type="button" onClick={addlist}>
                            <img src="https://img.icons8.com/material-outlined/96/000000/list.png"/>
                            </button>
                        </div>
                    </div>
                    <div className="note-close" onClick={closeeditor} onMouseOver={saveEarly}>
                    <img src="https://img.icons8.com/material-outlined/96/000000/delete-sign.png"/>
                    </div>
            </div>
        </div>
    )
}