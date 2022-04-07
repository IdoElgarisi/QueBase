import Kick from "../audio/Kick.mp3";
import Snare from "../audio/Snare.mp3";
import Hihat from "../audio/Hihat.mp3";
import Bass from "../audio/Bass.mp3";
import Guitar from "../audio/Guitar.mp3";
import Keys from "../audio/Keys.mp3";
import Synth from "../audio/Synth.mp3";
import SynthBass from "../audio/SynthBass.mp3";
import Glock from "../audio/Glock.mp3";

export const audioService = {
    getChannels
}
async function getChannels() {
    gChannels.map(channel => {
        channel.audio = new Audio(channel.audio)
        return Promise.resolve(channel)
    })
    Promise.all(gChannels).then((res) => {
        return res
    })
    return gChannels
}
function _makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

const gChannels = [
    {
        channelId: _makeId(),
        channelName: "Kick",
        colour: "red",
        isMuteOn: false,
        isSoloOn: false,
        audio: Kick
    },
    {
        channelId: _makeId(),
        channelName: "Snare",
        colour: "red",
        isMuteOn: false,
        audio: Snare
    },
    {
        channelId: _makeId(),
        channelName: "Hihat",
        colour: "red",
        isMuteOn: false,
        audio: Hihat
    },
    {
        channelId: _makeId(),
        channelName: "Bass",
        colour: "yellow",
        isMuteOn: false,
        isSoloOn: false,
        audio: Bass
    },
    {
        channelId: _makeId(),
        colour: "green",
        channelName: "Guitar",
        isMuteOn: false,
        isSoloOn: false,
        audio: Guitar
    },
    {
        channelId: _makeId(),
        channelName: "Keys",
        colour: "blue",
        isMuteOn: false,
        isSoloOn: false,
        audio: Keys
    },
    {
        channelId: _makeId(),
        channelName: "Glock",
        colour: "blue",
        isMuteOn: false,
        isSoloOn: false,
        audio: Glock
    },
    {
        channelId: _makeId(),
        channelName: "E.Bass",
        colour: "blue",
        isMuteOn: false,
        isSoloOn: false,
        audio: SynthBass
    },
    {
        channelId: _makeId(),
        channelName: "Synth",
        colour: "blue",
        isMuteOn: false,
        isSoloOn: false,
        audio: Synth
    }
]