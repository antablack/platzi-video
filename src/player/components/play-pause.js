import React from "react";
import "./play-pause.css"
import Play from "../../icons/components/play";
import Pause from "../../icons/components/pause";

function PlayPause(props) {
    return (
        <div className="PlayPause">
            <button onClick={props.handleClick}>
                {
                    props.pause ? 
                    <Play size={25} color="white" /> 
                    :
                    <Pause size={25} color="white" />
                }
            </button>
        </div>
    )
}

export default PlayPause;