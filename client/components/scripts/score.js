var currentscore = 0;

import getWeek from './currentWeek';
import calculateScore from './calculateScore';

var date = new Date();
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

var today = date.toLocaleDateString('en-us', options);
var currentWeek = date.getWeek() + '-' + date.getFullYear();

getData();

function getData() {
    fetch(`./getData/score/${currentWeek}`, {
        method: 'GET',
        headers: { 'content-Type': 'application/json' }
    }).then(a => a.json()).then(res => {
        var score = parseFloat(res.score.toString().slice(0, 6));
        currentscore = currentscore + score;
    }).catch(err => console.log(err));
}

export default function score(scoretoadd, time) {
    var date = new Date();
    var split = date.toLocaleDateString('en-us', options).split('/');
    var today = split[0] + '-' + split[1] + '-' + split[2];
    var currentWeek = date.getWeek() + '-' + date.getFullYear();

    if (time > 0) {
        fetch(`./postData/score/set`, {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ week: currentWeek, date: today, time: time })
        });
        addscoredisplay();
        var newscore = parseFloat((currentscore + scoretoadd).toString().slice(0, 6));
        currentscore = newscore;
        return newscore;
    } else {
        var newscore = currentscore + scoretoadd;
        return newscore;
    }

    function addscoredisplay() {
        var scoredisplay = document.createElement('span');
        scoredisplay.classList.add('add-score');
        scoredisplay.textContent = '+' + scoretoadd.toString();
        document.body.appendChild(scoredisplay);
        setTimeout(() => {
            scoredisplay.remove();
        }, 1400);
    }
}