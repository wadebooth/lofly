import React, { useState } from 'react'
import LibraryMusic from './LibraryMusic'

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
    </div>
  )
}

export default Library
