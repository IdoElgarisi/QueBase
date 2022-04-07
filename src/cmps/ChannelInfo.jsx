import { useEffect } from "react";

const ChannelInfo = ({ channel, chNum, isPlaying, toggleMute, isStoping, isLoopOn, onStop, toggleSolo }) => {
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
    const onToggleSolo = () => {
        toggleSolo(channel.channelId)
    }

    return (
        <div className={`channel-line flex space-between align-center ${channel.colour}`}>
            <div className="channel-info  flex align-center">
                <div className="channel-number-container flex align-center justify-center">
                    <p className="channel-number">{chNum}</p>
                </div>
                <div className="channel-name-container flex align-center">
                    <p>{channel.channelName}</p>
                </div>
            </div>
            <div className="ops-bts flex align-center space-between">
                <div className="mute-btn-container flex align-center justify-center">
                    <button className={`mute-btn flex align-center justify-center ${channel.isMuteOn ? "on" : "off"}`} onClick={onToggleMute}><p>M</p></button>
                </div>
                <div className="solo-btn-container flex align-center justify-center">
                    <button className={`solo-btn flex align-center justify-center ${channel.isSoloOn ? "on" : "off"}`} onClick={onToggleSolo}><p>S</p></button>
                </div>
            </div>
        </div>
    )
}
export default ChannelInfo;