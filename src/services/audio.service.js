import Drums from "../audio/Drums.mp3";
import Bass from "../audio/Bass.mp3";
import Guitar from "../audio/Guitar.mp3";
import Keys from "../audio/Keys.mp3";

const gChannels = [
    {
        channelId: "C101",
        channelName: "Drums",
        colour: "red",
        isMuteOn: false,
        isPlaying: false,
        audio: Drums
    },
    {
        channelId: "C102",
        channelName: "Bass",
        colour: "yellow",
        isMuteOn: false,
        isPlaying: false,
        audio: Bass
    },
    {
        channelId: "C103",
        colour: "green",
        channelName: "Guitar",
        isMuteOn: false,
        isPlaying: false,
        audio: Guitar
    },
    {
        channelId: "C104",
        channelName: "Keys",
        colour: "blue",
        isMuteOn: false,
        isPlaying: false,
        audio: Keys
    }
]
export const audioService = {
    getChannels
}
function getChannels() {
    return gChannels
}