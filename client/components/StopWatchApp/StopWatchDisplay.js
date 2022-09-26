import React from 'react';
export default function StopWatchLogsDisplay(props) {

    return React.createElement(
        'div',
        { className: 'stop-watch-logs' },
        React.createElement(
            'ul',
            null,
            props.stopWatchLogs != [] ? props.stopWatchLogs.map((log, index) => React.createElement(
                'li',
                { className: 'stop-watch-log', key: index },
                React.createElement(
                    'span',
                    null,
                    log.name.length > 0 ? log.name : 'untitled'
                ),
                ' ',
                log.days ? log.days + ':' : '',
                log.hours ? log.hours + ':' : '',
                log.minutes ? log.minutes + ':' : '00:',
                log.seconds ? log.seconds + '.' : '00:',
                log.milliseconds ? log.milliseconds : ''
            )) : ''
        )
    );
}