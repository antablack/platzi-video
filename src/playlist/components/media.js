import React, { Component } from "react";
import "./media.css";
import PropTypes from "prop-types";


class Media extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            author: props.author
        }
    }
    handleClick = (event) =>{
        this.props.openModal(this.props.id)
    }

    render() {
        return (<div className="Media" onClick={this.handleClick}>
            <div className="Media-cover">
                <img src={this.props.cover} alt=""/>
            </div>

            <h3 className="Media-title">{this.props.title}</h3>
            <p className="Media-author">{this.props.author}</p>
        </div>)
    }
}

Media.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(["video", "audio"])
}

export default Media;