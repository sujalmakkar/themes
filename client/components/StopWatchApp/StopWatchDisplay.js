import React from 'react';
export default function StopWatchLogsDisplay(props) {

    return React.createElement(
        'div',
        { className: props.logs.length > 0 ? 'stop-watch-logs' : 'stop-watch-logs block' },
        React.createElement(
            'ul',
            null,
            props.logs.length > 0 ? props.logs.map((log, index) => React.createElement(
                'li',
                { className: 'stop-watch-log', key: index },
                React.createElement(
                    'div',
                    { className: 'stop-watch-log-name' },
                    React.createElement(
                        'div',
                        { className: 'stop-watch-log-name-span' },
                        log.taskName.length > 0 ? log.taskName : 'untitled'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'span',
                        null,
                        log.time ? log.time : ''
                    ),
                    React.createElement(
                        'span',
                        null,
                        log.initialized ? log.initialized : ''
                    )
                )
            )) : ''
        )
    );
}