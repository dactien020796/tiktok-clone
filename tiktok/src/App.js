import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './axios.js';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get('/api/videos');
      setVideos(response.data);
      return response;
    }

    fetchVideos();
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(item => (
          <Video key={item._id}
            url={item.url}
            channel={item.channel}
            description={item.description}
            song={item.song}
            likes={item.likes}
            messages={item.messages}
            shares={item.shares} />
        ))}
      </div>
    </div>
  );
}

export default App;
