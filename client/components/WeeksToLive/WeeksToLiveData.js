import React from 'react';
export default function WeeksToLiveData(props) {
    function setDob(e) {
        console.log(e);
    }
    return React.createElement("input", { type: "text", onChange: setDob });
}