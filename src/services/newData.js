function _makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

const channels = [
    {
        channelId: _makeId(),
        channelName: "Kick",
        colour: "yellow",
        isMuteOn: false,
        audio: Kick
    }, {
        channelId: _makeId(),
        channelName: "Snare",
        colour: "yellow",
        isMuteOn: false,
        audio: Snare
    }, {
        channelId: _makeId(),
        channelName: "Hihat",
        colour: "yellow",
        isMuteOn: false,
        audio: Hihat
    }, {
        channelId: _makeId(),
        channelName: "Bass",
        colour: "yellow",
        isMuteOn: false,
        audio: Bass
    }, {
        channelId: _makeId(),
        channelName: "Goshl",
        colour: "yellow",
        isMuteOn: false,
        audio: Goshl
    },
    {
        channelId: _makeId(),
        colour: "green",
        channelName: "Guitar",
        isMuteOn: false,
        audio: Guitar
    },
    {
        channelId: _makeId(),
        channelName: "Keys",
        colour: "blue",
        isMuteOn: false,
        audio: Keys
    }
]