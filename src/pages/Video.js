import React, {useRef, useState} from 'react'
import VideoFooter from './components/footer/VideoFooter'
import Videosidebar from './components/sidebar/Videosidebar'
import "./Video.css"

function Video({ likes, messages, shares, name, description, music, url }) {
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart() {
      if(!play){
            videoRef.current.play()
            setPlay(true)
      } else{
            videoRef.current.pause()
            setPlay(false)
      }
    }

    window.onwheel = function () {
      if (play) {
        videoRef.current.pause();
        setPlay(false);
        console.log();
      }
    };

    return (
      <div className='video'>
        <video 
          className="video_player"
          ref={videoRef}
          onClick={handdleStart}
          loop
          src={url}
        >
        </video>
        <Videosidebar 
          likes={likes}
          messages={messages}
          shares={shares}
        />
        <VideoFooter 
          name={name}
          description={description}
          music={music}
        />
      </div>
    )
}

export default Video