// components/VideoComponent.js

import React from 'react';

const VideoComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: '60vh' }}>
      <iframe
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/TUazQWFsDxY"
        title="Video de ejemplo"
        allowFullScreen
        style={{ width: '80%', height: '80%' }}
      />
    </div>
  );
};

export default VideoComponent;
