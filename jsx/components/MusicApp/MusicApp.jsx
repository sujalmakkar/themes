import React from 'react'
import MusicAppComponentsContainer from './MusicAppComponentsContainer'

class MusicApp extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div id="MusicApp">
                <MusicAppComponentsContainer/>
            </div>
            )
    }
}

export default MusicApp