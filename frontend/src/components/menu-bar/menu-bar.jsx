// src/components/ToggleClone/ToggleClone.jsx
import React, { useState } from 'react';
import AudioClone from '../audio-clone/AudioClone';
import VideoClone from '../video-clone/VideoClone';
import './menu-bar.css';

const menuBar = () => {
  const [activeTab, setActiveTab] = useState('speech');

  return (
    <div className="toggle-container">
      <div className="toggle-buttons">
        <button
          className={activeTab === 'speech' ? 'active' : ''}
          onClick={() => setActiveTab('speech')}
        >
          Speech
        </button>
        <button
          className={activeTab === 'video' ? 'active' : ''}
          onClick={() => setActiveTab('video')}
        >
          Video
        </button>
      </div>

      <div className="toggle-content">
        {activeTab === 'speech' && <AudioClone />}
        {activeTab === 'video' && <VideoClone />}
      </div>
    </div>
  );
};

export default menuBar;
