import MasterVolumeFader from "./MasterVolumeFader";
import VolumeFader from "./VolumeFader";

const MixerWindow = ({ channels, toggleMute, toggleSolo }) => {

    return (
        <div className="mixer-window-container flex space-between">
            <div className="flex">
                {channels ? channels.map((ch, idx) => {
                    return <VolumeFader toggleSolo={toggleSolo} toggleMute={toggleMute} isSoloOn={ch.isSoloOn} isMuteOn={ch.isMuteOn} channel={ch} key={idx} />
                }) : ""}
            </div>
            {/* <MasterVolumeFader channels={channels} /> */}
        </div>
    )
}
export default MixerWindow;