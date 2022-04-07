import { useEffect, useState } from "react";
import { audioService } from "./services/audio.service";
import ChannelInfo from "./cmps/ChannelInfo";
import ScrollBar from "./cmps/ScrollBar";
import ProjectWindow from "./cmps/ProjectWindow";
import ToolBar from "./cmps/ToolBar";
import MixerWindow from "./cmps/MixerWindow";
const App = () => {
  const [channels, setChannels] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStoping, setIsStoping] = useState(false)
  const [isLoopOn, setIsLoopOn] = useState(false)
  const [currentTime, setCurrentTime] = useState(null)
  const [interval, setStateInterVal] = useState(null)

  useEffect(async () => {
    const newChannels = await audioService.getChannels()
    setChannels(newChannels)
  }, [])
  const timeWatch = () => {
    setStateInterVal(setInterval(() => {
      setCurrentTime(channels[0]?.audio?.currentTime)
    }, 50))
  }

  const onPlay = () => {
    setIsStoping(false)
    setIsPlaying(true)
    timeWatch()
  }
  const onPause = () => {
    clearInterval(interval)
    setIsPlaying(false)
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

  const toggleMute = async (channelId) => {
    const newChannels = channels.map(channel => {
      if (channelId === channel.channelId) {
        channel.audio.muted = !channel.isMuteOn
        channel.isMuteOn = !channel.isMuteOn
      }
      return Promise.resolve(channel)
    })
    Promise.all(newChannels).then((res) => {
      setChannels(res)
    })

  }

  const toggleSolo = async (channelId) => {
    const newChannels = channels.map(channel => {
      if (channelId === channel.channelId) {
        channel.isSoloOn = !channel.isSoloOn
      }
      if (channelId !== channel.channelId && !channel.isSoloOn) {
        if (channels.some(channel => { return channel.isSoloOn })) {
          channel.audio.muted = true
          channel.isMuteOn = true
        }
      }
      if (!channel.isSoloOn) {
        if (channels.some(channel => { return channel.isSoloOn })) {
          channel.audio.muted = true
          channel.isMuteOn = true
        }
        else {
          channel.audio.muted = false
          channel.isMuteOn = false

        }
      }
      if (channel.isSoloOn) {
        channels.forEach(ch => {
          if (!ch.isSoloOn) {
            ch.audio.muted = true
            ch.isMuteOn = true
          }
        })
        channel.audio.muted = false
        channel.isMuteOn = false
      }
      return Promise.resolve(channel)
    })
    Promise.all(newChannels).then((res) => {
      setChannels(res)
    })
  }

  return (
    <div className="App main-layout">
      <main className="project-page">
        <ScrollBar duration={channels?.length && channels[0]?.audio.duration ? channels[0].audio.duration : 0} currentTime={currentTime} />
        <div className="project-window flex">
          <div className="channels-list-container flex column align-center">
            {channels?.length && channels?.map((channel, idx) => {
              return <ChannelInfo isSoloOn={channel.isSoloOn} toggleSolo={toggleSolo} onStop={onStop} isLoopOn={isLoopOn} isStoping={isStoping} toggleMute={toggleMute} key={idx} isPlaying={isPlaying} channel={channel} chNum={(idx + 1)} />
            })}
          </div>
          <ProjectWindow channels={channels ? channels : null} />
        </div>
        <MixerWindow toggleMute={toggleMute} toggleSolo={toggleSolo} channels={channels ? channels : null} />
        <ToolBar onPause={onPause} onPlay={onPlay} onStop={onStop} onToggleLoop={onToggleLoop} isLoopOn={isLoopOn} isPlaying={isPlaying} isStoping={isStoping} />
      </main>
    </div>
  )
}

export default App;
