import { useEffect, useRef, useState } from "react";

const ChannelInfo = ({ channel, isPlaying, toggleMute, isStoping, isLoopOn }) => {
    useEffect(() => {
        if (isPlaying) {
            channel.audio.play()
        }
        else if (!isPlaying) channel.audio.pause()
    }, [isPlaying])

    useEffect(() => {
        if (channel.isMuteOn) channel.audio.volume = 0
        if (!channel.isMuteOn) channel.audio.volume = 1
    }, [channel.isMuteOn])

    useEffect(() => {
        if (isStoping) {
            channel.audio.pause()
            channel.audio.currentTime = 0
        }
    }, [isStoping])

    useEffect(() => {
        if (isLoopOn) channel.audio.loop = true
        else channel.audio.loop = false
    }, [isLoopOn])

    const onToggleMute = () => {
        toggleMute(channel.channelId)
    }

    return (
        <div className={`channel-info flex space-between align-center ${channel.colour}`}>
            <p>{channel.channelName}</p>
            <div className="mute-btn-container">
                <button className={`mute-btn ${channel.isMuteOn ? "on" : "off"}`} onClick={onToggleMute}>M</button>
            </div>
        </div>
    )
}
export default ChannelInfo;