import { useEffect } from "react";

const ChannelInfo = ({ channel, chNum, isPlaying, toggleMute, isStoping, isLoopOn, onStop }) => {
    useEffect(() => {
        if (isPlaying) {
            channel.audio.play()
        }
        else if (!isPlaying) channel.audio.pause()
    }, [isPlaying])

    useEffect(() => {
        if (isStoping) {
            channel.audio.pause()
            channel.audio.currentTime = 0
        }
    }, [isStoping])
    useEffect(() => {
        if (channel.audio.ended && !isLoopOn) onStop()
    }, [channel?.audio.ended])

    useEffect(() => {
        if (isLoopOn) channel.audio.loop = true
        else channel.audio.loop = false
    }, [isLoopOn])

    const onToggleMute = () => {
        toggleMute(channel.channelId)
    }

    return (
        <div className={`channel-info flex space-between align-center ${channel.colour}`}>
            <div className="flex align-center">
                <p className="channel-number">{chNum}</p>
                <p>{channel.channelName}</p>
            </div>
            <div className="mute-btn-container">
                <button className={`mute-btn ${channel.isMuteOn ? "on" : "off"}`} onClick={onToggleMute}>M</button>
            </div>
        </div>
    )
}
export default ChannelInfo;