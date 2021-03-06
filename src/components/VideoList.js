import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const renderList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelected={onVideoSelected}
      />
    );
  });
  return <div className="ui relaxed  divided list">{renderList}</div>;
};

export default VideoList;
