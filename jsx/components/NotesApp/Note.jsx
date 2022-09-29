import React,{useEffect,useState} from 'react'



export default function Note(props){

    const [demodata,setdemodata] = useState({heading:'Heading here!',content:'content here!'})

    const [headingdata,setheadingdata] = useState('')
    const [contentdata,setcontentdata] = useState('')
    const [currentplace,setcurrentplace] = useState('')

    var Heading = null ;
    function headingref(e){
        Heading = e
    }

    var Content = null ;
    function contentref(e){
        Content = e
    }


    function HandleContent(e){
        setcontentdata(e.target.innerHTML)
    }

    function handleHeading(e){
        setheadingdata(e.target.innerHTML)
    }


    useEffect(()=>{
        Heading.innerHTML= headingdata != '' ? headingdata : demodata.heading
        Content.innerHTML= contentdata != '' ? contentdata : demodata.content

        setheadingdata(Heading.innerHTML)
        setcontentdata(Content.innerHTML)
    },[])

    

    function handlenote(e){
        var current = e.target.dataset.name
        console.log(current)
        setcurrentplace(current)
    }

    function addlist(){
        if(currentplace === 'content'){
            Content.innerHTML = contentdata + `<ul class="note-list-container"><li class="note-list">this is a list</li></ul>`
        } else if(currentplace === 'heading'){
            Heading.innerHTML = headingdata + `<ul class="note-list-container"><li class="note-list">this is a list</li></ul>`
        }

    }

    function uploadImage(e){
        if(e.target.files[0]){
            if(currentplace === 'content'){
                Content.innerHTML = contentdata + `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAAD7+/u7u7tra2vv7+/R0dFmZmaBgYFAQEC4uLhjY2N+fn7z8/NYWFg4ODgjIyMrKysxMTFeXl6xsbGLi4ugoKDo6OjX19erq6sVFRUdHR10dHRQUFBISEjDw8N1hUDtAAADHklEQVRogbWa63qDIAxAAXtZb7rOXrRd7fu/5WYrECDRCDT/WvV8ZyHB0G9CRMey3d3kfX06xCPIuEgdp+zstbSxz8xeSBhfWdlrKT9GX0g/8mXG987pjrFzuYc5yedeA163PGZ1h96VEg491X0HWBv1/8XhO5v7wmeLfO6Bt/Dd4+mI94ueY1VhfVcKXFimu0P2RjmXkt1hTn6UdzHRHa5lF15Ocvd6J4yEikRr0HOP7SaiBrO4/3LYkd305LE9d2ZmNhNrSbizJo4m9L42FB26c6al1tyte6eQsiZuht3EUT/rmx/CsKUsp90Xc+C1smyablf1zoDbtKz6j1v9iaSb+xnwxmEXNqd43lWnr98YcFFh3pS7qszlHQdeoN64uwJN0XLgr20LY4fukD1W5017PrdDs5QE26eDnEh5IdHPQaHavh6i2C7d8aarHOyDZllQNsy7402znVmzdHonDL3PON5rkr1znw5r0InrwP6Z703ViYliYHfgu1zemg3zTbPjvHl14p1JJthbhE1t9S77Uef1dma2sd4hvendCpt9pr3n907FZs/vHe09UYMrJeb3DjMnK1k/WN7wfMn1dr/j9Q7b2wle70yv5RZh0zUI2V1mb7d33nH9gLeZkRtJxLu+VTnfG8zItUSj0NdBW/zO8+6jDMDS9s5/FEPfb54k+0KxUfdhLYd3Phw/sFjSbMTd1AlrVAMzLHbeqQm22W7Hwy4Let5x3GENVhz4TT/Z4Wcp4O72zkiqTZhHl8QNxt3rHc4Me9c3HyfoQ++Yv+TMgNsOOlIjb2nZQj3mwE82p9+Ue23Z9r3DScsBVAPp3uh5ELwvOQsK1Wn3gQ3e8xsOW4g9dB+jO+95ej9x4wu60wcZZz6h98ExOunOnNnCgJkh3JkzW5Q7c2abdkcq0jk3zPP23YOKZJ53otyZs2aUO/O8M8Pd0qNrcMRdZyaLt08f3DN59xF0U0LvTLon9c64+/EKe4c+X8a5w0j37mOPslPqBAbmnouNuefJyTt893zeIT2ndx/7j3n3YScO+vfB+DicFnd527UJ/+3wB5nfIWooLHlkAAAAAElFTkSuQmCC"/>`
            } else if(currentplace === 'heading'){
                Heading.innerHTML = headingdata + `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAAD7+/u7u7tra2vv7+/R0dFmZmaBgYFAQEC4uLhjY2N+fn7z8/NYWFg4ODgjIyMrKysxMTFeXl6xsbGLi4ugoKDo6OjX19erq6sVFRUdHR10dHRQUFBISEjDw8N1hUDtAAADHklEQVRogbWa63qDIAxAAXtZb7rOXrRd7fu/5WYrECDRCDT/WvV8ZyHB0G9CRMey3d3kfX06xCPIuEgdp+zstbSxz8xeSBhfWdlrKT9GX0g/8mXG987pjrFzuYc5yedeA163PGZ1h96VEg491X0HWBv1/8XhO5v7wmeLfO6Bt/Dd4+mI94ueY1VhfVcKXFimu0P2RjmXkt1hTn6UdzHRHa5lF15Ocvd6J4yEikRr0HOP7SaiBrO4/3LYkd305LE9d2ZmNhNrSbizJo4m9L42FB26c6al1tyte6eQsiZuht3EUT/rmx/CsKUsp90Xc+C1smyablf1zoDbtKz6j1v9iaSb+xnwxmEXNqd43lWnr98YcFFh3pS7qszlHQdeoN64uwJN0XLgr20LY4fukD1W5017PrdDs5QE26eDnEh5IdHPQaHavh6i2C7d8aarHOyDZllQNsy7402znVmzdHonDL3PON5rkr1znw5r0InrwP6Z703ViYliYHfgu1zemg3zTbPjvHl14p1JJthbhE1t9S77Uef1dma2sd4hvendCpt9pr3n907FZs/vHe09UYMrJeb3DjMnK1k/WN7wfMn1dr/j9Q7b2wle70yv5RZh0zUI2V1mb7d33nH9gLeZkRtJxLu+VTnfG8zItUSj0NdBW/zO8+6jDMDS9s5/FEPfb54k+0KxUfdhLYd3Phw/sFjSbMTd1AlrVAMzLHbeqQm22W7Hwy4Let5x3GENVhz4TT/Z4Wcp4O72zkiqTZhHl8QNxt3rHc4Me9c3HyfoQ++Yv+TMgNsOOlIjb2nZQj3mwE82p9+Ue23Z9r3DScsBVAPp3uh5ELwvOQsK1Wn3gQ3e8xsOW4g9dB+jO+95ej9x4wu60wcZZz6h98ExOunOnNnCgJkh3JkzW5Q7c2abdkcq0jk3zPP23YOKZJ53otyZs2aUO/O8M8Pd0qNrcMRdZyaLt08f3DN59xF0U0LvTLon9c64+/EKe4c+X8a5w0j37mOPslPqBAbmnouNuefJyTt893zeIT2ndx/7j3n3YScO+vfB+DicFnd527UJ/+3wB5nfIWooLHlkAAAAAElFTkSuQmCC"/>`
            }
        }
    }

    function addHeading(){
        if(currentplace === 'content'){
            Content.innerHTML = contentdata + `<h2 class="heading">Note Heading</h2>`
        } else if(currentplace === 'heading'){
            Heading.innerHTML = headingdata + `<h2 class="heading">Note Heading</h2>`
        }
    }
    function getSelectionText() {
        if (window.getSelection) {
            var text = window.getSelection()
            console.log(text.className)
            // if(text!='')
            console.log(text.focusNode)   
        }
        // console.log(text);
    }
    getSelectionText()
    
    // document.onmouseup = document.onkeyup = document.onselectionchange = function() {
    //   document.getElementById("sel").value = getSelectionText();
    // };
    


    return(
        <div  className={props.popup ? 'note popup' : 'note'} data-id={props.id}>

            <div className='note-text-container' onKeyDown={handlenote} onClick={handlenote}>
            <div className="note-heading text-container"  ref={headingref} data-name="heading" data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={handleHeading} onClick={handleHeading}>
            </div>

            <div className="note-content text-container" ref={contentref} data-name='content' data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={HandleContent} onClick={HandleContent}></div>
            </div>


            <div className='note-tools-container'>
                <div className='note-tool'>
                    <input type="file" accept="image/png, image/jpg, image/jpeg , image/gif" onChange={uploadImage} />
                </div>
                <div className='note-tool'>
                    <button type="button" onClick={addlist}>Add list</button>
                </div>
                <div className='note-tool'>
                    <button type="button" onClick={addHeading}>Add Heading</button>
                </div>
            </div>


        </div>
    )
}