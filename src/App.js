import React, { useState } from 'react'
import Song from './components/Song'
import Nav from './components/Nav'
import Library from './components/Library'
import LofiList from './components/lofilist'
import './App.css'

document.title = 'Lofly'

function App() {
  const [music, setMusic] = useState(LofiList)
  const [currentmusic, setCurrentmusic] = useState(music[0])
  const [librarystatus, setLibraryStatus] = useState(false)
  const [isplaying, setIsPlaying] = useState(false)
  return (
    <div className='App'>
      <Nav librarystatus={librarystatus} setLibraryStatus={setLibraryStatus} />
      <main className='main-container'>
        <Song currentMusic={currentmusic} isplaying={isplaying} />
      </main>
      <Library
        librarystatus={librarystatus}
        music={music}
        setMusic={setMusic}
        setCurrentmusic={setCurrentmusic}
        setIsPlaying={setIsPlaying}
      />
    </div>
  )
}

export default App
