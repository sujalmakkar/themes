import React, { useEffect, useState } from 'react';
// import cheerio from 'cheerio'

export default function MusicAppComponentsContainer() {
    const [musicCategory, setmusicCategory] = useState('relaxing');
    const [musicData, setmusicData] = useState({});

    useEffect(() => {
        fetch(`https://pixabay.com/music/search/mood/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', cookie: 'anonymous_user_id=db45c16b12474efc8dbd94e55298a113; is_human=1; csrftoken=SnyTQeilQQ1EL7WuUYUe3RVdOIrspb4HoA7IOT8wCFb4vpbgjO6ronhfMG2l8FCH; user_id=16553857; sessionid=.eJxVjEsOwiAQQO_C2jS0k6HgZcgUhhT7wfCJC-PdrV2YdP0-b1G5VJfSElncxSvlhb24CUutzrYVzjb6A_QKETSOVzSRW3j_8WdOD3a1azWupXOt1LSdYhdPdaeNbcqWN4rrv7vMZirzcQIeNEsgBR60lOjBBJJBoiEOg9HUKw3YSybUMujJSTMCqgloMI4NiM8XoepGHg:1ocPDW:evMPbZLtK4FAkiX612Vy0gi05B2JYUKNIp8teuF6cvc; mp_7ccb86f5c2939026a4b5de83b5971ed9_mixpanel=%7B%22distinct_id%22%3A%20%221837451e73136c-0c1c35cf13e151-26021c51-ff000-1837451e7320%22%2C%22%24device_id%22%3A%20%221837451e73136c-0c1c35cf13e151-26021c51-ff000-1837451e7320%22%2C%22site_type%22%3A%20%22similarweb%20extension%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Faccounts.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22accounts.google.com%22%7D; seen_audio_survey=1; OptanonConsent=isGpcEnabled=1&datestamp=Thu+Sep+29+2022+14%3A25%3A03+GMT%2B0530+(India+Standard+Time)&version=6.31.0&isIABGlobal=false&hosts=&consentId=e0f415e9-c46f-4729-abe3-d228341a1913&interactionCount=0&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A0&AwaitingReconsent=false; client_width=324; __cf_bm=ui4goAJ94kRj35ituzHI2Fs3pfAOd94d4Udy2NccK9Y-1664442679-0-Adgrkbij4C/lEuiEcqY0+9j53hgxxLXJwhbGMWvkGNDIYL99fpSINGS+0h9yvfe6bicqdmKtzo1CdrqXWNJNy+E=' },
            mode: 'no-cors'
        }).then(res => res.json()).then(json => {
            console.log(json);
        }).catch(err => console.log(err));
    }, [musicCategory]);

    function changeMusicCategory() {
        setmusicCategory('fuck');
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'button',
            { onClick: changeMusicCategory },
            'click'
        )
    );
}