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

  return <div>Library</div>
}

export default Library
