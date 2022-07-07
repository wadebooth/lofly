import React, { useState } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import './components/Styles/app.scss'
import Nav from './components/Nav'
import Library from './components/Library'
import LofiList from './components/LofiList'
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
        {/* <Player
          currentMusic={currentmusic}
          setCurrentmusic={setCurrentmusic}
          isplaying={setIsPlaying}
          music={music}
          setMusic={setMusic}
        /> */}
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
