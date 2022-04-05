import { ImLoop } from "react-icons/im";
import { FaStop, FaPause, FaPlay } from "react-icons/fa";

const ToolBar = ({ onPause, onPlay, onStop, onToggleLoop, isLoopOn, isPlaying, isStoping }) => {
    return (
        <div className="tool-bar-container flex align-center justify-center">
            <div className="tool-bar flex align-center justify-center">
                <button onClick={onPlay} className={`play-btn flex align-center justify-center  ${isPlaying ? "on" : "off"}`}><FaPlay /></button>
                <button onClick={onPause} className={`pause-btn flex align-center justify-center ${(!isPlaying && !isStoping) ? "on" : "off"}`}><FaPause /></button>
                <button onClick={onStop} className={`stop-btn flex align-center justify-center ${(!isPlaying && isStoping) ? "on" : "off"}`}><FaStop /></button>
                <button onClick={onToggleLoop} className={`loop-btn flex align-center justify-center ${isLoopOn ? "on" : "off"}`}><ImLoop /></button>
            </div>
        </div>
    )
}

export default ToolBar;