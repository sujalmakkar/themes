import React, { useEffect, useState, useRef } from 'react';
// import Sound from 'react-sound'

// import song from ''
// const sound = new Audio('https://winkthemes.tech/node/1.mp3');
// C:\Users\loc_backup_in\Desktop\code\productivity\jsx\components\atmosphere\

var sound = null;
export default function MusicAppComponentsContainer() {
    const [musicCategory, setmusicCategory] = useState('none');
    const [songNumber, setsongNumber] = useState(1);
    const [musicCategoryData, setmusicCategoryData] = useState({ ambient: 6, fastviolin: 3, heavymetal: 2, lofi: 1 });
    const counterRef = useRef(1);
    function changeMusicCategory(e) {
        setmusicCategory(e.target.value);
    }
    useEffect(() => {
        counterRef.current = songNumber;
    });

    useEffect(() => {
        setInterval(() => {
            if (sound != null) {
                if (sound.currentTime >= sound.duration) {
                    setsongNumber(counterRef.current + 1);
                }
            }
        }, 1000);
    }, [sound]);

    useEffect(() => {
        if (sound != null) {
            sound.pause();
        }
        if (musicCategory != 'none') {
            console.log(musicCategoryData[musicCategory], songNumber);
            if (musicCategoryData[musicCategory] >= songNumber) {
                console.log(true, musicCategory);
                var current_song_url = `https://winkthemes.tech/node/${musicCategory}/${songNumber}.mp3`;
                sound = new Audio(current_song_url);
                sound.play();
            } else {
                setsongNumber(1);
                console.log('playingNextCategory', songNumber);
            }
        }
    }, [musicCategory, songNumber]);

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'music-app-display' },
            React.createElement('div', { className: 'music-app-display-state' }),
            React.createElement('div', { className: 'music-app-sound' }),
            React.createElement(
                'div',
                { className: 'music-selector' },
                React.createElement(
                    'select',
                    { className: 'music-selector-input', onChange: changeMusicCategory },
                    React.createElement(
                        'option',
                        { value: 'none' },
                        'none'
                    ),
                    React.createElement(
                        'option',
                        { value: 'lofi' },
                        'Lofi'
                    ),
                    React.createElement(
                        'option',
                        { value: 'ambient' },
                        'Ambient'
                    ),
                    React.createElement(
                        'option',
                        { value: 'heavymetal' },
                        'Heavy Metal'
                    ),
                    React.createElement(
                        'option',
                        { value: 'fastviolin' },
                        'Violin'
                    )
                )
            )
        )
    );
}