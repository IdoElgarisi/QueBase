import { useEffect, useState } from "react"
import BarCounter from "./BarCounter"

const VolumeFader = ({ channel, toggleMute, toggleSolo, isMuteOn, isSoloOn }) => {
    const [volume, setVolume] = useState(channel?.audio.volume)
    const [muted, setMuted] = useState(false)
    const finalVolume = muted ? 0 : volume ** 2

    const onToggleMute = () => {
        toggleMute(channel.channelId)
    }
    const onToggleSolo = () => {
        toggleSolo(channel.channelId)
    }

    return (
        <main className={`volume-fader-container flex column align-center ${channel.color}`}>
            <div className="fader-btns-container flex align-center space-between">
                <div className="ops-btns flex align-center space-between">
                    <div className="mute-btn-container flex align-center justify-center">
                        <button className={`mute-btn flex align-center justify-center ${channel.isMuteOn ? "on" : "off"}`} onClick={onToggleMute}><p>M</p></button>
                    </div>
                    <div className="solo-btn-container flex align-center justify-center">
                        <button className={`solo-btn flex align-center justify-center ${channel.isSoloOn ? "on" : "off"}`} onClick={onToggleSolo}><p>S</p></button>
                    </div>
                </div>
            </div>
            <section className="volume-fader flex column">

                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={channel.audio.volume}
                    onChange={event => {
                        channel.audio.volume = event.target.valueAsNumber
                    }}
                />

                {/* <button onClick={() => setMuted(m => !m)}> */}
                {/* {muted ? "muted" : "unmuted"} */}
                {/* </button> */}
            </section>
            <section className={`volume-data  flex align-center space-between ${channel.color}`}>
                {/* <section className="volume-data flex column align-center"> */}
                <div>
                    <p>{channel.channelName}</p>
                </div>
                <div>
                    <p>{channel ? channel.audio.volume.toFixed(2) : finalVolume.toFixed(2)}</p>
                </div>
            </section>
        </main>
    )
}
export default VolumeFader;