import React, { useState, useEffect } from 'react';
import axios from './Axios';
import './App.css';
import Video from './Video';



function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/v2/posts");
        setVideos(res.data);
        return res;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, shares, messages }) => (
          <Video
            key={url}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
