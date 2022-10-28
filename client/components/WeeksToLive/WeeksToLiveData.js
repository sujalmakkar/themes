import React, { useEffect, useState } from 'react';
export default function WeeksToLiveData(props) {

    const [hoverdata, sethoverdata] = useState({ year: 0, week: 0 });
    const averagelifespan = 73;
    const totalweeks = averagelifespan * 52;

    useEffect(() => {
        var allweeks = document.getElementsByClassName('week');
        function weeks() {
            for (let i = 0; i < allweeks.length; i++) {
                allweeks[i].classList.remove('lived');
            }
            for (var i = 0; i < props.weeksToLive; i++) {
                allweeks[i].classList.add('lived');
                allweeks[props.weeksToLive].classList.add('living');
            }
        }
        weeks();
    }, [props.weeksToLive]);

    var weekinfocontent = null;
    function weekinfo(e) {
        weekinfocontent = e;
    }

    function weekinfoposition(e) {
        weekinfocontent.classList.remove('hidden');
    }

    function showWeekInfo(e) {
        sethoverdata({ year: e.target.parentNode.dataset.number, week: e.target.dataset.number });
    }
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'flex' },
            React.createElement(TimeLineWeeksLeftInfo, { weeksToLive: props.weeksToLiveDecimal, weeksToLiveWhole: props.weeksToLive, totalweeks: totalweeks }),
            React.createElement(
                'div',
                { className: 'weeks-container padding-30', onMouseMove: weekinfoposition },
                Array.from(Array(averagelifespan), (e, i) => {
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
            ),
            React.createElement('div', { className: 'timeline-info-container' })
        )
    );
}

function TimeLineWeeksLeftInfo(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'flex' },
            React.createElement(
                'div',
                { className: 'info time-line-weeks-left-info padding-20 color-heading' },
                React.createElement(
                    'div',
                    { className: 'weeks-passed padding-10 color-heading' },
                    'Weeks Lived : ',
                    React.createElement(
                        'span',
                        { className: 'weeks-lived color-heading' },
                        props.weeksToLive
                    ),
                    React.createElement(
                        'span',
                        null,
                        '/',
                        props.totalweeks
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'weeks-death  padding-10 color-heading' },
                    'Death in : ',
                    React.createElement(
                        'span',
                        { className: 'color-heading' },
                        (props.totalweeks - props.weeksToLive).toString().slice(0, props.weeksToLiveWhole.toString().length + 5)
                    ),
                    ' weeks'
                )
            )
        )
    );
}