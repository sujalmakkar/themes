import React from 'react';
import WeeksToLiveForm from './WeeksToLiveForm';
import WeeksToLiveData from './WeeksToLiveData';

class WeeksToLive extends React.Component {
    constructor(props) {
        super(props);
        this.state = { weeksToLive: 0 };
        this.setDob = this.setDob.bind(this);
    }
    setDob(e) {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        var todayDate = currentDate.toLocaleDateString('en-us', options);
        var selectedDate = e;
        var todayarray = todayDate.split("/");
        var selectedarray = selectedDate.split("-");

        var yeardifference = parseInt(todayarray[2] - selectedarray[0]);
        var monthdifference = parseInt(todayarray[0] - selectedarray[1]);
        var datedifference = parseInt(todayarray[1] - selectedarray[2]);

        var dayspassed = yeardifference * 364 + (monthdifference < 0 ? monthdifference * 30 + monthdifference / 2 : monthdifference * 30 + monthdifference / 2) + (datedifference < 0 ? datedifference * -1 : datedifference); //total days

        var weeksToLive = Math.round(dayspassed < 0 ? dayspassed * -1 / 7 : dayspassed / 7);
        this.setState({ weeksToLive: weeksToLive });
    }

    render() {
        return React.createElement(
            'div',
            { id: 'WeeksToLive' },
            React.createElement(
                'div',
                { className: 'weeks-to-live-container' },
                React.createElement(WeeksToLiveForm, { setDob: this.setDob }),
                React.createElement(WeeksToLiveData, { weeksToLive: this.state.weeksToLive })
            )
        );
    }
}

export default WeeksToLive;