// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {
                    ...this.state.video, resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
                <p>Current Bitrate: {this.state.settings.bitrate}</p>
                <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
                <p>Current Resolution: {this.state.settings.video.resolution}</p>
            </div>
        )
    }
}

export default YouTubeDebugger