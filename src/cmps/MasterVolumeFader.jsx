import { useEffect, useState } from "react"

const MasterVolumeFader = ({ channels }) => {
    const [volume, setVolume] = useState(1)
    const [muted, setMuted] = useState(false)
    const finalVolume = muted ? 0 : volume ** 2

    return (
        <main className="volume-fader-container flex column align-center master">
            <section className="volume-fader flex">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={channels ? channels[0].audio.volume : finalVolume}
                    onChange={event => {
                        channels ? channels.forEach(ch => {
                            ch.audio.volume = event.target.valueAsNumber
                            // ;.audio.volume = event.target.valueAsNumber
                        }) : finalVolume = event.target.valueAsNumber
                    }}
                />
            </section>
            <section className="volume-data flex column align-center">
                <div>
                    <p>{finalVolume.toFixed(2)}</p>
                </div>
                <div>
                    <p>Master</p>
                </div>
            </section>
        </main>
    )
}
export default MasterVolumeFader;