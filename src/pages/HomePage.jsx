import { useEffect, useState } from "react";
import { audioService } from "../services/audio.service";
import ChannelInfo from "../cmps/ChannelInfo";
import ScrollBar from "../cmps/ScrollBar";
import ProjectWindow from "../cmps/ProjectWindow";
import ToolBar from "../cmps/ToolBar";
import VolumeFader from "../cmps/VolumeFader";
import MixerWindow from "../cmps/MixerWindow";

const HomePage = () => {
    const [channels, setChannels] = useState("")
    const [isPlaying, setIsPlaying] = useState(false)
    const [isStoping, setIsStoping] = useState(false)
    const [isLoopOn, setIsLoopOn] = useState(false)
    const [currentTime, setCurrentTime] = useState(null)
    const [interval, setStateInterVal] = useState(null)




    useEffect(() => {
        const newChannels = audioService.getChannels()
        newChannels.map(channel => {
            channel.audio = new Audio(channel.audio)
            return Promise.resolve(channel)
        })
        Promise.all(newChannels).then((res) => {
            setChannels(res)
        })
    }, [])
    const timeWatch = () => {
        setStateInterVal(setInterval(() => {
            setCurrentTime(channels[0]?.audio?.currentTime)
        }, 50))
    }

    const onPlay = () => {
        const newChannels = channels.map(channel => {
            channel.isPlaying = true
            return Promise.resolve(channel)
        })
        Promise.all(newChannels).then((res) => {
            setChannels(res)
            setIsStoping(false)
            setIsPlaying(true)
            timeWatch()
        })
    }

    const toggleMute = (channelId) => {
        const newChannels = channels.map(channel => {
            if (channelId === channel.channelId) {
                channel.isMuteOn = !channel.isMuteOn
            }
            return Promise.resolve(channel)
        })
        Promise.all(newChannels).then((res) => {
            setChannels(res)
        })

    }

    const onPause = () => {
        clearInterval(interval)
        const newChannels = channels.map(channel => {
            channel.isPlaying = false
            return Promise.resolve(channel)
        })
        Promise.all(newChannels).then((res) => {
            setChannels(res)
            setIsPlaying(false)
        })
    }

    const onStop = () => {
        setCurrentTime(0)
        clearInterval(interval)
        setIsPlaying(false)
        setIsStoping(true)
    }

    const onToggleLoop = () => {
        setIsLoopOn(!isLoopOn)
    }

    return (
        <main className="project-page">
            <ScrollBar duration={channels[0]?.audio.duration ? channels[0].audio.duration : 0} currentTime={currentTime} />
            <div className="project-window flex">
                <div className="channels-list-container flex column align-center">
                    {channels.length && channels?.map((channel, idx) => {
                        return <ChannelInfo isLoopOn={isLoopOn} isStoping={isStoping} toggleMute={toggleMute} key={idx} isPlaying={isPlaying} channel={channel} />
                    })}
                </div>
                <ProjectWindow channels={channels ? channels : null} />
            </div>
            <MixerWindow channels={channels ? channels : null} />
            <ToolBar onPause={onPause} onPlay={onPlay} onStop={onStop} onToggleLoop={onToggleLoop} isLoopOn={isLoopOn} isPlaying={isPlaying} isStoping={isStoping} />
        </main>
    )
}

export default HomePage;