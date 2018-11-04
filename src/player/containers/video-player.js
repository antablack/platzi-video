import React, { Component } from "react";
import VideoPlayerLayout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from "../components/video-player-controls";
import ProgressBar from "../components/progress-bar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";
import FullScreen from "../components/full-screen";
class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
    }
    togglePlay = () => {
        this.setState({
            pause: !this.state.pause
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleTimeUpdate = event => {
        this.setState({ currentTime: this.video.currentTime })
    }

    handleSeeking = event => {
        this.setState({ loading: true })
    }

    handleSeeked = event => {
        this.setState({ loading: false })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value
    }
    handleFullScreenClick = event => {
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen() 
        }
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoPlay)
        })
    }
    setRef = element => {
        this.player = element
    }
    render() {
        return (
            <VideoPlayerLayout
            setRef={this.setRef}>
                <Title title="esto es un video" />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume
                        handleVolumeChange={this.handleVolumeChange} />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick} />
                </Controls>
                <Spinner
                    active={this.state.loading}
                />
                <Video
                    autoPlay={this.props.autoPlay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;