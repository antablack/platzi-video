import React, { Component } from "react";
import MediaContainer from "../containers/media"
import "./playlist.css"

function PlayList(props) {
    return (<div className="Playlist">
        {
            props.playList.map(mediaId => {
                return <MediaContainer handleClick={props.handleOpenModal} id={mediaId} key={mediaId}/>
            })
        }

    </div>)
}

export default PlayList;