import React, { useState } from 'react'
import LibraryMusic from './LibraryMusic'

//library for different songs

const Library = ({
  music,
  setCurrentmusic,
  setIsplaying,
  setMusic,
  librarystatus,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('default')

  const hipHopArr = music.filter((track) => {
    return track.category === 'hip-hop'
  })

  return (
    <div className={`library-container ${librarystatus ? 'show-library' : ''}`}>
      <div className='library-nav'>
        <h2>Library</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value='default'>Lofi Category:</option>
          <option value='hip-hop'>hip-hop</option>
        </select>
      </div>
      <div className='library-music-container'>
        {selectedCategory === 'hip-hop'
          ? hipHopArr.map((track) => (
              <LibraryMusic
                key={music.id}
                setCurrentMusic={setCurrentmusic}
                track={track}
                music={music}
                setMusic={setMusic}
                setIsplaying={setIsplaying}
              />
            ))
          : ''}
      </div>
    </div>
  )
}

//set up library

export default Library
