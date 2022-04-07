const EventLine = ({ channelInfo }) => {
    return (
        <div className="event-line-container">
            <div className={`event-line ${channelInfo.color}`}>
                <p>{channelInfo.channelName}</p>
            </div>
        </div>
    )
}
export default EventLine;