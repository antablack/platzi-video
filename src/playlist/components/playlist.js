import React, { Component } from "react";
import Media from "./media"
import "./playlist.css"

function PlayList(props) {
    return (<div className="Playlist">
        {
            props.playList.map(item => {
                return <Media {...item} handleClick={props.handleOpenModal} key={item.id} />
            })
        }

    </div>)
}

export default PlayList;