import React from "react";
import "./video-player-controls.css";

function VidePlayerControls(props) {
    return (
    <div className="VideoPlayerControls">
        {props.children}
    </div>)
}

export default VidePlayerControls;