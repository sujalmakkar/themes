import React,{useEffect,useState ,useRef } from 'react'
// import Sound from 'react-sound'

// import song from ''
// const sound = new Audio('https://winkthemes.tech/node/1.mp3');
// C:\Users\loc_backup_in\Desktop\code\productivity\jsx\components\atmosphere\

var sound = null;
export default function MusicAppComponentsContainer(){
    const [musicCategory,setmusicCategory] = useState('none')
    const [songNumber,setsongNumber] = useState(1)
    const [musicCategoryData,setmusicCategoryData] = useState({ambient:6,fastviolin:3,heavymetal:2,lofi:1})
    const counterRef = useRef(1);
    function changeMusicCategory(e){
        setmusicCategory(e.target.value)
    }
    useEffect(() => {
        counterRef.current = songNumber;
    })

    useEffect(()=>{
        setInterval(()=>{
        if(sound != null){
                if(sound.currentTime>=sound.duration){
                    setsongNumber(counterRef.current + 1);
                } 
        }
    },1000)
    },[sound])

    useEffect(()=>{
        if(sound!=null){
            sound.pause()
        }
        if(musicCategory!='none'){
            console.log(musicCategoryData[musicCategory],songNumber)
            if(musicCategoryData[musicCategory]>=songNumber){
                console.log(true,musicCategory)
                var current_song_url = `https://winkthemes.tech/node/${musicCategory}/${songNumber}.mp3`
                sound = new Audio(current_song_url);
                sound.play()
            }else{
                setsongNumber(1)
                console.log('playingNextCategory',songNumber)
            }
        }
    },[musicCategory,songNumber])

    return(
        <React.Fragment>
            <div className="music-app-display">
                <div className="music-app-display-state">

                </div>
                <div className="music-app-sound">
                </div>
                <div className="music-selector">
                <select className='music-selector-input' onChange={changeMusicCategory}>
                    <option value="none">none</option>
                    <option value="lofi">Lofi</option>
                    <option value="ambient">Ambient</option>
                    <option value="heavymetal">Heavy Metal</option>
                    <option value="fastviolin">Violin</option>
                </select>
                </div>
            </div>
        </React.Fragment>
    )
}