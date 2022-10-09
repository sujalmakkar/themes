import React from 'react';

export default function LogoutButton() {
    function logout() {
        fetch('/logoutuser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    }
    return React.createElement(
        'div',
        { className: 'LogoutButton' },
        React.createElement(
            'button',
            { onClick: logout },
            'Logout'
        )
    );
}