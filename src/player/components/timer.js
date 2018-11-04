import React, { Component } from "react";
import "./timer.css"

function leftPad(number){
    return `0${number}`.substr(-2)
}

function formatTime(secs){
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);
    return ` ${minutes} : ${leftPad(seconds.toString())}`;

}

function Timer(props) {
    return (
        <div className="Timer">
            <p>
                <span>{formatTime(props.currentTime)} / {formatTime(props.duration)}</span>
            </p>
        </div>
    )
}


export default Timer;