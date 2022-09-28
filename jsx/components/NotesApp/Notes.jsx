import React,{useEffect,useState} from 'react'

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



// function Note(props){

//     const [demodata,setdemodata] = useState({heading:'Heading here!',content:'content here!'})

//     const [headingdata,setheadingdata] = useState('')
//     const [contentdata,setcontentdata] = useState('')
//     const [addList,setaddList] = useState(false)

//     var Heading = null ;
//     function headingref(e){
//         Heading = e
//     }

//     var Content = null ;
//     function contentref(e){
//         Content = e
//     }


//     function HandleContent(e){
//         setcontentdata(e.target.innerHTML)
//     }

//     function handleHeading(e){
//         setheadingdata(e.target.innerHTML)

//         if(addList){
//             console.log(true)
//         }
//     }
//     function setAddList(){
//         setaddList(!addList)
//     }
//     useEffect(()=>{
//         console.log('rerender')

//     },[addList])

//     useEffect(()=>{
//         Heading.innerHTML= headingdata != '' ? headingdata : demodata.heading
//         Content.innerHTML= contentdata != '' ? contentdata : demodata.content
//     },[])


//     return(
//         <div  className={props.popup ? 'note popup' : 'note'} data-id={props.id} onBlur={props.flur}>

//             <div className='note-text-container'>
//             <div className="note-heading text-container" ref={headingref} data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={handleHeading}></div>

//             <div className="note-content text-container" ref={contentref} data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={HandleContent}></div>
//             </div>


//             <div className='note-tools-container'>
//                 <div className='note-tool' onClick={setAddList}>
//                     <button> set add list to true</button>
//                 </div>
//             </div>


//         </div>
//     )
// }




function Note(props){

    const [demodata,setdemodata] = useState({heading:'Heading here!',content:'content here!'})

    const [headingdata,setheadingdata] = useState('')
    const [contentdata,setcontentdata] = useState('')
    const [currentplace,setcurrentplace] = useState('')
    const [addList,setaddList] = useState(false)

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

        if(addList){
            console.log(true)
        }
    }
    function setAddList(){
        setaddList(!addList)
    }
    useEffect(()=>{

        console.log('rerender')
        
    },[addList])

    useEffect(()=>{
        Heading.innerHTML= headingdata != '' ? headingdata : demodata.heading
        Content.innerHTML= contentdata != '' ? contentdata : demodata.content

        setheadingdata(Heading.innerHTML)
        setcontentdata(Content.innerHTML)
    },[])

    

    function handlenote(e){
        var current = e.target.dataset.name
        console.log()
        setcurrentplace(current)
    }

    function addlist(){
        if(currentplace === 'content'){
            console.log(contentdata)
            Content.innerHTML = contentdata + `<ul class="note-list-container"><li>this is a list</li></ul>`
        } else if(currentplace === 'heading'){
            console.log('heading')
        }else{
            console.log('null')
        }

    }

    // function uploadImage(e){
        // console.log('hey')
        // console.log(e.target.value)
        // const reader =new FileReader();
        // reader.addEventListener('load',()=>{
        //     console.log('hey')
        //     var uploadedImage = e.target.value
        //     console.log('hey')
        //     var src = uploadedImage
        //     console.log(current)
        //     console.log('hey')
        // })
        // console.log('hey')
    // }


    return(
        <div  className={props.popup ? 'note popup' : 'note'} data-id={props.id}>

            <div className='note-text-container' onKeyDown={handlenote} onClick={handlenote}>
            <div className="note-heading text-container" ref={headingref} data-name="heading" data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={handleHeading}></div>

            <div className="note-content text-container" ref={contentref} data-name='content' data-id={props.id} suppressContentEditableWarning='true' contentEditable="true" aria-multiline="true" role="textbox" onKeyDown={HandleContent}></div>
            </div>


            <div className='note-tools-container'>
                <div className='note-tool'>
                    {/* <input type="file" accept="image/png, image/jpg, image/jpeg , image/gif" onChange={uploadImage} /> */}
                </div>
                <div className='note-tool'>
                    <button type="button" onClick={addlist}>Add list</button>
                </div>
            </div>


        </div>
    )
}