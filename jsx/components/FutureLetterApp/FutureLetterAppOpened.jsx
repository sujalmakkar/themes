import React from 'react'

export default function FutureLetterAppOpened(props){

   
    return(
        <React.Fragment>
        <div className="opened-letter-heading">Opened Letters</div>
        <div className="future-letter-app-opened">
            <div className="opened-letter-container">
                {
                props.letters.length>0 ? props.letters.map(a=>
                        <Letter key={a.id} subject={a.subject} body={a.body} dateCreated={a.dateCreated} dateReceived={a.date} />
                    ) : ''
                } 

            </div>
            
        </div>
        </React.Fragment>
        )
}

function Letter(props){
    return(
        <div className='opened-letter'>

            <div className="opened-letter-row">
                <div className='opened-letter-date-created'>Sent : {props.dateCreated}</div>
                <div></div>
            </div>
            <div className='opened-letter-subject'>{props.subject}</div>
            <div className='opened-letter-body'>{props.body}</div>
            <div className="opened-letter-row">
                <div></div>
                <div className='opened-letter-date-received'>Received : {props.dateReceived}</div>
            </div>

        </div>
    )
}