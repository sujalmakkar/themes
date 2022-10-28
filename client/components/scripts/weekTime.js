var time = '';
var weektime = 0;

import getWeek from './currentWeek';

var date = new Date();
var currentWeek = date.getWeek() + '-' + date.getFullYear();

fetch(`./getData/time/${currentWeek}`, {
    method: 'GET',
    headers: { 'content-Type': 'application/json' }
}).then(res => res.json()).then(result => {
    weektime = result.time;
});

export default function week_time(e) {
    if (e > 0) {
        var timepassed = weektime + e;
        var timepassedstring = timepassed.toString();
        var totalsecondspassed = timepassedstring.slice(0, -3);
        var seconds = totalsecondspassed % 60;
        var minutes = totalsecondspassed / 60;
        var hours = minutes / 60;

        var secondstext = ('0' + seconds).slice(-2);
        var minutestext = ('0' + Math.trunc(minutes - Math.trunc(hours) * 60)).slice(-2);
        var hourstext = ('0' + Math.trunc(hours)).slice(-2);
        time = hourstext + ':' + minutestext + ':' + secondstext;
        return time;
    } else {
        return time;
    }
}