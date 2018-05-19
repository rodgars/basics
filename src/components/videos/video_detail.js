import React from 'react';

const VideoDetail = ({ video }) => {

    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col s8">
            <div className="video-container">
                <iframe frameBorder="0" src={ url }></iframe>
            </div>
            <div className="details">
                <div><b>{ video.snippet.title }</b></div>
                <div>{ video.snippet.description }</div>
            </div>
        </div>
    );
};

export default VideoDetail;