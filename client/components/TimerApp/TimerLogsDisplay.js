import React from 'react';

export default function TimerLogsDisplay(props) {
    return React.createElement(
        'div',
        { className: 'timer-logs' },
        React.createElement(
            'ul',
            null,
            props.logs != [] ? props.logs.map((log, index) => React.createElement(
                'li',
                { className: 'timer-log', key: index },
                React.createElement(
                    'span',
                    null,
                    log.taskName.length > 0 ? log.name : 'untitled'
                ),
                log.set ? log.set : '',
                log.initialized ? log.initialized : ''
            )) : ''
        )
    );
}