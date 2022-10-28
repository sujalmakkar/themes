import React from 'react';

export default function TimerLogsDisplay(props) {
    return React.createElement(
        'div',
        { className: props.logs.length > 0 ? 'timer-logs' : 'timer-logs block' },
        React.createElement(
            'ul',
            null,
            props.logs.length > 0 ? props.logs.map((log, index) => React.createElement(
                'li',
                { className: 'timer-log', key: index },
                React.createElement(
                    'div',
                    { className: 'timer-log-name' },
                    React.createElement(
                        'div',
                        { className: 'timer-log-name-span' },
                        log.taskName.length > 0 ? log.taskName : 'untitled'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'span',
                        null,
                        log.timeset ? log.timeset : ''
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