import React, { useEffect, useState } from 'react';
export default function WeeksToLiveData(props) {

    const [hoverdata, sethoverdata] = useState({ year: 0, week: 0 });
    const [weekinfocontentposition, setweekInfoContentPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        var allweeks = document.getElementsByClassName('week');
        function weeks() {
            for (let i = 0; i < allweeks.length; i++) {
                allweeks[i].classList.remove('lived');
            }
            for (var i = 0; i < props.weeksToLive; i++) {
                allweeks[i].classList.add('lived');
            }
        }
        weeks();

        setInterval(() => {
            weeks();
        }, 10000000);
    }, [props.weeksToLive]);

    var weekinfocontent = null;
    function weekinfo(e) {
        weekinfocontent = e;
    }

    function weekinfoposition(e) {
        weekinfocontent.classList.add('hidden');
        if (e.target.classList[0] == 'week' || e.target.classList[0] == 'weeks-container') {
            console.log('this should work');
            weekinfocontent.classList.remove('hidden');
        }
    }

    function showWeekInfo(e) {
        sethoverdata({ year: e.target.parentNode.dataset.number, week: e.target.dataset.number });
    }
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'weeks-container', onMouseMove: weekinfoposition },
            Array.from(Array(73), (e, i) => {
                return React.createElement(
                    'div',
                    { className: 'year', key: i, 'data-number': i },
                    Array.from(Array(52), (e, i) => {
                        return React.createElement('div', { className: 'week', key: i + 1, 'data-number': i + 1, onMouseOver: showWeekInfo });
                    })
                );
            }),
            React.createElement(
                'div',
                { className: 'hovered-week-info', ref: weekinfo },
                React.createElement(
                    'div',
                    { className: 'year-info' },
                    ' Year: ',
                    hoverdata.year,
                    ' '
                ),
                React.createElement(
                    'div',
                    { className: 'week-info' },
                    ' Week: ',
                    hoverdata.week,
                    ' '
                )
            )
        )
    );
}