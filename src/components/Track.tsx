type TrackProps = {
    src: string
    trackName: string
    dummyText: string
}

export const Track = ({src, trackName, dummyText}: TrackProps) => {
    return (
        <div className="track">
            <img className="track-img" src={src}/>
            <h5 className="track-name">{trackName}</h5>
            <div className="mt-1">
                <p className="track-description">
                    {dummyText}
                </p>
            </div>
            <button className="learn-more">Learn More</button>
        </div>
    );
}