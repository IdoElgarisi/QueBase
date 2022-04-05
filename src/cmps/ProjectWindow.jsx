import EventLine from "./EventLine";

const ProjectWindow = ({ channels }) => {
    return (
        <div className="project-window-container">
            <div className="project-window">
                {channels?.map((channel, idx) => {
                    return <EventLine channelInfo={channel} key={idx} />
                })}
            </div>
        </div>
    )
}
export default ProjectWindow;