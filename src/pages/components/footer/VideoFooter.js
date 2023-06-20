import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function video_footer({ name, description, music }) {
  return (
    <div className='videofooter'>
      <div className='videofooter_text'>
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className='videofooter_music'>
          <MusicNoteIcon className='videofooter_icon' />
          <div className='videofooter_titlemusic'>
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img 
      className='videofooter_record'
      alt='Imagem animada de um vinil'
      src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
      />  
    </div>
  )
}

export default video_footer