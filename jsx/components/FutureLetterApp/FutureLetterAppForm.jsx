import React,{useState,useEffect,useRef} from 'react'
import randomNumber from '../../../server/functions/randomNumber'

export default function FutureLetterAppForm(props){

    const [mailData,setmailData] = useState('')
    const [mailSubject,setmailSubject] = useState('Subject')
    const [mailDate,setmailDate] = useState('')
    const fetchstate = useRef(true)

    var dateInput=null
    function dateInputRef(e){
        dateInput = e 
    }

    useEffect(()=>{
        var time = (Date.now()+86400000)
        var date = new Date(time).toLocaleDateString('en-ca')
        dateInput.min = date
    },[])


    useEffect(()=>{
        if(fetchstate.current){
        var noteHeading = $('.future-letter-content-div')[0]

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

        return () =>{
            fetchstate.current = false
        }
    } 
    },[])

    var Content = null ;
    function contentref(e){
        Content = e
    }

    function newFutureMail(e){
        e.preventDefault();
        var randomId = randomNumber(10);
        var dueDateArray  = mailDate.split('-')
        var dueTime = new Date(dueDateArray[1]+'/'+dueDateArray[2]+'/'+dueDateArray[0]).getTime()
        var today  = new Date().toLocaleDateString('en-ca')
        var data = {
            subject : mailSubject,
            body : mailData,
            date : mailDate,
            reminder :dueTime,
            dateCreated:today,
            id:randomId
        }

        props.addFutureLetter(data)
        setmailSubject('Subject')
        setmailData('Body')
        Content.innerHTML = 'Body'
        setmailDate('MM/DD/YYYY')
    }
    function handleSubject(e){
        setmailSubject(e.target.value)
    }
    
    function handleContent(e){
        setmailData(e.target.innerHTML)
    }

    function handleDate(e){
        setmailDate(e.target.value)
    }
    return(
        <div className="future-letter-app-form">

            <form onSubmit={newFutureMail}>

            <div className="future-letter-heading color-heading">
            Write a Letter!
            </div>

            <input value={mailSubject} className='text-container' type="text" name="subject" placeholder='subject' onChange={handleSubject} onKeyDown={handleSubject} onKeyUp={handleSubject} required/>

            <div ref={contentref} className="future-letter-content-div text-container" onKeyDown={handleContent} onKeyUp={handleContent} contentEditable="true" suppressContentEditableWarning="true">
            Body
            </div>

            <input name='due' type="date" ref={dateInputRef} onClick={handleDate} onChange={handleDate} required/>
            <button type="submit">Send To The Future</button>
            </form>
        </div>
        )
}