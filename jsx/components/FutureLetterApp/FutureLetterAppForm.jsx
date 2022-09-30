import React,{useState} from 'react'

export default function FutureLetterAppForm(props){

    const [mailData,setmailData] = useState('')
    const [mailSubject,setmailSubject] = useState('')

    function newFutureMail(e){
        e.preventDefault();
        console.log(mailSubject,mailData)
    }
    function handleSubject(e){
        setmailSubject(e.target.innerHTML)
    }

    function handleContent(e){
        setmailData(e.target.innerHTML)
    }
    return(
        <div className="future-letter-app-form">
            <form onSubmit={newFutureMail}>
            <div className="future-letter-subject-div" onKeyDown={handleSubject} placeholder="Subject" contentEditable="true" suppressContentEditableWarning="true">
            
            </div>

            <div className="future-letter-content-div" onKeyDown={handleContent} contentEditable="true" suppressContentEditableWarning="true">
            
            </div>
            <button type="submit">Send To The Future</button>
            </form>
        </div>
        )
}