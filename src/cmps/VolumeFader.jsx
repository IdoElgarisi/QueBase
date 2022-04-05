import { useEffect, useState } from "react"

const VolumeFader = ({ channel }) => {
    const [volume, setVolume] = useState(channel?.audio.volume)
    const [muted, setMuted] = useState(false)
    const finalVolume = muted ? 0 : volume ** 2

    return (
        <main className={`volume-fader-container flex column align-center ${channel.colour}`}>
            <section className="volume-fader flex">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={channel ? channel.audio.volume : finalVolume}
                    onChange={event => {
                        channel ? channel.audio.volume = event.target.valueAsNumber : finalVolume = event.target.valueAsNumber
                    }}
                />
                <button onClick={() => setMuted(m => !m)}>
                    {/* {muted ? "muted" : "unmuted"} */}
                    M
                </button>
            </section>
            <section className="volume-data flex column align-center">
                <div>
                    <p>{channel ? channel.audio.volume.toFixed(2) : finalVolume.toFixed(2)}</p>
                </div>
                <div>
                    <p>{channel.channelName}</p>
                </div>
            </section>
        </main>
    )
}
export default VolumeFader;