import React from 'react'

const Song = ({ currentMusic, isPlaying }) => {
  return (
    <div className='song-container'>
      <img
        src={currentMusic.cover}
        className={isPlaying ? 'rotate-animation' : ''}
        alt=''
      />
      <h1>{currentMusic.name}</h1>
      <h4>{currentMusic.artist}</h4>
    </div>
  )
}

export default Song
