import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <a href="#!" onClick={() => onVideoSelect(video)} className="collection-item">
            <div className="row">
                <div className="col s6">
                    <img className="media-object" src={ imageUrl } />
                </div>
                <div className="col s6">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>
        </a>
    );
};

export default VideoListItem;